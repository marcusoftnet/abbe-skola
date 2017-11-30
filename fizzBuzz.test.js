/* global define, it, describe */
const should = require('should')
const fizzBuzz = require('./fizzBuzzer')





// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// 1 - 15
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz



describe('tal för tal - ', () => {
  it('1 ska bli 1', () => { fizzBuzz.tal(1).should.equal('1') })
})






describe('Från ett tal till ett annat - ', () => {
  //it('från 1 till 1', () => fizzBuzzMellanTal(1, 1).should.equal('1'))
})
