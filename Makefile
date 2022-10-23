container:
	docker ps -a
image:
	docker images 
build:
	docker build -t <image_name> .
run:
    docker run -v %cd%:/src -v /src/node_modules -d -p 3000:3000 --name rest-api-app node-express-rest-api