'use strict';

const path = require('path');

const config = require('config');

const koa = new require('koa')();
koa.use(require('koa-bodyparser')());
koa.use(function *(next) {
    try {
        yield next;
    } catch (err) {
        if(err.name === 'ValidationError') this.status = 400;
        else throw err;
    }
});
koa.use(require('koa-bouncer').middleware());
koa.keys = ['dudu'];
koa.use(require('koa-generic-session')({
    key: 'dudu.sid'
}));
const router = require('koa-router')();
koa.use(router.routes());
const render = require('koa-ejs');
const serve = require('koa-static');
koa.use(serve(path.join(__dirname, 'public'), {
    maxage: config.get('http.static.maxAge')
}));
render(koa, {
    root: path.join(__dirname, 'views'),
    layout: false,
    viewExt: 'html',
    cache: false,
    debug: config.get('env') === 'dev'
});
require('./resources')(config, router);

koa.listen(config.get('server.listen.port'));
