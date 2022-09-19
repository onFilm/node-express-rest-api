#use node dependency
FROM node:17

#set work directory
WORKDIR /src

#copy package json 
COPY package*.json ./

#run npm install for installing dependencies
RUN npm install

#copy files
COPY . .

#expose port for
EXPOSE 3000

CMD ["npm", "start"]