"""
    EXTRACT PRODUCERS TO CSV!
    Description: Query all producers registered in the Database and 
    export to CSV.
"""
from decouple import config
from pymongo import MongoClient
import csv
import pyexcel as pe

# If MONGODB_URL hasn't been setted in ENVIROMENT, use localhost (mongodb://localhost:27017/producers_db)
APP_URL = config('MONGODB_URL', default="mongodb://localhost:27017/producers_db")

client = MongoClient(APP_URL)
db = client.producers_db

pipeline = [
    {"$project": {
        "_id": 0,
        "nome": "$name",
        "endereco_ip": "$ip",
        "email": 1,
        "empresa": {"$cond": { "if": { "$eq": ["$is_company", True]}, "then": "sim", "else": "nao"}},
        "nome_empresa": "$company",
        "enviado_em": {"$dateToString": { "format": "%d/%m/%Y %H:%M:%S", "date": "$created_at"}}
    }}
]

producers = list(db.producers.aggregate(pipeline))

with open('producers.csv', 'w') as outfile:
    columns = ['nome', 'email', 'endereco_ip', 'empresa', 'nome_empresa', 'enviado_em']
    writer = csv.DictWriter(outfile, fieldnames=columns)

    writer.writeheader()

    for row in producers:
        writer.writerow(row)

pe.merge_all_to_a_book(['producers.csv'], "producers.xlsx")
