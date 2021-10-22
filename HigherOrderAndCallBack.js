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
    return arr.map(item => item + 1);
};

addOneByMap([1,2,3]) // => [2,3,4]
addOneByMap([10,11,12]) // => [11,12,13]


/* CHALLENGE 4 */
const addQuestion = (arr) => {
    return arr.map(item => item + "?");
};
  
addQuestion(["one","two","three"]) // => ["one?","two?","three?"]


/* CHALLENGE 5 */
const forLoopTwoToThe = (arr) => {
    return arr.map((item, i) => Math.pow(2, element));
};
  
forLoopTwoToThe([1,2,3]) // => [2,4,8]


/* CHALLENGE 6 */
const typeNum = (arr) => {
    return arr.filter(item => typeof item == 'number');
};
  
typeNum([1, 'bob' ,3]) // => [1,3]


/* CHALLENGE 7 */
const containsAnd = (arr) => {
    return arr.filter(item => item.includes('and'));
};


/* CHALLENGE 8 */
const oddValues = (arr) => {
    return arr.filter(item => item%2 != 0);
};
  

/* CHALLENGE 9 */
const addValues = (arr) => {
    return arr.reduce(( previousValue, currentValue ) => previousValue + currentValue);
};
  
addValues([1,2,3,4]) // => 10
addValues([15,10,15,5]) // => 45


/* CHALLENGE 10 */
const countNumberOfElements = (arr) => {
    return arr.reduce(acc => acc + 1);
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
