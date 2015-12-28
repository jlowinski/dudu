'use strict';

module.exports = function (config, router) {

    router.get('/author', function *(next) {
        this.body = config.get('author');
        yield next;
    });

};
