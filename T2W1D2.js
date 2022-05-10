//                                                                  --- DAY TWO ---
// Objects


let personMe = {
    // properties of an object are made up of key : value
        firstName: 'Neil',
        lastName: 'Hanson',
        isAStudent: true
    }
    
    personMe.height = `6'1"`;
    
    console.log(personMe);
    
    
    function updatePerson (property, newValue) {
        personMe[property] = newValue; // WAY TO ADD A NEW PROPERTY TO AN OBJECT IN A FUNCTION
        return personMe;
    }
    console.log(updatePerson('hairColor', 'red'));
    
    
    // CHALLENGE ONE
    
    let person = {
        // property: value
        // key: value
        isAnInstructor: true,
        lastName: 'Schwartz',
        firstName: 'Edan',
        // person.hobbies
        hobbies: [
            {   // person.hobbies[0]
                name: 'guitar',
                // person.hobbies[0].name = 'guitar'
                yearsExperience: 2,
                moneySpent: 1000
            },
            {
                name: 'mushroom farm',
                yearsExperience: 0.9,
                moneySpent: 800
            },
            {
                name: 'harmonica',
                yearsExperience: 3,
                moneySpent: 400
            }
        ]
    };
    /*
    Challenge 1:
    
    console.log
        I've been doing guitar for 2 years
        I've been doing mushroom farm for 0.9 years
        I've been doing harmonica for 3 years
    
    Challenge 2:
    
    console.log:
        I have spent a total of $2200 on hobbies
    */
    
    // C1
    console.log('C1 start');
    console.log(`I've been doing ${person.hobbies[0].name} for ${person.hobbies[0].yearsExperience} years.`);
    console.log(`I've been doing ${person.hobbies[1].name} for ${person.hobbies[1].yearsExperience} years.`);
    console.log(`I've been doing ${person.hobbies[2].name} for ${person.hobbies[2].yearsExperience} years.`);
    
    // Could have done
    console.log('C1 easy way');
    for (let hobby of person.hobbies) {
        console.log(`I've been doing ${hobby.name} for ${hobby.yearsExperience} years.`);
    }
        
    // C2
    console.log('C2 start');
    console.log('I have spent a total of', person.hobbies[0].moneySpent + person.hobbies[1].moneySpent + person.hobbies[2].moneySpent, 'on hobbies.');
    
    // Could have done
    console.log('C2 easy way');
    let hobbies = person.hobbies;
    let totalMoneySpent = 0;
    for (let hobby of hobbies) {
        totalMoneySpent += hobby.moneySpent;
    }
    console.log('totalMoneySpent', totalMoneySpent);