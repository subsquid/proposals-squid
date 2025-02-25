process: migrate
	@node -r dotenv/config lib/processor.js


build:
	@npm run build


serve:
	@npx squid-graphql-server


migrate:
	@npx squid-typeorm-migration apply


migration:
	@npx squid-typeorm-migration generate


codegen:
	@npx squid-typeorm-codegen


typegen:
	@npx squid-substrate-typegen typegen/typegen.json


up:
	@docker-compose up -d


down:
	@docker-compose down


.PHONY: build serve process migrate codegen typegen up down