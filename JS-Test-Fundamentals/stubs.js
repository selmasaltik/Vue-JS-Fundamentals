let Pokemons = {
  amount() {
    // Call to database
  },

  say(str) {
    console.log('Your Pokedox says', str)
  }
}

function howMyCollection() {
  const size = Pokemons.amount()
  if(size === undefined)
    return Pokemons.say('Ooops, not sure how many you have')
  if(size < 10)
    return Pokemons.say('You only have a few, you need more')
  if(size < 50)
    return Pokemons.say('You have quite some favorites. Keep going')
  return Pokemons.say('You are quite collector')
}

const originalAmount = Pokemons.amount

function stubAmount(amount) {
  Pokemons.amount = () => amount
}

function havePokemons(amount) {
  stubAmount(amount)
  howMyCollection()
}

havePokemons()
havePokemons(5)
havePokemons(17)
havePokemons(100)