let nameArray = [
  { name: 'Max', age: 6, species: ' dog ' },
  { name: 'Bella', age: 2, species: ' cat ' },
  { name: 'Cooper', age: 3, species: 'rabbit' },
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
    alert(pet.name)
  }
}

function ages() {
  // shows ages of all pets
  for (let pet of nameArray) {
    alert(pet.age)
  }
}

function speicies() {
  // shows names of all pets
  for (let pet of nameArray) {
    alert(pet.species)
  }
}

function search() {
  //decides what pet you want to find
  let searchtarget = prompt('what is the name of the pet')
  let searchresult = false
  // it runs this code for for every pet name in the array
  for (let pet of nameArray) {
    // if there is a pet name in the array that matches what the user inputs it will say the search result is true
    if (pet.name == searchtarget) {
      searchresult = true
    }
  }
  alert(searchresult)
}

function Removepet() {
  let nameremove = prompt('what is the name of the pet you want to remove ?')
  let index = 0
  let searchtarget = false
  for (let pet of nameArray) {
    alert(`We're currently at index ${index} and it's ${pet.name}. Search traget is ${searchtarget}.`)
    if (pet.name != nameremove && searchtarget != true) {
      index = index + 1
    } else if (pet.name == searchtarget) {
      searchresult = true
    }
  }
  alert(index)
}
