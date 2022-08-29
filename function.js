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

  // array in java script
  var myname =["muzammil","haroon","umer malik","zahid"]
  // acces the array 
  console.log(myname[2]);
  // chech the lenght ofa array
  console.log(length.myname)
  // lenght start from 1 and array index function start from 0
  console.log(myname[myname.length-1]);
  //it wil display the last element of the array


  // loops in array 
  for(i=0;i<myname.length;i++){
    console.log(myname[i]);

    // for in and for off loop included afoer AS6 


    // in loop

    for(let elements in myname){
      console.log(elements);
      //it willl display 
      //0
      //1
      //2
      //3
      //4
      // return the index number

    }
    // for off loop
    for(let elements of myname){
      console.log(elements);
      // it will display the element of myname array

      //muzammil
      //haroon 
      //umer malik
      //zahid
       
    }
  }

  // for each loop

  var myname =["muzammil","haroon","umer malik","zahid"]
  myname.forEach(function(element, index, array) {
    console.log(element);
     // it will display the element of myname array

      //muzammil
      //haroon 
      //umer malik
      //zahid
  });
  // BY USING FOR EACH WE GET ELEMENT INDEX AND ARRAY AT THE SAME TIME
  var myname =["muzammil","haroon","umer malik","zahid"]
  myname.forEach(function(element, index, array) {
    console.log(element+"index"+index+"array of that varible is"+array);

    // IT WILL DISPLAY   
     //muzammil index0 array of that function is muzammil,haroon,umer malik,zahid
      //haroon index1 array of that function is muzammil,haroon,umer malik,zahid
      //umer malik index2 array of that function is muzammil,haroon,umer malik,zahid
      //zahid index3 array of that function is muzammil,haroon,umer malik,zahid
  });

  // BY USING FAT ARROW FUNCTION
  myname.forEach((element, index, array)) => {
    console.log(element+"index"+index+"array of that varible is"+array);
    
  }
  // update the array 
  // push update at the end of the array
  // unshift update at the start of the array


  const myname =["muzammil","haroon","umer malik","zahid"];
  myname.push("wahaj");
  const count = myname.push("wahaj");
  console.log(count);
  console.log(myname)
  // wahaj will be added at the end of the array 

  
  // REMOVE THE LAST ELEMENT OF THE ARRAY
  consloe.log(pop(myname));
  // It remove the last name of the arrray

  // post remove the first element of the array 
  // varible_name.shift();

  // udate array by splice method

  const myname =["muzammil","haroon","umer malik","zahid"];
  const newname= myname.splice(5,0,"Irfan");
  console.log(myname);

  // if the lenght the array is soo big then we use the .lenghh to add at the end of the array

  const myname =["muzammil","haroon","umer malik","zahid"];
  const newname= myname.splice(myname.lenght,0,"Irfan");
  console.log(myname);
  



  
  





  
