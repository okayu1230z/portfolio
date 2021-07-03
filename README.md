# portfolio on https://www.okmt.dev/portfolio

This is my portfolio code and development environment.

BootstrapVue (^4.6.0) & Vue.js (^2.6.11) & Ruby on Rails (^6.0.0) & MySQL (8.0) development environment on Docker

## How to setup

Please exec:

`$ docker-compose run frontend npm install @vue/cli bootstrap-vue bootstrap`

Please edit Dockerfile, Uncomment out:

```
COPY package.json .
```

Finally,

`$ docker-compose up`

After that, please docker-compose up every time you execute it.

## Maintenance

If you want login frontend container:

`$ docker-compose run front sh`

## Additional packages

vue-router vue-head
