var assign = require('lodash.assign');
module.exports = function (foo, appliedOptions) {
    return function (options) {
        return foo.call(this, assign({}, appliedOptions, options));
    };
};
