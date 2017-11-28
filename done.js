/* global define, it, describe */
const should = require('should')
// 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// 1 - 15
// 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, FizzBuzz




function fizzBuzzTal(tal) {
  if (tal % 3 === 0 && tal % 5 === 0) { return 'FizzBuzz' }
  if (tal % 3 === 0) { return 'Fizz' }
  if (tal % 5 === 0) { return 'Buzz' }

  return tal.toString()
}

describe('tal för tal ', () => {
  it('1 blir 1', () => fizzBuzzTal(1).should.equal('1'))
  it('2 blir 2', () => fizzBuzzTal(2).should.equal('2'))
  it('3 blir Fizz', () => fizzBuzzTal(3).should.equal('Fizz'))
  it('4 blir 4', () => fizzBuzzTal(4).should.equal('4'))
  it('5 blir Buzz', () => fizzBuzzTal(5).should.equal('Buzz'))
  it('6 blir Fizz', () => fizzBuzzTal(6).should.equal('Fizz'))
  it('7 blir 7', () => fizzBuzzTal(7).should.equal('7'))
  it('8 blir 8', () => fizzBuzzTal(8).should.equal('8'))
  it('9 blir Fizz', () => fizzBuzzTal(9).should.equal('Fizz'))
  it('10 blir Buzz', () => fizzBuzzTal(10).should.equal('Buzz'))
  it('11 blir 11', () => fizzBuzzTal(11).should.equal('11'))
  it('12 blir Fizz', () => fizzBuzzTal(12).should.equal('Fizz'))
  it('13 blir 13', () => fizzBuzzTal(13).should.equal('13'))
  it('14 blir 14', () => fizzBuzzTal(14).should.equal('14'))
  it('15 blir FizzBuzz', () => fizzBuzzTal(15).should.equal('FizzBuzz'))


})





function fizzBuzzMellanTal (från, till) {
  let svar = []
  for (let i = från; i <= till; i++) {
    svar.push(fizzBuzzTal(i))
  }
  return svar.join(',')
}

describe('Lista av tal', () => {
  it('från 1 till 1', () => fizzBuzzMellanTal(1, 1).should.equal('1'))
  it('från 1 till 2', () => fizzBuzzMellanTal(1, 2).should.equal('1,2'))
  it('från 1 till 3', () => fizzBuzzMellanTal(1, 3).should.equal('1,2,Fizz'))
  it('från 1 till 15', () => fizzBuzzMellanTal(1, 15).should.equal('1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz'))
})
