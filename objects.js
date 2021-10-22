/* CHALLENGE 1 */
const checkValues = (obj, value) => {
    /*if (Object.values(obj).indexOf(value) > -1) {
        return true;
    } else return false;*/
    return Object.values(obj).includes(value)
    };
  
checkValues({name:"ahmed",age:15},15) // => true
checkValues({name:"ahmed",age:15},20) // => false


/* CHALLENGE 2 */
const courseInfo = {
    name: "Code 301",
    duration: { dayTrack: "4 weeks", eveningTrack: "8 weeks" },
    topics: [
      "SMACSS",
      "APIs",
      "NodeJS",
      "SQL",
      "jQuery",
      "functional programming",
    ],
    finalExam: true,
  };
  
const getCourseKeys = (obj) => {
    return Object.keys(obj);
};
  
getCourseKeys(courseInfo)// => ['name', 'duration', 'topics', 'finalExam']


/* CHALLENGE 3 */
const phoneNumber = {
    GraceHopper: "222-303-5938",
    AdaLovelace: "222-349-9842",
    AlanTuring: "222-853-5933"
};

//HR has asked you to change the data to make it easier to print so that it looks like this: 

[
  'Grace Hopper: 222-303-5938','Ada Lovelace: 222-349-9842','Alan Turing: 222-853-5933'
]


const updateNumbers = (obj) => {
    const phoneNumbers = [];
    Object.entries(obj).forEach(([key, value]) => phoneNumbers.push(`${key}: ${value}`));
    return phoneNumbers;
};


/* CHALLENGE 4 */
const PassedOrFailed = function (studentGrades) {

    for (let key in studentGrades) {
        if(studentGrades[key].grade/studentGrades[key].total < 0.5){
           return "The student have failed";
         }
    }  return "The student have passed";    
};
  
const studentOne = {
    math: { grade: 70, total: 120 },
    english: { grade: 80, total: 100 },
    art: { grade: 90, total: 100 }
};
  
const studentTwo = {
    math: { grade: 59, total: 120 },
    english: { grade: 80, total: 100 },
    art: { grade: 90, total: 100 }
};
  
PassedOrFailed(studentOne); // =>  "The student have passed"
PassedOrFailed(studentTwo); // =>  "The student have failed"


/* CHALLENGE 5 */
const totalCharacters = (arr) => {
    /*
    let charNum = 0;
    for (const element of arr) {
        charNum += element.length;
    }
    return charNum;
    */
    return arr.join("").length;
};
  
totalCharacters(["abc","yz"]) // => 5


/* CHALLENGE 6 */
const houseSize = (arr) => {
    const array = [];
    let i = 0;
    while(i < arr.length){
        array.push(`{ house: ${arr[i]}, members: ${arr[i+1]} }`);
        i+=2
    }
    return array;
};
  
houseSize(['Stark',7,'Arryn',3])  //[{ house: 'Stark', members: 7 }, { house: 'Arryn', members: 3 }]


/* CHALLENGE 7 */
const uniqueDogs = {
    max: { breed: "Labrador Retriever", color: "blond" },
    rex: { breed: "German Shepherd", color: "black and brown" },
    lucy: { breed: "Bulldog", color: "white" },
    lucifer: { breed: "Chihuahua", color: "brown" },
  };
  
  const createDog = function (name, dogBreed, furColor) {
    if ( name in uniqueDogs === false){
        uniqueDogs[name]= {breed: dogBreed, color: furColor}
        return "Added the dog successfully";
    } else return "The dog isn't unique enough :("
};
  
createDog("luna", "Husky", "black and white"); // => "Added the dog successfully"
createDog("rex", "Golden Retriever", "blond"); // => "The dog isn't unique enough :("  
