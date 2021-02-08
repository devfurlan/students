## Configuração

Como este projeto é apenas para apresentação, as configurações necessárias estão no arquivo `.env`, na raiz da pasta `api`.

Altere qualquer configuração, caso necessário.

## Banco de dados

O banco de dados pode ser criar utilizando o Docker:

```bash
docker run --name laravel_pg -e POSTGRES_PASSWORD=123456 -v ~/students_db:/var/lib/postgresql/data -p 5437:5432 -d postgres:alpine
```

Lembre-se de inicializar o container do BD sempre que for rodar a aplicação.

Seguindo esse passo, as configurações do `.env` já estarão corretas. Caso contrário, altere no arquivo.

## Laravel

Acesse a raiz da pasta `api` pelo terminal, e instale as dependências utilizando o comando:

```bash
composer install
```
Ainda no terminal e com o banco de dados ativo, execute o comando abaixo para criar as tabelas no banco de dados:  
```bash
php artisan migrate
```

Para inserir alguns dados falsos para testes nas tabelas:

```bash
php artisan migrate:refresh --seed
```

Inicie o back-end da aplicação:

```bash
php artisan serve
```

Geralmente o endereço será: http://localhost:8000/


[comment]: <> (### API's)

[comment]: <> (#### POST `http://localhost:8000/api/auth/login`)

[comment]: <> (Cria o token JWT para autenticação.)

[comment]: <> (Deve ser passado os seguintes parâmetros:)

[comment]: <> (```json)

[comment]: <> ({)

[comment]: <> (    "email": "furlan@hotmail.com.br",)

[comment]: <> (    "password": "123456")

[comment]: <> (})

[comment]: <> (```)

[comment]: <> (#### POST `http://localhost:8000/api/auth/login`)

[comment]: <> (Cria o token JWT para autenticação.)

[comment]: <> (Deve ser passado os seguintes parâmetros:)

[comment]: <> (```json)

[comment]: <> ({)

[comment]: <> (    "email": "furlan@hotmail.com.br",)

[comment]: <> (    "password": "123456")

[comment]: <> (})

[comment]: <> (```)

