FROM node:16.10.0

RUN mkdir -p /usr/src/app

RUN apt-get update && apt install telnet -y

WORKDIR /usr/src/app

COPY package.*json ./

RUN npm install 

COPY . .

EXPOSE 3000

CMD [ "npm", "start" ]