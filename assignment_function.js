function tocheckEvenOdd1(number)
{
    var num=45;
    if(num%2==0)
    {
        console.log('Given Number '+num+' Is Even Number');
    }
    else{
        console.log('Given Number '+num+' Is Odd Number');
    }
}
 tocheckEvenOdd1(45);
 function tocheckEvenOdd2(number)
{
    var num=70;
    if(num%2==0)
    {
        console.log('Given Number '+num+' Is Even Number');
    }
    else{
        console.log('Given Number '+num+' Is Odd Number');
    }
}
 tocheckEvenOdd2(70);
 function tocheckEvenOdd3(number)
{
    var num=67;
    if(num%2==0)
    {
        console.log('Given Number '+num+' Is Even Number');
    }
    else{
        console.log('Given Number '+num+' Is Odd Number');
    }
}
 tocheckEvenOdd3(67);
 function tocheckEvenOdd4(number)
{
    var num=98;
    if(num%2==0)
    {
        console.log('Given Number '+num+' Is Even Number');
    }
    else{
        console.log('Given Number '+num+' Is Odd Number');
    }
}
 tocheckEvenOdd4(98);
// ------------------------------------------------ check function for person eligible for voting or not  ----------------------------------------------------------
 function tocheckVoting1(age)
 {
     if(age>=18)
     {
         console.log('Person of age '+age+' is eligible for Voting');
     }
     else{
        console.log('Person of age '+age+' is not eligible for Voting');
     }
 }
 tocheckVoting1(18);
 function tocheckVoting2(age)
 {
     if(age>=18)
     {
         console.log('Person of age '+age+' is eligible for Voting');
     }
     else{
        console.log('Person of age '+age+' is not eligible for Voting');
     }
 }
 tocheckVoting2(20);
 function tocheckVoting3(age)
 {
     if(age>=18)
     {
         console.log('Person of age '+age+' is eligible for Voting');
     }
     else{
        console.log('Person of age '+age+' is not eligible for Voting');
     }
 }
 tocheckVoting3(17);
 function tocheckVoting4(age)
 {
     if(age>=18)
     {
         console.log('Person of age '+age+' is eligible for Voting');
     }
     else{
        console.log('Person of age '+age+' is not eligible for Voting');
     }
 }
 tocheckVoting4(40);
// ---------------------------------------------to check string contain 10 character-------------------------------
function tocheckStrlen()
{
    var str="JavaScript - ES6";
    if(str.length-1 >= 10)
    {
        console.log('Yes String '+str+' Contain More than 10 character');
    }
    else{
        console.log('Yes String '+str+' Contain  10 character');
    }
}
tocheckStrlen();
 //--------------------------------------------to check startwith string  using function expression (Ananymous Function)------------------------------------------
 let showstr=function tocheckStrstartwith()
 {
     var str="JavaScript Language";
     if(str.startsWith("Java")==true)
     {
         console.log('Yes String '+str+' Start with Java ');
     }
     else{
         console.log('Yes String '+str+' Not Start with Java '); 
     }
 }
 showstr();
 //--------------------------------------------to check even number using function expression (Ananymous Function)------------------------------------------
 let chkevennum=function tocheckEvennum()
 {
     var num=2022;
     if(num % 2==0)
     {
         console.log('Given Number '+2022+' is Even Number');
     }
     else{
        console.log('Given Number '+2022+' is Odd Number');
     }
 }
 chkevennum();
 //--------------------------------------------to check odd number using function expression (Ananymous Function)------------------------------------------
 let chkoddnum=function tocheckOddnum()
 {
     var num=123;
     if(num % 2==0)
     {
         console.log('Given Number '+123+' is Even Number');
     }
     else{
        console.log('Given Number '+123+' is Odd Number');
     }
 }
 chkoddnum();
 