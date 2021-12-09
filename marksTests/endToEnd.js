var assert = require('assert')
var expect = require('chai').expect
var Xray = require('..')
var xray = Xray()


describe('Getting titles from some sites', function (done) {
  it('should find the title of the Google page', async function() {

    let result = await xray('https://www.google.com', 'title')( function (err, obj) {
      // return obj
    })
    
    expect(result).to.be.eq('Google')  
  })

  it('should get a string back when calling google for a title', async function() {
    var result = await xray('https://www.google.com', 'title')( function (err, obj) {
      
    })
    expect(result).to.be.a('string')
  })

})

describe('Getting information from Single Page Applications', function() {

  it('should show 371 which is a number in a input element that is loaded after page load', async function() {
    var result = await xray('https://www.eph110.se/guitClimDisplay/', '#number-of-readings')(function (err, res) {
      
    })

    expect(result).to.be.eq('371')
  })

  // TODO: Write test for https://eph110.se/SPA

})

