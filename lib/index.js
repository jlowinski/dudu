'use strict';

const config = require('config');

const koa = new require('koa')();
koa.use(require('koa-bodyparser')());

const router = require('koa-router')();
koa.use(router.routes());

require('./resources')(config, router);

koa.listen(config.get('server.listen.port'));
