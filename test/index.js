/**
 * Created by Tom on 15/09/2015.
 */
var expect = require('chai').expect;

var main = require('../index.js'); //import main js file



describe('run child process', function(){

    expect(main.execute('echo hi')).to.be.a('string');
});