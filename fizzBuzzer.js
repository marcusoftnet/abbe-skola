function tal (tal) {
  if(tal % 3 === 0 && tal % 5 === 0)
    return 'FizzBuzz'
  if(tal % 3 === 0)
    return 'Fizz'
  if(tal % 5 === 0)
    return 'Buzz'
  return tal.toString()
}



























function mellanTal (från, till) {
  let svarsLista = []
  for(let i=från;i<=till;i++){
    let svar = tal(i)
    svarsLista.push(svar)
  }
  return svarsLista.join(',')
}





























module.exports = {
  tal,
  mellanTal
}
