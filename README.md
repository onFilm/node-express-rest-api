[![node-express-rest-api-ci-cd](https://github.com/onFilm/node-express-rest-api/actions/workflows/cicd.yml/badge.svg?branch=main)](https://github.com/onFilm/node-express-rest-api/actions/workflows/cicd.yml)


**Basic docker commands**

###### List containers
	docker ps -a
###### List images*
	docker images
###### Delete container
	docker rm <container_id> -f 
###### Delete Images
	docker image rm <image_id>
###### Enter into docker File System
	docker exec -it <container_name> bash

**Docker command for this project - for developer**

	cd node-express-rest-api/
	docker build -t node-express-rest-api .
	docker run -d -p 3000:3000 --name rest-api-app node-express-rest-api
	with bind mount for syncing source code
	docker run -v $(pwd):/src -d -p 3000:3000 --name rest-api-app node-express-rest-api