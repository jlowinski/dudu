'use strict';

const requiredRole = require('../middlewares/required-role');

module.exports = function (config, router) {

    router.get('/boss',
        requiredRole('boss', '/static/html/auth/boss.html'),
        function *(next) {
            this.redirect('/static/html/boss/index.html');
            yield next;
        });

};
