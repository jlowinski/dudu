'use strict';

module.exports = function (config, router, authLogic, comongo) {

    router.post('/auth/boss', function *(next) {
        this.validateBody('password')
            .required()
            .isString();
        const db = yield comongo.get();
        var isSuccess = false;
        try {
            isSuccess = yield authLogic.boss(this.request.body.password, db);
        } finally {
            yield db.close();
        }
        if(!isSuccess) {
            this.redirect('/static/html/auth/boss.html?incorrectPassword=true');
        }
        yield next;
    });

};
