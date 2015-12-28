'use strict';

module.exports = function (config, router) {

    router.get('/auth/boss', function *(next) {
        yield this.render('auth/boss');
        yield next;
    });

};
