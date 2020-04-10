FROM node:13.10.1-alpine

# Create app directory
WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD [ "npm", "run", "start" ]