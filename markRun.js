var Xray = require('.')
var xray = Xray()

xray('https://www.eph110.se/guitClimDisplay/', 'title')(function(err, obj) {
  console.log(obj)
})