'use strict';

module.exports = function (config, router) {

    const comongo = require('co-mongo');
    comongo.configure({
        host: config.get('mongodb.host'),
        port: config.get('mongodb.port'),
        name: config.get('mongodb.name'),
        pool: config.get('mongodb.pool'),
        collections: ['users']
    });

    const authLogic = new (require('./auth/logic/auth-logic'))();

    require('./resources/author-resource')(config, router);
    require('./resources/auth-resource')(config, router, authLogic, comongo);

};
