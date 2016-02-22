"use strict";
var assignPartial = require('../index');
var sinon = require('sinon');
describe("assign-partial", function () {
    it("should return a function that has partially applied options-arguments", function () {
        var spy = sinon.spy();
        var applied = assignPartial(spy, {foo: true});
        applied({bar: true});
        sinon.assert.calledWith(spy, {foo: true, bar: true});
    });
    it("should handle undefined as the partially applied options", function () {
        var spy = sinon.spy();
        var applied = assignPartial(spy);
        applied({bar: true});
        sinon.assert.calledWith(spy, {bar: true});
    });
    it("should handle undefined as the final arguments", function () {
        var spy = sinon.spy();
        var applied = assignPartial(spy, {foo: true});
        applied();
        sinon.assert.calledWith(spy, {foo: true});
    });
});
