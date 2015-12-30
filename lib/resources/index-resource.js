'use strict';

module.exports = function (config, router) {

    router.get('/', function *(next) {
        if(this.session.role === 'boss') this.redirect('/boss');
        else this.redirect('/static/html/index.html');
        yield next;
    });

};
