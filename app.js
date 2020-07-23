
document.write("<h>ASSIGNMENT NO :6</h1>")

// CHAPTER 21 TO 25


// --------Q #01----------
// var firstname=prompt("Enter your first name")
// var lastname=prompt("Enter your last name")
// var fullname=firstname+" "+lastname
// alert("Hello "+fullname+" Welcome Dear...!!!")

// --------Q #02----------
// var mobile=prompt("Enter your favorite mobile phone model ")
// document.write("Your favorite mobile phone model is :"+mobile+"<br>")
// document.write("The length of string is: "+mobile.length+"<br>")

// --------Q #03----------
// var string="Pakistani"
// document.write("String is:"+string+"<br>")
// document.write("Index of 'n' : "+string.indexOf("n")+"<br>")

// --------Q #04----------
// var string="Hello World"
// document.write("String is:"+string+"<br>")
// document.write("Last Index of 'l' : "+string.lastIndexOf("l")+"<br>")

// --------Q #05----------
// var string="Pakistani"
// document.write("String is:"+string+"<br>")
// document.write("Character at index 3: "+string.charAt(3)+"<br>")

// --------Q #06----------

// var firstname=prompt("Enter your first name")
// var lastname=prompt("Enter your last name")
// var fullname=firstname.concat(lastname)
// document.write(fullname+"<br>")

// --------Q #07----------

// var string="Hyderabad"
// document.write("City is : "+string+"<br>")
// document.write("After replacement : "+string.replace("Hyder","Islam")+"<br>")

// --------Q #08----------
// var message = "Ali and Sami are best friends. They play cricket and football together.";
                                              // document.write(message.replace(/and/g,"&")+"<br>")

// --------Q #09----------
// var value="472"
// document.write("Value is: "+value+"<br>")
// document.write( "Type: "+typeof(value)+"<br>")
// value=Number("472")
// document.write("Value is: "+value+"<br>")
// document.write( "Type: "+typeof(value)+"<br>")

// --------Q #10----------

// var string=prompt("Enter any Dryfruit name")
// var string1=string.toUpperCase()
// document.write("User input: "+string+"<br>")
// document.write("Upper case: "+string1+"<br>")

// --------Q #11----------
// var string=prompt("Enter javascript")
// document.write("User input: "+string+"<br>")
// var first=string.slice(0,1)
// var others=string.slice(1)
// document.write("Title Case : "+first.toUpperCase()+others.toLowerCase()+"<br>")

// --------Q #12----------

// var num=35.36
// var word=num.toString()
// document.write("Number is: "+num+"<br>")
// var split=word.split("")
//  split.splice(2,1)
//  split1=split.join("")
// document.write("Result is: "+split1+"<br>")



// --------Q #13----------

// var username=prompt("Enter user name")
// var len=username.length
// for(i=0;i<username.length;i++){
//     if (username.slice(i,i+1)=="!" || username.slice(i,i+1)==","||username.slice(i,i+1)=="."||username.slice(i,i+1)=="@"){
//         alert("Invalid Username")
//     }
// }




// --------Q #14----------
// var A=["cake","apple pie","cookie","chips","patties"]
// var input=prompt("Welcome to ABC Bakery . what do you want to order sir/ma'am")
// var bak=input.toLowerCase()
// var bakery=A.indexOf(bak)
// if(A.indexOf(bak)!=-1){
//     alert(bak +" is available at "+bakery+" index in our bakery")
// }
//  else{
//     alert("we are sorry "+bak+" is not available in our bakery")
//  }



// --------Q #15----------

// var pass=prompt("Enter password:")
// if(pass.length==6){
//     if(pass.slice(0,1)=="1"||pass.slice(0,1)=="2"||pass.slice(0,1)=="3"||pass.slice(0,1)=="4"||pass.slice(0,1)=="5"||pass.slice(0,1)=="6"||pass.slice(0,1)=="7"||pass.slice(0,1)=="8"||pass.slice(0,1)=="8"||pass.slice(0,1)=="9"||pass.slice(0,1)=="0"){
//         alert("Password can'nt begin with number \n Please enter valid password..!!")
//     }
//     else{
//         pass1=pass.slice(1)
//         for(i=0;i<=pass1.length;i++)
//             if(i=="1"||i=="2"||i=="3"||i=="4"||i=="5"||i=="6"||i=="7"||i=="8"||i=="9"||i=="0"){
//                 alert("your password: "+pass)
//             }
//             else{
//                 alert("Password must contain numbers")
//             }
//     }
// }
// else{
//     alert("Password must atleast 6 character long..!!")
// }




