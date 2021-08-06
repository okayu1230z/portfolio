FROM node:16.6-alpine3.11

ENV APP_HOME /app
RUN mkdir -p $APP_HOME
WORKDIR $APP_HOME

RUN apk update
RUN npm install -g @vue/cli

COPY package.json .
RUN npm install
