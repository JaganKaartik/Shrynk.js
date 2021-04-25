install:
		cd app && yarn install 
		cd server && yarn install 

build: 
		cd app && yarn build
		cd server && yarn build

run-dev: 
		cd server && yarn start:dev

run-prod: 
		cd server && yarn start
