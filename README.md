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
###### Docker logs
    docker logs <container_name>    
###### Docker build image    
	docker build -t <image_name> .
###### Docker run container
	docker run -d -p 3000:3000 --name <container_name> <image_name>
###### with bind mount for syncing source code -for windows (CMD and Powershell)
    docker run -v %cd%:/src -d -p 3000:3000 --name rest-api-app node-express-rest-api
    docker run -v ${pwd}:/src -d -p 3000:3000 --name rest-api-app node-express-rest-api
###### with bind mount for syncing source code -for Linux 
	docker run -v $(pwd):/src -d -p 3000:3000 --name rest-api-app node-express-rest-api
###### with bind mount plus anonymous valume  
    docker run -v %cd%:/src -v /src/node_modules -d -p 3000:3000 --name rest-api-app node-express-rest-api

**Docker command for this project - for developer**
running docker-compose.yml (-d for detached mode, --build for forcefully build)

    docker-compose up -d --build

shutdown docker-compose

    docker-compose down -v  