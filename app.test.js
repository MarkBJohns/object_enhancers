describe('createInstructor',function(){
    it('should create an object with a first name and last name, using shorthand',function(){
        expect(createInstructor('Mark','Johns')).toEqual({firstName:'Mark',lastName:'Johns'});
    })
})

describe('extracting values from "instructor"',function(){
    it('should return the values of the specified keys',function(){
        expect(instructor.firstName).toEqual('Colt');
        expect(instructor[favoriteNumber]).toEqual('That is my favorite number!');
    })
})

describe('createAnimal',function(){
    it('should create a specified animal, name for its sound, and the sound itself',function(){
        expect(dog.bark()).toEqual('Woof!');
        expect(cat.mew()).toEqual('Meow!');
        expect(goat.bleet()).toEqual('Baaaah!');
    })
})