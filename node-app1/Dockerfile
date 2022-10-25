FROM node:16-alpine

COPY ./app /app

WORKDIR /app

RUN npm install

USER node

EXPOSE 3000

CMD ["node", "./app.js"]