FROM node:16 AS builder

WORKDIR /app

COPY /frontend .

RUN yarn install

RUN yarn run build

EXPOSE 3000

CMD ["yarn", "run", "start"]