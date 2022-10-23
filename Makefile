container:
	sudo docker ps -a
image:
	sudo docker images 
build:
	sudo docker build -t <image_name> .
run:
	sudo docker run -v \%cd%\:/src -v /src/node_modules -d -p 3000\:3000 --name rest-api-app node-express-rest-api