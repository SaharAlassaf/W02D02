/* CHALLENGE 1 */
let characters = [
    {
      name: "Eddard",
      spouse: "Catelyn",
      children: ["Robb", "Sansa", "Arya", "Bran", "Rickon"],
      house: "Stark",
    },
    {
      name: "Jon A.",
      spouse: "Lysa",
      children: ["Robin"],
      house: "Arryn",
    },
    {
      name: "Cersei",
      spouse: "Robert",
      children: ["Joffrey", "Myrcella", "Tommen"],
      house: "Lannister",
    },
    {
      name: "Daenarys",
      spouse: "Khal Drogo",
      children: ["Drogon", "Rhaegal", "Viserion"],
      house: "Targaryen",
    },
    {
      name: "Mace",
      spouse: "Alerie",
      children: ["Margaery", "Loras"],
      house: "Tyrell",
    },
    {
      name: "Euron",
      spouse: null,
      children: [],
      house: "Greyjoy",
    },
    {
      name: "Jon S.",
      spouse: null,
      children: [],
      house: "Snow",
    },
];

const sortByChildren = (charArray) => {
    /*characters.sort(function (item) {
        return item.house;
    });
    console.log(characters); */
    characters.sort((a,b)=>{
    a.children.length-b.children.length
    a.house-b.house
    });
    console.log(characters); 
    /*characters.map(function (item) {
       if(item.children.length == item.children.length){

       }
    });*/
    /* const childrenNnmber = characters.map(function (item, index, arr) {
        //console.log(item.children);
        return item.children.length;
    })
    childrenNnmber.sort((a,b)=>a-b);
    console.log(childrenNnmber); 
    charArray.sort(function (item1, item2) {

        if (item1.children.length < item2.children.length) return -1;
        if (item1.children.length > item2.children.length) return 1;
    
        if (item1.house > item2.house) return 1;
        if (item1.house < item2.house) return -1;

    });
    console.log(characters);*/
}; 


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
    const courseKeys = Object.keys(obj);
    console.log(courseKeys);
};


/* CHALLENGE 3 */
const checkValues = (obj, value) => {
    let a = Object.keys(obj).find((key)=>{
        if (obj[key] == value)
            return true; 
        }
    );
    console.log(a);
};  


/* CHALLENGE 4 */
const phoneNumber = {
    'Grace Hopper': '222-303-5938',
    'Ada Lovelace': '222-349-9842',
    'Alan Turing': '222-853-5933'
  }
const updateNumbers = (obj) => {
    const phoneNumbers = Object.entries(obj);
    return phoneNumbers;
};


/* CHALLENGE 5 */
const getHouses = (arr) => {
    for(house in arr){
        const array = arr[house];
    }
};


/* CHALLENGE 6 */
const hasChildrenValues = (arr, character) => {
    // Solution code here...
};
  