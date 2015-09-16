/**
 * Created by Tom on 15/09/2015.
 */
var expect = require('chai').expect;

var main = require('../index.js'); //import main js file



describe('add', function(){

    expect(main.add(1)).to.be.a('number');
});