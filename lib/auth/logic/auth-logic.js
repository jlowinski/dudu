'use strict';

const co = require('co');
const md5 = require('md5');

const AuthLogic = module.exports = function () {};

function makeHash(password) {
    return md5(password);
}

AuthLogic.prototype.boss = function (password, db) {
    return co.call(this, function *() {
        const boss = yield db.users.findOne({
            'name': 'dudu'
        });
        return makeHash(password) === boss.password;
    });
};
