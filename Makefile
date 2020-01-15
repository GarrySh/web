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

.PHONY: dev compose-build