// --------Q #16----------

// var university="University of Karachi"
// var uni = university.split("")
// document.write(uni[0]+"<br>"+uni[1]+"<br>"+uni[2]+"<br>"+uni[3]+"<br>"+uni[4]+"<br>"+uni[5]+"<br>"+uni[6]+"<br>"+uni[7]+"<br>"+uni[8]+"<br>"+uni[9]+"<br>"+uni[10]+"<br>"+uni[11]+"<br>"+uni[12]+"<br>"+uni[13]+"<br>"+uni[14]+"<br>"+uni[15]+"<br>"+uni[16]+"<br>"+uni[17]+"<br>"+uni[18]+"<br>"+uni[19]+"<br>"+uni[20]+"<br>")

// --------Q #17----------
// var input=prompt("Enter string")
// document.write("User Input: "+input+"<br>")
// var last=input.slice(-1)
// document.write("Last character of input: "+last+"<br>")



// --------Q #18----------
// var text="the quick brown fox jumps over the lazy dog."
// for(i=0;i<=text.length;i++){
//     if(text.slice(i,i+3)==="the"){
//         document.write("There are 2 occurence(s) of word 'the'<br> ")
//         break;
// }
// else{
//     document.write("No 'the' found")
// }
// }



// CHAPTER 26 TO 30


// --------Q #01----------
// var value=prompt("Enter positive integer: ")
// document.write("Number is: "+value+"<br>")
// document.write("Round off value: "+Math.round(value)+"<br>")
// document.write("Floor value: "+Math.floor(value)+"<br>")
// document.write("Ceil value: "+Math.ceil(value)+"<br>")


// --------Q #02----------
// var value=prompt("Enter negative integer: ")
// document.write("Number is: "+value+"<br>")
// document.write("Round off value: "+Math.round(value)+"<br>")
// document.write("Floor value: "+Math.floor(value)+"<br>")
// document.write("Ceil value: "+Math.ceil(value)+"<br>")


// --------Q #03----------

// var value=-5
// document.write("The absolute value of "+value+" is "+Math.abs(value)+"<br>")


// --------Q #04----------

// var first=Math.random(first)*7
// var second=Math.random(second)*7
// first1=Math.round(first)
// second1=Math.round(second)
// document.write("Random dice value: "+first1+"<br>")
// document.write("Random dice value: "+second1+"<br>")

// --------Q #05----------

// var first=Math.random(first)*2
// var second=Math.random(second)*2
// first1=Math.round(first)
// second1=Math.round(second)
// document.write(first1+"<br> Random coin value: Heads <br>")
// document.write(second1+"<br> Random coin value: Tails <br>")

// --------Q #06----------

// var first=Math.random(first)*100
// first1=Math.round(first)
// document.write("random number between 1 and 100: "+first1+"<br>")


// --------Q #07----------
// var weight=prompt("Enter weight Possible user inputs can be: \n a. 50 \n b. 50kgs \n c. 50.2kgs \n d. 50.2kilograms")
// parseInt(weight)
// document.write("The weight of user input is "+weight+" kilograms <br>")

// --------Q #08----------
// var first=Math.random(first)*10;
// first1=Math.round(first)
// var desire=6;
// document.write(first1)
// if (desire==first1){
// alert("Congratulations you win..!")
// }
// else{
//     alert("Try again")
// }

                                                                                                 

// CHAPTER 31 TO 34

// --------Q #01----------
                                             
// var cuurentdate=new Date()
// document.write(cuurentdate+"<br>")                                              

// --------Q #02----------
// var month=["January","February","March","April","May","June","July","August","September","October","November","December"]
// var currentMonth=new Date()
// var result=month[currentMonth.getMonth()]
// document.write("Current month: "+result+"<br>")

