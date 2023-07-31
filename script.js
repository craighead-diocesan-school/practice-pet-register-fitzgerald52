let petArray = [
  { name: 'Max', age: 6, species: ' dog ' },
  { name: 'Bella', age: 2, species: ' cat ' },
  { name: 'Cooper', age: 3, species: 'rabbit' },
]

function nameadding() {
  let inputname = prompt('what is the name of the new pet?')
  let inputage = prompt('what is the age of the new pet?')
  inputage = Number(inputage)
  let inputspecies = prompt('what is the species of the new pet?')

  let pet = {
    //lets user input in name of pet
    name: inputname,
    //lets user input in age of pet
    age: inputage,
    //lets user input in speicies of pet
    species: inputspecies,
  }

  //only adds pet to array if all information is valid
  if (inputname != '' && typeof inputage == 'number' && inputage != '' && inputspecies != '') {
    //add a new pet to array of pets
    petArray.push(pet)
  } else {
    alert('not valid')
  }
}

function names() {
  // shows names of all pets
  for (let pet of petArray) {
    alert(pet.name)
  }
}

function ages() {
  // shows ages of all pets
  for (let pet of petArray) {
    alert(pet.age)
  }
}

function speicies() {
  // shows names of all pets
  for (let pet of petArray) {
    alert(pet.species)
  }
}

function search() {
  //decides what pet you want to find
  let searchtarget = prompt('what is the name of the pet')
  let searchresult = false
  // it runs this code for for every pet name in the array
  for (let pet of petArray) {
    // if there is a pet name in the array that matches what the user inputs it will say the search result is true
    if (pet.name == searchtarget) {
      searchresult = true
    }
  }
  //alerts the search result
  alert(searchresult)
}

function Removepet() {
  let nameremove = prompt('what is the name of the pet you want to remove ?')
  let index = 0
  const amountremoved = 1
  let searchresult = false

  for (let pet of petArray) {
    // alert(`We're currently at index ${index} and it's ${pet.name}. Search target is ${searchtarget}.`)
    if (pet.name != nameremove && searchresult != true) {
      index = index + 1
    } else if (pet.name == nameremove) {
      searchresult = true
    }
  }
  if (searchresult == false) {
    alert('pet not found')
  } else {
    alert(index)
    petArray.splice(index, amountremoved)
  }
}
