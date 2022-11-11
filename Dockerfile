# syntax=docker/dockerfile:1

FROM alpine:3.15
ENV NODE_VERSION 19.0.1

ENV NODE_ENV=production

WORKDIR /app

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install --production

COPY . .

CMD [ "node", "index.js" ]