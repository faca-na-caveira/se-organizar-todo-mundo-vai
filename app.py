import yaml
from flask import Flask
from flask import make_response
from flask import render_template
from flask import request
from flask import send_from_directory
from flask_restful import inputs, reqparse, Resource, Api
from flask_pymongo import PyMongo
from pymongo.errors import DuplicateKeyError
from datetime import datetime as dt
from decouple import config

# If MONGODB_URL hasn't been setted in ENVIROMENT, use localhost (mongodb://localhost:27017/producers_db)
APP_URL = config('MONGODB_URL', default="mongodb://localhost:27017/producers_db")

# Variable to check if server is on production or local
DEBUG = config('DEBUG', default="True", cast=bool)

# Configuring App
app = Flask(__name__)
app.config["MONGO_URI"] = APP_URL
mongo = PyMongo(app, config_prefix='MONGO')

# Parse only arguments below:
parser = reqparse.RequestParser()
parser.add_argument('email', required=True, help="Email cannot be blank!")
parser.add_argument('name', required=True, help="Name cannot be blank")
parser.add_argument('company', required=False)
parser.add_argument('is_company', type=inputs.boolean)


class Producer(Resource):

    def post(self):
        """
        1 - Get current date and hour (now), and save with BRT Timezone!!!
        2 - Validate the args passed in POST
        3 - Try to insert a new Producer, if the e-mail already have registered
        returns an error message.
        :return:
        """
        data = parser.parse_args()
        print(data)
        data['ip'] = request.headers.get('X-Forwarded-For', request.remote_addr)
        data['created_at'] = dt.now()
        try:
            mongo.db.producers.insert(data)
            content = {"message": "A new producer has been registered!", "status_code": 200}
        except DuplicateKeyError:
            content = {"message": "Oh no! This e-mail already have registered", "dup_item": data['email'],
                       "status_code": 400}
        return content, content['status_code']


api = Api(app)
api.add_resource(Producer, "/api", endpoint="producers")

seo_pages = yaml.load(open("seoPages.yml", encoding="utf8"))


@app.route("/", defaults={'path': ''})
@app.route("/<path:path>")
def index(path):
    seoSettings = {
        'title': 'Se organizar, todo mundo vai',
        'description': 'Blog para produtores e Organizadores de Eventos',
        'keywords': 'produtores de evento organizado, importância de ser organizado em um evento, importância da organização do evento',
        'image': request.host_url + 'static/images/logo.jpg'
    }

    if path in seo_pages.keys():
        seoSettings['title'] = seo_pages[path]['title']
        seoSettings['description'] = seo_pages[path]['description']
        seoSettings['keywords'] = seo_pages[path]['keywords']
        seoSettings['image'] = request.host_url + seo_pages[path]['image']

    return render_template('index.html', seoSettings=seoSettings)


@app.route("/sitemap.xml", methods=['GET'])
def sitemap():
    pages = [request.host_url + page for page in seo_pages.keys()]
    pages.append(request.host_url)
    sitemap_xml = render_template('sitemap.xml', pages=pages)
    response = make_response(sitemap_xml)
    response.headers["Content-Type"] = "application/xml"
    return response


@app.route('/favicon.ico')
def favicon():
    return send_from_directory('./static/images/',
                               'favicon.ico', mimetype='image/vnd.microsoft.icon')

if __name__ == '__main__':
    app.run(debug=DEBUG)
