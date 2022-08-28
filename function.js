function sum(){
    var a=2,b=5;
    total=a+b;
    console.log(total);
}
sum();
// function with argument
function sum(a,b){
    total=a+b;
    console.log(total);

}
sum(2,5);


// function expression
var functionff= sum(2,5);
functionff;


// function with argument
function sum(a,b){
    return total=a+b;
}
var function22=sum(5,6);
console.log(function22);

// star anaonomus function 
var akela=function(a,b){
    return total a+b;
}
console.log(akela(7,9));

// it will return all the syntax of the above function
 var summm=akela(7,9);
 console.log(summm);


 // template literal    or template string
tableof=12;
 console.log(tableof+"*"+num+"="+tableof*num);
 //// by template literal
 console.log(`${tableof}*${num}=${tableof*num}`)


 // default parametter 
  function alpha(a,b=3){
    return a*b;
  }
  console.log(alpha(5));

  // fat arrow function

  const sum = () => {
    let a=4;b=9;
    sum=a*b;
    return `the sum of two numbers is ${sum}`;
    // we can write a+b in the template literel
  }
  const sum = () => {
    let a=4;b=9;
    // sum=a*b; no need to write this
    return `the sum of two numbers is ${a+b}`;
  }
  
