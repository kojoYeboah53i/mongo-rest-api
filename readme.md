[![downloads](https://img.shields.io/github/last-commit/kojoyeboah53i/mongo-rest-api?logo=github&style=for-the-badge)]
[![devDependency Status](https://david-dm.org/socketio/socket.io/dev-status.svg)](https://david-dm.org/socketio/socket.io#info=devDependencies)
[![NPM version](https://badge.fury.io/js/socket.io.svg)](https://www.npmjs.com/package/socket.io)
[![](https://img.shields.io/github/forks/kojoyeboah53i/mongo-rest-api?logo=github&style=for-the-badge)]
## installation
   -clone this repository
```bash
  run npm install
```
## start dev server
```bash
 run npm start
```
## enviroment variables
```bash
 include .env file
.env
    -DB_CONNECTION=<replace with url for mongodb>
```
 ## Deploy to Heroku
You can also deploy this app to Heroku:
Edit your `Procfile` and add the following line:
```bash
    web: node app.js
```
Configure your Heroku app to point to your MongoDB instance:
```bash
    heroku config:add DB_CONNECTION=<replace with url for mongodb>
```

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

