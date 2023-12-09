// ||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||||

//      SAME KEYS AND VALUES

// --------------------------------------------------------------

function createInstructor(firstName,lastName){
    return {
        firstName,
        lastName
    }
}

// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------

//      COMPUTED PROPERTY NAMES

let favoriteNumber=42;
const instructor={
    firstName:          'Colt',
    [favoriteNumber]:   'That is my favorite number!'
}

// ----------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------

//      CREATE ANIMAL

// --------------------------------------------------------------

function createAnimal(animal,verb,sound){
    return {
        species:    animal,
        [verb](){
            return sound
        }       
    }
}

const dog=createAnimal('dog','bark','Woof!');
const cat=createAnimal('cat','mew','Meow!');
const goat=createAnimal('goat','bleet','Baaaah!');