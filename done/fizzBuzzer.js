
function tal (tal) {
  if(tal % 3 === 0 && tal % 5 === 0) return 'FizzBuzz'
  if(tal % 3 === 0) return 'Fizz'
  if(tal % 5 === 0) return 'Buzz'
  return tal.toString()
}

function mellanTal (från, till) {
  let svarslista = []
  for(let i=från; i <= till; i++){
    let talet = tal(i)
    svarslista.push(talet)
  }
  let svaret = svarslista.join(',')
  return svaret
}







module.exports = {
  tal,
  mellanTal
}
