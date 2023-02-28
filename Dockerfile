FROM node:alpine
LABEL maintainer="ItepBrasil"
WORKDIR /usr/app
COPY package*.json .
RUN npm install
CMD [ "npm", "start" ]
COPY . .
