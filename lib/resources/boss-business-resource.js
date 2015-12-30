'use strict';

const requiredRole = require('../middlewares/required-role');

module.exports = function (config, router) {

    router.get('/boss/business',
        requiredRole('boss', '/static/html/auth/boss.html'),
        function *(next) {
            yield this.render('boss/business/index');
            yield next;
        });

};
