'use strict';

const repeat = function(fn,num){
  for(let i = num; i > 0; i--){
    fn();
  }
}

const hello = function(){
  console.log('Hello world');
}
const goodbye = function(){
  console.log('Goodbye World');
}

repeat(hello, 5);
repeat(goodbye, 5);


function filter(arr, fn) {
  let newArray = [];
  for (let i=0; i<arr.length; i++){
    if (fn(arr[i])){
      newArray.push(arr[i]);
    }
  } return newArray;
}

// DO NOT EDIT BETWEEN THESE LINES, BUT DO READ THE CODE ----->
// First we setup an array of strings we plan to filter:
const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// We use your `filter` function here, capturing a new array into `filteredNames`
// comprised of names that only begin with 'R'
const filteredNames = filter(myNames, function(name) {
  // This is known as a "predicate function" - it's a function that 
  // only returns a boolean
  return name[0] === 'R';
});

console.log(filter(myNames, (name) => name[0]==='R'));
// console.log(filteredNames) // => ['Rich', 'Ray']
// <---- DO NOT EDIT BETWEEN THESE LINES


const hazardWarningCreator = function(typeOfWarning){
  let warningCounter = 0;
  return function(location){
    warningCounter++;
    console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
    console.log(`The ${typeOfWarning} hazard alert has triggered 
    ${warningCounter} time${warningCounter === 1 ? '' : 's'} today!`);
  }
}

const rocksWarning = hazardWarningCreator('Rocks on the Road');
const chickenWarning = hazardWarningCreator('Chickens on the Road');
rocksWarning('Main St and Pacific Ave');
rocksWarning('Centinela Ave and Olympic Blvd');
chickenWarning('first Ave and second Blvd');
chickenWarning('third Ave and fourth Blvd');

const turtleSteps = function(array){
  return array.filter(num => num[0]>=0 && num[1]>=0)
  .map(num => num[0]+num[1])
  .forEach(num => console.log(num));
}

let steps = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
turtleSteps(steps);

const codedMessage = 'noggin oreo the moon time tele steed his tent apollo her lives though shoo tofu budapest';

const test = codedMessage.split(' ')
.reduce((acc, curVal) => curVal.length === 3 ? acc += ' ' : acc += curVal[curVal.length -1].toUpperCase(), '');

console.log(test);