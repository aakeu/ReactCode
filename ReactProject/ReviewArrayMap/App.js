
   

// this is returning all the number in a array and mutiplying them
const nums = [1, 2, 3, 4, 5]
//nums.map handles the for loop for us
const squared = nums.map (function(bola) {
    console.log(bola)
    return bola * bola 
})

console.log(squared)

//this is return all the item in a array and turn Capital letter
const names = ["alice", "bob", "charlie", "danielle"]

const oruko = names.map((jamal) => {

return  jamal[0].toUpperCase() + jamal.slice(2)
})

console.log(oruko)

// this is add a <p> tage to every array return that was return. 

const pokemon = ["Bulbasur", "Charmander", "Squirtle"]

const elements = pokemon.map((mon) =>{
    return `<p>${mon}</p>`
}) 

console.log(elements)


// another way for the one above

const poke = ["Bulba", "Charmand", "Squirt"]

const Abike = poke.map(mon => `<h3>${mon}</h3>`)
console.log(Abike)





