process: migrate
	@node -r dotenv/config lib/processor.js


serve:
	@npx squid-graphql-server


migrate:
	@npx sqd db:migrate


migration:
	@npx sqd db:create-migration


build:
	@npm run build


codegen:
	@npx sqd codegen


typegen:
	@make explore
	@npx squid-substrate-typegen ./typegen/typegen.json


explore:
	@npx squid-substrate-metadata-explorer \
		--chain wss://acala.api.onfinality.io/public-ws \
		--archive https://acala.archive.subsquid.io/graphql \
		--out ./typegen/versions.jsonl


up:
	@docker-compose up -d


down:
	@docker-compose down


.PHONY: process serve start codegen migration migrate up down typegen