// --------Q #03----------
// var day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
// var currentDay=new Date()
// var result=day[currentDay.getDay()]
// resul2=result.slice(0,3)
// document.write("Today is: "+resul2+"<br>")

// --------Q #04----------
// var day=prompt("Enter day")
// var d=day.toLowerCase();
//     if(d==="sunday" || d==="saturday"){
//        document.write("It's Fun Day")
//     }
//     else{
//         document.write("It's not Fun Day")
//     }

// --------Q #05----------
// var day=+prompt("enter today date ")
// if (day>=1 && day<=15){
//     document.write("first fifteen days of month")
// }
// else if (day>=16 && day<=30)
// {
//     document.write("Last days of month")
// }
// else{
//     document.write("Invalid Date!")
// }

// --------Q #06----------
// var today = new Date ();
// var todaymili=today.getTime();
// var t =todaymili/(1000*60*60)
// document.write("Current Date: " + today + "<br>" )
// document.write("Elapsed miliseconds since January 1, 1970: " + todaymili + "<br>" )
// document.write("Elapsed minutes since January 1, 1970: " + t)


// --------Q #07----------
// function GetTime(date) {
//     var currentTime = (new Date(date))
//     var hours = currentTime.getHours()
//     var suffix = '';
//     if (hours > 11) {
//         suffix += "PM";
//     } else {
//         suffix += "AM";
//     }
//     var minutes = currentTime.getMinutes()
//     if (minutes < 10) {
//         minutes = "0" + minutes
//     }
//     if (hours > 12) {
//         hours -= 12;
//     } else if (hours === 0) {
//         hours = 12;
//     }
//     var time =  "It's "+ suffix;
//     return time;
// }
// var a=GetTime(20);
// document.write(a)

// --------Q #08----------

//  var d=new Date(2020,4,31);
// document.write("Later Date: "+d);


 // --------Q #09----------


// var dateBefore = new Date("april 24,2020");
// var p=dateBefore.getTime();
// var dateAfter = new Date("june 20 , 2020");
// var today=dateAfter.getTime();
// var difference =   today-p;
// var daysBetween = (difference / (1000*60*60*24));
// document.write("Number of Days between dates: "+daysBetween);


// --------Q #10----------
// var s_d = new Date("Jan 1,2015");
// var p=s_d.getTime();
// var e_d = new Date();
// var today=e_d.getTime();
// var difference =   today-p;
// var seconds = (difference / (1000*60));
// document.write("On reference date  "+ e_d + " "+ seconds + " seconds had passed since 2015");



// --------Q #11----------
// var Date=new Date();
// document.write("Current Date: "+Date)
// Date.setHours(Date.getHours()-1);
// document.write("<br> 1 Hour ago, it was: "+Date);


// --------Q #12----------
// var year= new Date();
// document.write("Current Date: "+year)
// year.setFullYear(year.getFullYear()-100)
// document.write("<br> 100 Years ago, it was: "+ year);

// --------Q #13----------

//  var age=+prompt("Enter Your age")
//  var t_d=new Date();
//  var year=t_d.getFullYear()-age;
//  document.write("Your age is " +age+ " "+ "<br> Your birth year is "+year )

// --------Q #14----------

// var c_name=prompt("Enter Customer Name")
// var month=["January","February","March", "April","May", "June", "July","August","September","October","November","December"]
// var current_m=new Date()
// var result=month[current_m.getMonth()]
// var units=410;
// var charges=16;
// var NetAmount=units*charges;
// var n=NetAmount.toFixed(2)
// var LateCharges=350;
// var GrossAmount=(NetAmount+LateCharges);
// var g=GrossAmount.toFixed(2);
// document.write(" <br> Customer Name: "+c_name )
// document.write(" <br> Current Month: "+result )
// document.write(" <br> Number of units: "+units)
// document.write(" <br> Charges per units: "+charges)
// document.write(" <br> Net Amount Payable (within Due Date): "+NetAmount)
// document.write(" <br> Late Payment Surcharge: "+LateCharges)
// document.write(" <br> Gross Amount Payable (after Due Date): "+g)



