# API para o Blog direcionado a Produtores de Eventos

API Rest feita com:

- Python/Flask
- MongoDB

Servidor:

- Heroku

### Como rodar? ###

1. Instale o MongoDB
``` 
https://docs.mongodb.com/manual/installation/
```

2. Rode o MongoDB (Através do terminal)
```
mongod
```

3. Instale os plugins necessários em seu ambiente virtual python (preferencialmente)
```
pip install -r requirements.txt
```

4. Partiu rodar

```
python api.py
```

Acesse em: http://127.0.0.1:5000/

### Como fazer o deploy? ###

1. Primeiro certifique-se que tem o Heroku Toolbelt instalado, como instalar pode ser visto no link abaixo:
```
https://devcenter.heroku.com/articles/heroku-cli
```

2. Após a instalação, abra o terminal e logue no heroku com a conta da nossa equipe!(caso não esteja)
```
heroku login
```

3. Salve sua chave no Heroku
```
ssh-keygen -t rsa
```

```
heroku keys:add
```

Mais detalhes sobre como gerar a chave no link abaixo:
```
https://devcenter.heroku.com/articles/keys
```

4. Manda bala no push!

```
git push heroku master
```

Site: https://facanacav-blog.herokuapp.com/