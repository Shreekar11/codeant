FROM node:21-slim

WORKDIR /app

COPY package*.json ./

COPY . . 

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]