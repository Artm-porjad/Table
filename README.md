Для запуска проекта в докере нужно прописать команды:
```console
$ sudo docker-compose build
$ sudo docker network create test1
$ sudo docker-compose up -d postgresql
$ sudo docker-compose up alembic backend frontend
```
Для добавления тестовых данных нужно ввести:
```console
$ sudo docker-compose build alembic_add_data
$ sudo docker-compose up alembic_add_data
```