// CHAPTER 35 TO 38

// --------Q #01----------
// function date(){
//     return new Date();
// }
// var d=date();
// document.write("<h4> Date Will Be <\h4> " +d)




// --------Q #02----------
// function welcome(f_name,l_name){
//     return f_name + l_name;
// }
//  var w =welcome("Question_mark","    Personality");
// document.write(" <br> <br> <br> <br>  Respected Welcome to Mrs  " + w)


// --------Q #03----------
// var num1=prompt("Enter First Number")
// var num2=prompt("Enter Second Number")
// function add(a,b){
//     return a+b;
// }
// var s=add(+num1,+num2);
// document.write("sum of given numbers will be   " + s)


// --------Q #04----------

// var n1=+prompt("Enter First Number")
// var op=prompt("Enter the operation")
// var n2=+prompt("Enter Second Number")
// function calcu(nu1,opr,nu2){
//     if(op=="+"){
//         return n1+n2;

//     }
//     else if(op =="-"){
//         return n1-n2;

//     }
//     else if(op =="/"){
//         return n1/n2;

//     }
//     else if(op =="*"){
//         return n1*n2;

//     }
//     else {
//         alert("invalid numbers")
//     }
// }
// var c=calcu(n1,op,n2);
// document.write("Your result will be   " + c)


// --------Q #05----------

// var s=+prompt("Enter Number")
// function sq(){
//     return s*s;
// }
// q=sq(s);
// document.write("Square will be   " + q)


// --------Q #06----------

// var f=+prompt("Enter Number to finds its factorial")

//   function fact(fa){
//     var fac =1; 
//     for(var i =1; i<=fa; i++){

//         fac =fac*i;
//     }
//    return fac
//    }
//  t=fact(f);
//  document.write("Factorial will be   " + t)


// --------Q #07----------
// var s_num = prompt("enter starting number")
// var e_num = prompt("enter ending number")
// function count(){
//     for (var i=s_num ; i<=e_num ; i++){

//         document.write(i +"<br>") ;   
//     }  
// }
// count();

// --------Q #08----------

//  var base = +prompt("enter base")
//  var perp = +prompt("enter perpendicular")
//  var h;
//  function calculateHypotenuse(b,p){
//      function calculatesquare(h){
//         return document.write( "Hypotenuse of Right angle tringle will be "+ (b*b+ p*p));

//      } 
//      calculatesquare();
//  }
// calculateHypotenuse(base, perp);


// --------Q #09----------

// var width=+prompt("enter width of rectangle")
// function area(w,h){
//     return  w*h; ;
// }
// var a =area(width, 4)
// document.write("the area of recatngle will be  "+ a)

// --------Q #10----------

//  function par()
//  {
// var word=prompt("enter your word ");
// var check="";
// for (var i=word.length-1; i>=0; i--) 
//     {
//     check+=word[i]
//     }
// if (word===check){
//     document.write(word+" is palandrome word")
//     }
// else{
//     document.write(word+" is  not palandrome word")
// }

// }
//  par();


// --------Q #11----------
// var str=prompt("enter any string");
// function  c_str(s){

//     var a = str.split(' ');
//     var b = [];

//     for(var i = 0; i < a.length; i++){
//         b.push(a[i].charAt(0).toUpperCase()+a[i].slice(1));
//     }
//     return b.join(' ');
// }
// var a=c_str(str);
// document.write("Required string will be "+ a)


// --------Q #12----------


// function l_word(str)
// {
//   var array1 = str.match(/\w[a-z]{0,}/gi);
//   var result = array1[0];

//   for(var x = 1 ; x < array1.length ; x++)
//   {
//     if(result.length < array1[x].length)
//     {
//     result = array1[x];
//     } 
//   }
//   return result;
// }
// document.write(l_word('DAWOOD UNIVERSITY'));


// --------Q #13----------

// function count(str, l) 
// {
//  var l_Count = 0;
//  for (var i = 0; i < str.length; i++) 
//  {
//     if (str.charAt(i) == l) 
//       {
//       l_Count += 1;
//       }
//   }
//   return l_Count;
// }

// document.write("the number of occurrences of the specified letter within the string will be " + count('saira', 'a'));

