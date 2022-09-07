'use strict';

module.exports = (req, res, next) => {
    const num = parseInt(req.query.num);
    if ( !isNaN(num)) {
        req.newNum = num * num;
        next();
    } else {
        next('Wrong Number Try and Change it!');
    }
}