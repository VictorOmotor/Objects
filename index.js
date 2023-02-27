// 1. 

function instagramPost(handleOfAuthor, content, imageLink, numberOfviews, numberOflikes) {
    this.handleOfAuthor = handleOfAuthor;
    this.content = content;
    this.imageLink = imageLink;
    this.numberOfviews = numberOfviews;
    this.numberOflikes = numberOflikes;
}

// 2.

let firstPost = new instagramPost('@omotorvidosky', 'Hello!! This is my first post on Instagram using the Object method', 'firstpseudolink.com', 234, 122);
let secondPost = new instagramPost('@omotorvidosky', 'Hurray!! I just successfully created my first Instagram post using an object method I created using the constructor method', 'firstpseudolink.com', 1898, 1567);
console.log(firstPost.content);
console.log(secondPost.content);

// 3.

function createPerson (name, age, location) {
    return {
        name: name,
        age: age,
        location: location,
    }
}
//3a

let Musa = createPerson ('Musa', 19, 'Lekki, Lagos State');

//3b.

function createJambscores (eng, govt, lit, crk) {
    return{
        ENG: eng,
        GOVT: govt,
        LIT: lit,
        CRK: crk,
    }
}

let musajambScores = createJambscores(70, 85, 82, 94);
Musa.jambScores = musajambScores;
console.log(Musa);

/* 4. There are three ways of cloning an Object
* a. By using the Object.assign syntax
* b. By using the spread syntax ...
* c. By using the method JSON.parse(JSON.stringify())
*/

// a. By using the Object.assign syntax

const studentName = {
    firstName: 'Victor',
    lastName: 'Omotor',
};

const studentDetails = Object.assign({}, studentName);
studentDetails.firstName = 'Michael';
studentDetails.lastName = 'Odebunmi';
studentDetails['subtrack'] = 'backend development';

console.log('After cloning studentName into studentDetails using Object.assign');
console.log(studentName);
console.log(studentDetails);

// b. By using the spread syntax ...

const student1 = {...studentDetails};
student1.firstName = 'Peter';
student1.lastName = 'Obi';

console.log('After cloning studentDetails into student1 using spread syntax ...');

console.log(studentDetails);
console.log(student1);


// c. By using the method JSON.parse(JSON.stringify())

const student2 = JSON.parse(JSON.stringify(student1));
student2.firstName = 'Buhari';
student2.age = 82;

console.log('After cloning student1 into student2 using JSON.parse');
console.log(student1);
console.log(student2);

// 5.

const presidentialCandidates = {
    AAC: 'Omoyele Sowore',
    ACCORD: 'Christopher Imumolen',
    APC: 'Bola Ahmed Tinubu',
    LP: 'Peter Obi',
    NNPP: 'Rabiu Kwankwaso',
    PDP: 'Atiku Abubakar',
}

for (const key in presidentialCandidates) {
    console.log(presidentialCandidates[key] + ' is the Presidential candidate of ' + key);
}