// --------Q #14----------
// var radius=prompt("enter radius of circle")
// var r_c ,a_c=0;
// function calcCircumference(r){
//     r_c=2*3.142*r;
//     return r_c
// }
// function calcArea(a){
//     a_c=3.142*a*a;
//     return a_c
// }
// document.write("The circumference of circle will be "+ calcCircumference(radius) +"<br>");
// document.write("The Area of circle will be "+ calcArea(radius));





document.write("<h>ASSIGNMENT NO :9</h1>")
                                           

/* <!-- --------------        CHAPTER 43 TO 48       --------------- --> */

// --------Q #01----------

// function powernum(a,b){
//     result=Math.pow(a,b);
//     document.write("The result is "+result+"<br>");
// }
// powernum(2,3)

// --------Q #02----------

// function leapyear(){
//       var leap= prompt("Enter year to find leap or not")
//     if (leap%400==0 || leap%4==0){
//         alert("The "+leap+" is leap year")
//     }
//     else{
//         alert("The "+leap+" isn't leap year")
//     }
//  }
//  leapyear()

// --------Q #03----------

// function S(){
//     var a=2
//     var b=6
//     var c=3
//     S=(a+b+c)/2
//     return S
// }
//  function areanum(a,b,c){
    
//     var result=S( S *((S-a)*(S-b)*(S-c)))
//     document.write("The area of triangle is "+result+"<br>")
//  }
// areanum(2,6,3)


// --------Q #04----------

// function marks(s1,s2,s3){
//     var avg=(s1+s2+s3)/3
//      return avg
// }

// var num= marks(30,25,20)

// function percentage(){
//      per=75/90*100
//      count=per.toFixed(2)
//     return  count
// }
// percentage()

// function main(){
//     document.write("The average of student is: "+num+" and percentage is: "+count+"<br>")
// }

// main()


// --------Q #05----------

// function indexof(){
// const paragraph = "Here is Amna Zafar, The most pretty girl...!! Amna Zafar doing bachelor's from Duet";

// const searchTerm = "Amna";
// const indexOfFirst = paragraph.indexOf(searchTerm);

// document.write('The index of the first '+searchTerm +" from the beginning is " +indexOfFirst+"<br>");


// document.write('The index of the 2nd '+searchTerm+ " is " +paragraph.indexOf(searchTerm, (indexOfFirst + 1))+"<br>");
// }

// indexof()


// --------Q #06----------

// function vowels(){

//     var sentence="The way we are talking"
//     document.write("String with vowels: "+ sentence+"<br>")
//     if(sentence.length>25){
//         alert("morethan 25 characters not allowed")
//     }
//     else if(sentence.length==0){
//         alert("0 length string error")
//     }
//     else{
//         var string=sentence.toLowerCase()
//         strings= string.replace( /[aeiou]/g, '' );              

//          document.write("String without vowels: "+strings+"<br>");
//  }

// }

// vowels()


// --------Q #07----------

// function vowels2() {
//     var str = "Pleases read this application and give me gratuity";
//     var result = str.match(/[aeiou]{2}/g);
//     document.write("Such occurrences are: "+result+"<br>")
// }
  
// vowels2();
  
 // --------Q #08----------

// function distance(){
//     dist1=prompt("Enter the distance between 2 cities in km: ")
//     document.write("Distance in km: "+dist1+"<br>")
//     return dist1
// }
// distance()

// function meters(){
//     dist2=dist1*1000
//     document.write("Distance in meter: "+dist2+"<br>")
// }
// meters()

// function feet(){
//     dist3=dist1*3280.8
//     document.write("Distance in feet: "+dist3+"<br>")
// }
// feet()

// function inches(){
//     dist4=dist1*39370.1
//     document.write("Distance in inches: "+dist4+"<br>")

// }
// inches()

// function centimeter(){
//     dist5=dist1*100000
//     document.write("Distance in centimeter: "+dist5+"<br>")

// }
// centimeter()


// --------Q #09----------

