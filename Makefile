start-deps:
	docker-compose up -d

stop-deps:
	docker-compose down

init-db: start-deps
	node ./adapters/mongo/init.js

run:
	node ./index.js
