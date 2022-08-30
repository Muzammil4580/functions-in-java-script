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
    return total=a+b;
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
// if i put the newname in the console then it will return the [] in the out put

  const myname =["muzammil","haroon","umer malik","zahid"];
  const newname= myname.splice(myname.lenght,0,"Irfan");
  console.log(newname);

// if i have to replace SIR ATHAR KHARAL  in place of umer malik then

  const myname =["muzammil","haroon","umer malik","zahid"];
  const newname= myname.splice(3,3,"SIR ATHAR KHARAL");
  console.log(myname);
  // find index in the array 
  const indexofstr = myname.indexOf('SIR ATHAR KHARAL');
// IT WILL RETURN -1 if the search number or string not found in the array
// soo we use if condition to do this
if(indexof!=-1){
  const newname= myname.splice(indexofstr,1,"SIR ATHAR KHARAL");
  console.log(myname);
}else{
  console.log("the name you are searching no found in the array");
}
// If i have to detete the zahid from an araaay then i have to do this
const myname =["muzammil","haroon","umer malik","zahid"];
const indexofstr = myname.indexOf('zahid');
if(indexof!=-1){
  const newname= myname.splice(indexofstr,1);
  console.log(myname);
}else{
  console.log("the name you are searching no found in the array");
}
// splite function varible return deleted value
const myname =["muzammil","haroon","umer malik","zahid"];
const indexofstr = myname.indexOf('zahid');
if(indexof!=-1){
  const newname= myname.splice(indexofstr,1);
  console.log(newname);
  // it will return ["zahid"]

// if we delete the infinity data from the aray to the last
const myname =["muzammil","haroon","umer malik","zahid"];
const indexofstr = myname.indexOf('zahid');
if(indexof!=-1){
  const newname= myname.splice(indexofstr,Infinity);
  console.log(myname);
}

  // MAP FUNCTION 
  
  const array11=[1,2,3,4,0,9,8,7,6,5]
  let newarray=array11.map((currentelement,index,arr) => {
  return `index no ${index} and the value is ${currentelement} belong to array ${arr}`
   } )
   console.log(newarray);
   // it will return
   //[
  //' index no 0 and the value is 1 belong to array 1,2,3,4,0,9,8,7,6 ' ,
  //                 similARLY
  //
  //]


 // forEach() FUNCTION it will return the same value as the map function but it return undefined value
  
 const array1=[1,2,3,4,0,9,8,7,6,5]
 let newarr=array1.forEach((currentelement,index,arr) => {
 return `index no ${index} and the value is ${currentelement} belong to array ${arr}`
  } )
  console.log(newarr);
  // it will return
  //[
 //' index no 0 and the value is 1 belong to array 1,2,3,4,0,9,8,7,6 ' ,
 //                 similARLY
 //
 //]
 // undefined

 // SQUARE ROOT IN MATH BY JAVASCRIPT ARRAY METHOD
 let arrar33=[4,9,16,25,36,49];
 let sqroot=arrar33.map((element) => {
  return Math.sqrt(element);
 });
 console.log(sqroot);
// IT RETURN
//[2,3,4,5,6,7]

















  
  





  
