FROM node:16 AS builder

WORKDIR /app

COPY /frontend .

RUN yarn install

RUN yarn run build

FROM nginx:1.22.0

COPY --from=builder /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY /docker/frontend/nginx/nginx.conf /etc/nginx/conf.d

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]