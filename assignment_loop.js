console.log("-------------------------------------for loop to get vowels-------------------------------------------------------");
var str="I Love JavaScript";
let temp = ""; 
let numberOfVowels = 0;
for(let index=0;index<=str.length;index++)
{
    if(str.charAt(index)=="A" || str.charAt(index)=="E" || str.charAt(index)=="I" || str.charAt(index)=="O" || str.charAt(index)=="U" || str.charAt(index)=="a" || str.charAt(index)=="e" || str.charAt(index)=="i" || str.charAt(index)=="o" || str.charAt(index)=="u")
    {
        numberOfVowels = numberOfVowels + 1;
         temp = temp + str.charAt(index);
    }
}

console.log("Number of Vowels is  : ", numberOfVowels);
console.log(`Vowels found is : ${temp}`);

console.log("-------------------------------------while loop to get vowels-------------------------------------------------------");
var str1="I Love JavaScript";
let index1=0;
let temp1="";
let numberOfVowels1=0;
while(index1 <= str1.length)
{
  if(str1.charAt(index1)=="A" || str1.charAt(index1)=="E" || str1.charAt(index1)=="I" || str1.charAt(index1)=="O" || str1.charAt(index1)=="U" || str1.charAt(index1)=="a" || str1.charAt(index1)=="e" || str1.charAt(index1)=="i" || str1.charAt(index1)=="o" || str1.charAt(index1)=="u")
  { 
    temp1=temp1+str1.charAt(index1);
    numberOfVowels1=numberOfVowels1+1;
  }
  index1++;
} 
console.log('Number of Vowels is ',numberOfVowels1);
console.log('Vowels found is ',temp1);

console.log("-------------------------------------do while loop to get vowels-------------------------------------------------------");
var str2="I Love JavaScript";
let index2=0;
let temp2 = ""; 
let numberOfVowels2 = 0;
 do 
{
  if(str2.charAt(index2)=="A" || str2.charAt(index2)=="E" || str2.charAt(index2)=="I" || str2.charAt(index2)=="O" || str2.charAt(index2)=="U" || str2.charAt(index2)=="a" || str2.charAt(index2)=="e" || str2.charAt(index2)=="i" || str2.charAt(index2)=="o" || str2.charAt(index2)=="u")
{
  temp2=temp2+str2.charAt(index2);
  numberOfVowels2=numberOfVowels2+1;
}
index2++
 
}
while(index2 <= str2.length)
{
  console.log('Number of Vowels is ',numberOfVowels2);
  console.log('Vowels found is ',temp2);
}

 console.log("------------to sum all numbers from 1 to 10  using function expression (Ananymous Function)----------------------");
 let sumAllnum=function sumAllnum1to10()
 {
   var sum=0;
     for (let index = 1; index <= 10; index++) {
      var sum =sum + index;
     }
     console.log("Sum of All Number from 1 to 10 = ",sum);
 }
 sumAllnum();
 console.log("------------to print table for 5 and 7----------------");
 console.log("Table of 5 is =") 
 function tbl5(num) {
   for (let index = 1; index <=10; index++) {
     var result=index*num;
     console.log(` ${num} * ${index} = ${result}`);
   }
 }
 tbl5(5); 
 console.log("Table of 7 is =") ;
 tbl5(7);
console.log("Sum of Square number 1 to 5");
function toGetSumofSqurnum() {
  var num=1;
  var result1=0;
  for (let index = 1; index <= 5; index++) {  
    var result=num*index;
    num++;
    var result1 = result1+result;
  }
  console.log(`1*1+2*2+3*3+4*4+5*5 = ${result1}`);
}
toGetSumofSqurnum();
console.log("------------------Print string even index character ---> 'Hard work always pays back'---------------------- ")
function toGetEvenIndexChar() {
  let str="Hard work always pays back";
  let strSplit=str.split('');
  let charEvenindx=""; 
  for (let index = 0; index < strSplit.length; index++) {
    if(index % 2 === 0)
    {
      charEvenindx=charEvenindx+str.charAt(index);
    }
    else
    {
    }
  }
  console.log("Even Index Character are =",charEvenindx);   
}
toGetEvenIndexChar();
console.log("------------------After Removing Spaces ---> 'Hard work always pays back'---------------------- ");
function strRemoveWhiteSpace() {
  let str="Hard work always pays back";
  console.log(str.split(' ').join(''));
}
strRemoveWhiteSpace();
console.log("------------------Print string Odd index character ---> 'Hardworkalwayspaysback'---------------------- ")
function toGetOddIndexChar() {
  let str="Hardworkalwayspaysback";
  let strSplit=str.split('');
  let charOddindx="";
  for (let index = 0; index < strSplit.length; index++) {
    if(index % 2 === 0)
    {
    }
    else
    {
      charOddindx=charOddindx+str.charAt(index);
    }
  }
  console.log("Odd Index Character are =",charOddindx);   
}
toGetOddIndexChar();