// function overtime(){
//     var timeWorked=prompt("Enter time employee work in hour, worked above 40 hours.")
// 		if (timeWorked>40)
// 		{
// 			var overTime = timeWorked - 40;
//             var overtimePay = (12 * overTime);
//             document.write("Total Overtime Pay Of Employee Is: "+ overtimePay+"<br>");
//         }
        
//         else{
//             alert("Incorrect input")
//         }
	
// }
// overtime()


// --------Q #10----------

// function withdraw(){
//     var amount=prompt("Please enter amount of withdraw: ");
	

//     document.write("Required notes of Rs. 100  : "+(amount/100)+"<br>")
//     document.write("Required notes of Rs. 50  : "+(amount%100)/50+"<br>")
//     document.write("Required notes of Rs. 10  : "+((amount%100)%50)/10+"<br>")
//     document.write("Amount still remaining  : "+(((amount%100)%50)%10)+"<br>")
	
// }
// withdraw()







          /* <!-- --------------        CHAPTER 43 TO 48       --------------- --> */

 
// --------Q# 01 & 02----------

// function alerts(){
//     alert("Thanks for purchasing phone from us")
// }



// --------Q #03----------

// function myFunction1() {
//     document.getElementById("myTable").deleteRow(1);
//   }

//   function myFunction2() {
//     document.getElementById("myTable").deleteRow(2);
//   }

//   function myFunction3() {
//     document.getElementById("myTable").deleteRow(3);
//   }


// function myFunction4() {
//     document.getElementById("myTable").deleteRow(4);
//   }

//   function myFunction5() {
//     document.getElementById("myTable").deleteRow(5);
//   }

//   function myFunction6() {
//     document.getElementById("myTable").deleteRow(6);
//   }

//   function myFunction7() {
//     document.getElementById("myTable").deleteRow(7);
//   }

//   function myFunction8() {
//     document.getElementById("myTable").deleteRow(8);
//   }

//   function myFunction9() {
//     document.getElementById("myTable").deleteRow(9);
//   }

//   function myFunction10() {
//     document.getElementById("myTable").deleteRow(10);
//   }


// --------Q #04----------

// function changeimg(id,src)
// {
//   var image=document.getElementById(id)
//   image.src=src
// }


// --------Q #05----------

// function add(){
//   var input=document.getElementById("input")
//   input.value=parseInt(input.value)+1
// }

// function sub(){
//   var input=document.getElementById("input")
//   input.value=parseInt(input.value)-1
// }



/* <!-- --------------        CHAPTER 49 TO 52       --------------- --> */

// --------Q #01----------

// function showData(){
//     var name=document.getElementById("amna")
//     var l_name=document.getElementById("a")
//     var e_m=document.getElementById("b")
//     document.write("<h1> Sign Up Form Entered Data </h1>")
//     document.write("First Name  :" +name.value +"<br>")
//     document.write("Last Name   :" +l_name.value+ "<br>")
//     document.write("E_mail  : "+ e_m.value+ "<br>") 
// }


// --------Q #02----------

// function readMore(){
//     var text="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, excepturi voluptate?Illo praesentium aliquam perferendis odio sint,consectetur impedit nisi ea nobis atque quia, a incidunt earum sunt, similique tempore!"
//     var peragraph=document.getElementById('pera')
//     peragraph.innerHTML=text
// }


// --------Q #03----------

// function edit_row(no)
// {
//  document.getElementById("edit_button"+no).style.display="none";
//  document.getElementById("save_button"+no).style.display="block";
	
//  var name=document.getElementById("name_row"+no);
//  var country=document.getElementById("country_row"+no);
//  var age=document.getElementById("age_row"+no);
	
//  var name_data=name.innerHTML;
//  var country_data=country.innerHTML;
//  var age_data=age.innerHTML;
	
//  name.innerHTML="<input type='text' id='name_text"+no+"' value='"+name_data+"'>";
//  country.innerHTML="<input type='text' id='country_text"+no+"' value='"+country_data+"'>";
//  age.innerHTML="<input type='text' id='age_text"+no+"' value='"+age_data+"'>";
// }

// function save_row(no)
// {
//  var name_val=document.getElementById("name_text"+no).value;
//  var country_val=document.getElementById("country_text"+no).value;
//  var age_val=document.getElementById("age_text"+no).value;

