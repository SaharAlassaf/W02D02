/* CHALLENGE 1 */
const addOne = (arr) => {
    const newArr =[];
    arr.forEach(item => newArr.push(item + 1));
    return newArr;
};

addOne([1,2,3]) // => [2,3,4]
addOne([10,11,12]) // => [11,12,13]


/* CHALLENGE 2 */
const addExclamation = (arr) => {
    const newArr =[];
    arr.forEach(item => newArr.push(item + "!"))
    return newArr;
};
  
addExclamation(["one","two","three"]) // => ["one!","two!","three!"]


/* CHALLENGE 3 */
const addOneByMap = (arr) => {
    const newArr = arr.map(item => item + 1);
    return newArr;
};
addOneByMap([1,2,3]) // => [2,3,4]
addOneByMap([10,11,12]) // => [11,12,13]


/* CHALLENGE 4 */
const addQuestion = (arr) => {
    const newArr = arr.map(item => item + "?");
    return newArr;
};
  
addQuestion(["one","two","three"]) // => ["one?","two?","three?"]


/* CHALLENGE 5 */
const forLoopTwoToThe = (arr) => {
    const newArr = [];
    for (const element of arr) {
        newArr.push(Math.pow(2, element))
    }
    return newArr;
};
  
forLoopTwoToThe([1,2,3]) // => [2,4,8]


/* CHALLENGE 6 */
const typeNum = (arr) => {
    const newArr = arr.filter(item => typeof item == 'number');
    return newArr;
};
  
typeNum([1, 'bob' ,3]) // => [1,3]


/* CHALLENGE 7 */
const containsAnd = (arr) => {
    const newArr = arr.filter(item => item.includes('and'));
    return newArr;
};


/* CHALLENGE 8 */
const oddValues = (arr) => {
    const newArr = arr.filter(item => item%2 != 0);
    return newArr;
};
  

/* CHALLENGE 9 */
const addValues = (arr) => {
    let sum = arr.reduce(( previousValue, currentValue ) => previousValue + currentValue);
    return sum;
};
  
addValues([1,2,3,4]) // => 10
addValues([15,10,15,5]) // => 45


/* CHALLENGE 10 */
const countNumberOfElements = (arr) => {
    let arrayLength = arr.reduce(acc => acc + 1);
    return arrayLength;
};


/* Extra */

/* CHALLENGE 1 */
const items  = [{
    item: 'switch',
    purchasePrice: 399},
    {
    item: 'nike',
    purchasePrice: 150
    }]
  
const addPurchases = (arr) => {
    let sum = arr.reduce(
    (previousValue, currentValue) => previousValue + currentValue.purchasePrice,0)
    return sum;
};
  
addPurchases(items) // => 549


/* CHALLENGE 2 */
const sortNumbers = (arr) => {
    arr.sort((a, b) => (a - b));
    return arr;
};  


/* CHALLENGE 3*/
const sortBackwards = (arr) => {
    arr.sort((a, b) => (b - a));
    return arr;
};  