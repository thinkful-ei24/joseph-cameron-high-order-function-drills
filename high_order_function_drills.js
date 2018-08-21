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
