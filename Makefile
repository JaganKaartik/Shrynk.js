install:
		cd app && yarn install --pure-lockfile
		cd server && yarn install --pure-lockfile

build: 
		cd app && yarn build
		cd server && yarn build

run-dev: 
		cd server && yarn start:dev

run-prod: 
		cd server && yarn start
