let nameArray = [
  { name: 'Max ', age: 6, species: ' dog ' },
  { name: 'Bella ', age: 2, species: ' cat ' },
  { name: 'Cooper ', age: 3, species: 'rabbit' },
]

function nameadding() {
  let pet = {
    //lets user input in name of pet
    name: prompt('what is the name of the new pet?'),
    //lets user input in age of pet
    age: prompt('what is the age of the new pet?'),
    //lets user input in speicies of pet
    species: prompt('what is the species of the new pet?'),
  }
  //add a new pet to array of pets
  nameArray.push(pet)
}

function names() {
  // shows names of all pets
  for (let pet of nameArray) {
    alert(pet.name.age.species)
  }
}
