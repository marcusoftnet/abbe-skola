/* global define, it, describe */
const should = require('should')
const say = require('say')
const fizzBuzz = require('./fizzBuzzer')











describe('tal för tal - ', () => {
  it('1 ska bli 1', () => { fizzBuzz.tal(1).should.equal('1') })
})










































// describe('Från ett tal till ett annat - ', () => {
//   it('från 1 till 1', () => fizzBuzz.mellanTal(1, 1).should.equal('1'))
// })

// say.speak(fizzBuzz.mellanTal(1, 15))
// say.speak(fizzBuzz.mellanTal(1, 10000), 'Samantha', 4)