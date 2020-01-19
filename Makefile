create-env:
	@if ! [ -a .env ] ; \
	then \
		cp .env.example .env ; \
	fi;

compose-build: create-env
	docker-compose build

dev:
	docker-compose up&
	yarn run frontend:dev

db-local-create:
	docker create --name db-local -e POSTGRES_USER=root -e POSTGRES_PASSWORD=root -p 5432:5432 postgres:11
	
dev-local:
	docker start db-local
	DB_HOST=localhost yarn gateway:dev

.PHONY: dev compose-build
