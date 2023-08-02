let petArray = [
  { name: 'Max', age: 6, species: ' dog ' },
  { name: 'Bella', age: 2, species: ' cat ' },
  { name: 'Cooper', age: 3, species: 'rabbit' },
]

function nameadding() {
  let inputname = prompt('what is the name of the new pet?')
  let inputage = prompt('what is the age of the new pet?')
  let inputspecies = prompt('what is the species of the new pet?')

  //only adds pet to array if all information is valid
  if (inputname.match(/[a-zA-Z0-9]+/) && inputage.match(/^(0?[1-9]|[1-9][0-9])$/) && inputspecies.match(/^[a-zA-Z]+$/)) {
    //add a new pet to array of pets
    let pet = {
      //lets user input in name of pet
      name: inputname,
      //lets user input in age of pet
      age: inputage,
      //lets user input in speicies of pet
      species: inputspecies,
    }
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
  //only searches for pet if all information is valid
  if (searchtarget.match(/[a-zA-Z0-9]+/)) {
    // it runs this code for for every pet name in the array
    for (let pet of petArray) {
      // if there is a pet name in the array that matches what the user inputs it will say the search result is true
      if (pet.name == searchtarget) {
        searchresult = true
      }
    }
    //alerts the search result
    alert(searchresult)
  } else {
    alert('not valid')
  }
}

function Removepet() {
  //gets name of pet wanted to be reomved
  let nameremove = prompt('what is the name of the pet you want to remove ?')
  let index = 0
  const amountremoved = 1
  let searchresult = false
  //only removes pet if all information is valid
  if (nameremove.match(/[a-zA-Z0-9]+/)) {
    for (let pet of petArray) {
      //sorts through each pet in the array one at a time and adds one to the index if the pet it is looking for is not the one it found and continues to do this untill it has found it
      if (pet.name != nameremove && searchresult != true) {
        index = index + 1
      } else if (pet.name == nameremove) {
        searchresult = true
      }
    }
    if (searchresult == false) {
      //if the pet they want to remove is not in the array it alerts pet not found
      alert('pet not found')
    } else {
      //deletes pet from array by using the index number it relates to
      alert(index)
      petArray.splice(index, amountremoved)
    }
  } else {
    alert('not valid')
  }
}
