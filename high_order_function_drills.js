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