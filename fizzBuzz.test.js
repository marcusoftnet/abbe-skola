/* global define, it, describe */
const should = require('should')
const say = require('say')
const fizzBuzz = require('./fizzBuzzer')











describe('tal för tal - ', () => {
  it('1 ska bli 1', () => { fizzBuzz.tal(1).should.equal('1') })
  it('2 ska bli 2', () => { fizzBuzz.tal(2).should.equal('2') })
  it('3 ska bli Fizz', () => { fizzBuzz.tal(3).should.equal('Fizz') })
  it('4 ska bli 4', () => { fizzBuzz.tal(4).should.equal('4') })
  it('5 ska bli Buzz', () => { fizzBuzz.tal(5).should.equal('Buzz') })
  it('6 ska bli Fizz', () => { fizzBuzz.tal(6).should.equal('Fizz') })
  it('7 ska bli 7', () => { fizzBuzz.tal(7).should.equal('7') })
  it('8 ska bli 8', () => { fizzBuzz.tal(8).should.equal('8') })
  it('9 ska bli Fizz', () => { fizzBuzz.tal(9).should.equal('Fizz') })
  it('10 ska bli Buzz', () => { fizzBuzz.tal(10).should.equal('Buzz') })
  it('11 ska bli 11', () => { fizzBuzz.tal(11).should.equal('11') })
  it('12 ska bli Fizz', () => { fizzBuzz.tal(12).should.equal('Fizz') })
  it('13 ska bli 13', () => { fizzBuzz.tal(13).should.equal('13') })
  it('14 ska bli 14', () => { fizzBuzz.tal(14).should.equal('14') })
  it('15 ska bli FizzBuzz', () => { fizzBuzz.tal(15).should.equal('FizzBuzz') })

})










































describe('Från ett tal till ett annat - ', () => {
  it('från 1 till 1', () => fizzBuzz.mellanTal(1, 1).should.equal('1'))
  it('från 1 till 2', () => fizzBuzz.mellanTal(1, 2).should.equal('1,2'))
  it('från 1 till 3', () => fizzBuzz.mellanTal(1, 3).should.equal('1,2,Fizz'))
  it('från 1 till 15', () => fizzBuzz.mellanTal(1, 15).should.equal('1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz'))
  //it('från 1 till 100', () => fizzBuzz.mellanTal(1, 100).should.equal('1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz') )
})













// say.speak(fizzBuzz.mellanTal(1, 15))
// say.speak(fizzBuzz.mellanTal(1, 10000), 'Samantha', 4)
// say.speak(fizzBuzz.mellanTal(1, 3), 'Samantha', 0.5)