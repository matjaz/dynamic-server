FROM node:20-alpine

EXPOSE 3000

COPY package*.json .

RUN npm install

COPY index.js .

CMD ["node", "index.js"]
