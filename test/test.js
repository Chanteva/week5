var assert = require('assert');
var triangle = require('../triangle.js');
describe('triangle', function (){
    it('should return the area of a triangle', function(){
        assert.equal(triangle(2,2),2);
    });
});