// CommonJS, every file is module (by default)
// Modules - Encapsulated code (only share minimum)

const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative-flavour')
require('./7-mind-grenades')

sayHi(`Susan`)
sayHi(names.rose)
console.log(data)