//  document.getElementById("name_row"+no).innerHTML=name_val;
//  document.getElementById("country_row"+no).innerHTML=country_val;
//  document.getElementById("age_row"+no).innerHTML=age_val;

//  document.getElementById("edit_button"+no).style.display="block";
//  document.getElementById("save_button"+no).style.display="none";
// }

// function delete_row(no)
// {
//  document.getElementById("row"+no+"").outerHTML="";
// }

// function add_row()
// {
//  var new_name=document.getElementById("new_name").value;
//  var new_country=document.getElementById("new_country").value;
//  var new_age=document.getElementById("new_age").value;
	
//  var table=document.getElementById("data_table");
//  var table_len=(table.rows.length)-1;
//  var row = table.insertRow(table_len).outerHTML="<tr id='row"+table_len+"'><td id='name_row"+table_len+"'>"+new_name+"</td><td id='country_row"+table_len+"'>"+new_country+"</td><td id='age_row"+table_len+"'>"+new_age+"</td><td><input type='button' id='edit_button"+table_len+"' value='Edit' class='edit' onclick='edit_row("+table_len+")'> <input type='button' id='save_button"+table_len+"' value='Save' class='save' onclick='save_row("+table_len+")'> <input type='button' value='Delete' class='delete' onclick='delete_row("+table_len+")'></td></tr>";

//  document.getElementById("new_name").value="";
//  document.getElementById("new_country").value="";
//  document.getElementById("new_age").value="";
// }



                /* <!-- --------------        CHAPTER 53 TO 58       --------------- --> */

// --------Q #01---------- 

// function showimage(e){
//   console.log(e.src)
//   var modalImage=document.getElementById("modalImage")
//   modalImage.src=e.src
// }


// --------Q #02---------- 

// function zoomin(){
//   var p=document.getElementById("zoomin")
//   p.style.fontSize="40px"
// }

// function zoomout(){
//   var p=document.getElementById("zoomin")
//   p.style.fontSize="12px"
// }



            /* <!-- --------------        CHAPTER 59 TO 67       --------------- --> */


// --------Q #01----------           



// ----------      PART 1      ----------

//var a=document.getElementById("main-content")
//console.log(a)



// ----------      PART 2      ----------

//var a=document.getElementById("main-content")
//console.log(a.childNodes)



// ----------      PART 3      ----------

// var a=document.getElementById("main-content")
// a.appendChild(render)



// ----------      PART 4      ----------

//var a= document.getElementById("first-name").value
//var p=document.createElement("p")
//var textNode=document.createTextNode(a.value)
//p.appendChild(textNode)
//console.log(textNode)
//var a=document.getElementById("firstname")
//a.appendChild(p)



// ----------      PART 5      ----------

//var a= document.getElementById("last-name").value
//var p=document.createElement("p")
//var textNode=document.createTextNode(a.value)
//p.appendChild(textNode)
//console.log(textNode)
//var a=document.getElementById("last-name")
//a.appendChild(p)

//var a= document.getElementById("email").value
//var p=document.createElement("p")
//var textNode=document.createTextNode(a.value)
//p.appendChild(textNode)
//console.log(textNode)
//var a=document.getElementById("email")
//a.appendChild(p)



// --------Q #02----------



// ----------      PART 1      ----------

//var a=document.getElementById("main-content")
//console.log(a.nodeType)



// ----------      PART 2      ----------

//var a=document.getElementById("lastName")
//console.log(a.childnode[0].nodeType)



// ----------      PART 3      ----------

//var a=document.getElementById("lastName")
//console.log=target.setAttribute('id', 'Last end')



// ----------      PART 4      ----------

//var a=document.getElementById("main-content")
//console.log(a.firstChild)

//var a=document.getElementById("main-content")
//console.log(a.lastChild)



// ----------      PART 5      ----------

//var a=document.getElementById("lastName")
//console.log(a.nextSibling)

//var a=document.getElementById("lastName")
//console.log(a.previousSibling)

//var a=document.getElementById("email")
//console.log(a.parentNode)

//var a=document.getElementById("email")
//console.log(a.nodeType)
