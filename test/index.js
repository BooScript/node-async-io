/**
 * Created by Tom on 15/09/2015.
 */
var expect = require('chai').expect;
var should = require('chai').should();

var main = require('../index.js'); //import main js file



describe('when execute is called with command - echo hi', function(){

   it('error should equal null', function(done){
       main.execute('echo hi', function(err, stdout, stderr){
            expect(err).to.equal(null);
            done();
       })
   });
});


describe('when execute is called with command - asdf', function(){
    it('error should not equal null', function(done){
        main.execute('asdf', function(err, stdout, stderr){
            expect(err).not.to.equal(null);
            done();
        })
    });

});
