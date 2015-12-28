'use strict';

module.exports = function (config, router) {

    require('./resources/author-resource')(config, router);
    require('./resources/auth-resource')(config, router);

};
