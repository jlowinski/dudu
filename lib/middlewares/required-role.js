'use strict';

module.exports = function (role, loginUrl) {
    return function *(next) {
        if(this.session.role === role) yield next;
        else this.redirect(loginUrl);
    };
};
