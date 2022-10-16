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

#environment
ENV PORT 3000

#expose port for
EXPOSE $PORT

CMD ["npm", "run", "start-watch"]