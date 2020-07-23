document.write("<h>ASSIGNMENT NO :5</h1>")

// CHAPTER 01 TO 21

 //ASSIGNMENT NO:1
/*alert("Assalam-o-Alaikum, my name is saira sial");
alert("Error! Please enter a valid passward");
alert("Welcome to js land... \n Happy Coding!");
alert("Welcome to JS Land...");
alert("Happy Coding! \n prevent this page from creating additional dialogs.");
var value="Hello... I can run JS through my web browser's console";
console.log(value);
                                                            //ASSIGNMENT NO:2
var username="saira sial";
alert(username);
var myName="saira sial";
alert(myName);
var message="Hello World";
alert(message);
var biodata="Jhone Dhoe";
alert(biodata);
var biodata="15 years old";
alert(biodata);
var biodata="Certified Web and Mobile Application Development";
alert(biodata);
alert("Pizza \n Pizz \n Piz \n Pi \n P");
var email="rashidam603na@gmail.com";
var email2="My Email Address is";
var emailAddress= email2+ " " +email;
alert(emailAddress);
var book="A smarter way to learn Javascript";
alert("I am trying to learn from the Book" + " " + book);
var a= "<h3>Yah! I can write HTML content through JavaScript</h3>"
document.write(a)
var string="“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”"
alert(string)
                                                               //ASIGNMENT NO:3
//qno:1
var age="I am 21 years old";
alert(age);
//qno:2
var N=[3];
for(i=1;i<=N;i++){
  alert("You have visited this site "+" "+ i +" "+ "times");
}
//qno:3
var birthyear=1998;
document.write("My birth year is" +" "+ birthyear +"</br> " +" Data type of my declared variable is number</br></br>");
//qno:4
var Visitorsname="<b>John Doe</b>";
var producttitle="XYZ Clothing Store."
var Quantity="<b>5 T-Shirts</b>"
document.write(Visitorsname+" "+"ordered"+" "+Quantity+"(s)"+ " on " + producttitle+"</br></br>");
                                                          //ASSIGNMENT NO:4
//qno:1
var Name="Amna Rashid", Year="1998" , Rollno="WM2168";
document.write(Name+" "+Year+" "+Rollno +"</br></br>");
       
//qno:2                              //illegal Variables
// var &illegal1="John";
// var #illegal2="John";
// var %illegal3="John";
// var @illegal4="John";
// var !illegal5="John";
                                 //legal Variables
var legal="John";
var _legal2="John";
var $legal3="John";
var legal_4="John";
var $legal_5="John";
                      
//qno:3                        
document.write("<h2>“Rules for naming JS variables”</h2></br>");
document.write("Variable names can only contain numbers, $ and _. For example $my_1stVariable<br>");
document.write("Variables must begin with a letter, $ or_. For example $name, _name or name<br>");
document.write("Variable names are case sensitive<br>");
document.write("Variable names should not be JS keywords<br><br>");
                                                                //ASSIHNMENT NO:5
//qno:1
var value1=+prompt("enter first value for addition");
var value2=+prompt("enter second value for addition")
var value=value1+value2;
document.write("Sum of "+ value1 +" and "+ value2+" is "+value +"<br><br>")
//qno:2
var value1=+prompt("enter first value for subtraction");
var value2=+prompt("enter second value for subtraction")
var value=value1-value2;
document.write("Difference of "+ value1 +" and "+ value2+" is "+value +"<br><br>")
var value1=+prompt("enter first value for multiplication");
var value2=+prompt("enter second value for multiplication")
var value=value1*value2;
document.write("Result of multiplication of "+ value1 +" and "+ value2+" is "+value +"<br><br>")
var value1=+prompt("enter first value for division");
var value2=+prompt("enter second value for division")
var value=value1/value2;
document.write("Division of "+ value1 +" and "+ value2+" is "+value +"<br><br>")
var value1=+prompt("enter first value for modulus");
var value2=+prompt("enter second value for modulus")
var value=value1%value2;
document.write("Modulus of "+ value1 +" and "+ value2+" is "+value +"<br><br>")
//qno:3
var value;
value=5;
document.write("Initial value is:"+value+"<br>");
value++;
document.write("Value after increment  is:"+value+"<br>");
value=value+7;
document.write("Value after addition is:"+value+"<br>")
value--;
document.write(" Value after decrement is:"+value+"<br>");
value=value%3;
document.write("The remainder is: "+value+"<br><br>")
//qno:4
value=600;
document.write("Total cost to buy 5 tickets to a movie is "+value*5+"PKR <br><br>")
// qno:5
document.write("<h1>TABLE OF '4' </h1>")
for(var i=1;i<=10;i++)
{
  document.write("4"+"x"+i+"="+4*i+"<br>");
}
document.write("<br><br>")
//qno:6
var celcius=25;
var F=(celcius*9/5)+32;
document.write(celcius+"C"+"is"+F+"F"+"<br><br>");
var Farenhiet=70;
var C=(Farenhiet-32)*5/9;
document.write(Farenhiet+"F"+"is"+C+"C"+"<br><br>");
//qno:7
document.write("Price of item 1 is 650 <br>");
document.write("Quantity of item 1 is 3<br>");
document.write("Price of item 2 is 100 <br>");
document.write("Quantity of item 2 is 7 <br>");
document.write("Shipping charges is 100 <br> ");
var total=650*3+100*7+100;
document.write("Total cost of your order is "+total +"<br><br>");
//qno:8
var Tmarks=980;
document.write("Total marks is  "+Tmarks+"<br>")
var obtmarks=804;
document.write("Obtained marks is  "+obtmarks+"<br>")
var percentage=obtmarks/Tmarks*100;
document.write("Percentage is  "+percentage+"%"+"<br><br>")
//qno:9
document.write("<h1>CURRENCY IN PKR</h1>")
var currency=104.80*10+25*28;
document.write("Total currency in PKR: "+currency+"<br><br>")
document.write("---------------------------------------<br><br><br>")
//qno:10
var exp=(5+5*10)/2;
document.write("Result of expression is "+exp+"<br><br>");
//qno:11
document.write("<h1>AGE CALCULATOR</h1>");
var year=2020;
document.write("Current year: "+ year+"<br>");
var birthyear=2001;
document.write("Birth year: "+ birthyear+"<br>");
var age=2020-2001;
document.write("Your age is : "+ age +"<br><br>");
var year=2020;
document.write("Current year: "+ year+"<br>");
var birthyear=1973;
document.write("Birth year: "+ birthyear+"<br>");
var age=2020-1973;
document.write("Your age is : "+ age +"<br><br>");
document.write("---------------------------------------<br><br><br>")
//qno:12
document.write("<h1>THE GEOMETRIZER</h1>");
var radius=20;
var pi=3.14;
var circumference=2*pi*radius;
var area=pi*radius*radius;
document.write("Radius of  Circle: "+radius+"<br>")
document.write("Circumference is : "+circumference+"<br>")
document.write("Area is : "+area+"<br>")
document.write("---------------------------------------<br><br><br>")
//qno:13
document.write("<h1>THE LIFETIME SUPPLY CALCULATOR</h1>");
var snacks="chocklatechips";
document.write("Favorite snack is:"+snacks+"<br>") 
var cage=15;
document.write("Current age is:"+cage+"<br>") 
var mage=65;
document.write("Estimated maximum age is:"+mage+"<br>") 
var perday=3;
document.write("Amount of snacks per day is:"+perday+"<br>") 
document.write(" “You will need 150 "+snacks+ " to last you until the ripe old age of "+mage+"”"+"<br>")
document.write("------------------------------------------------------------------<br><br><br>")
                                                    //ASSIHNMENT NO:6-9
//qno:1
var a=10;
console.log("The value of a is :",a);
++a
console.log("The value of ++a is :",a)
console.log("Now the value of a is :",a);
console.log("The value of a++ is :",a)
a++
console.log("Now the value of a is :",a);
--a;
console.log("The value of --a is :",a)
console.log("Now the value of a is :",a);
console.log("The value of a-- is :",a)
a--
console.log("Now the value of a is :",a);
//qno:2
var a=2;
 var b=1;
 --a;
 console.log("The value of --a is:",a);
 --b;
 console.log("Now the value of --b is:",b)
 var res=a-b;
 console.log("Result of --a - --b is",res);
 ++b;
 console.log("Now the value of ++b is:",b)
 res=res+b;
 console.log("Result of --a - --b + ++b is:",res);
 b--;
 console.log("Now the value of b-- is:",b)
 res=res+b
 console.log("Final result of --a - --b + ++b +b-- is:",res);
 console.log("Now the value of a is:",a);
 console.log("Now the value of b is:",b);
//qno:3
var name=prompt("Enter your name")
 alert("God bless you!")
 
//qno:4
var t=+prompt("Enter any number");
 if(t!=5){
     for(var i=1;i<11;i++){
          var tab=t*i;
          console.log(t,"*",i,"=",tab);
     }
 }
 else{
     for(var i=1;i<11;i++){
         var tab=5*i;
         console.log(5,"*",i,"=",tab)
     }
 }
//qno:5
var sub1,sub2,sub3,m1,m2,m3,obt,tot;
 sub1=prompt("Enter sub1 name");
 sub2=prompt("Enter sub2 name");
 sub3=prompt("Enter sub3 name");
 m1=+prompt("Enter sub1 marks");
 m2=+prompt("Enter sub2 marks");
 m3=+prompt("Enter sub3 marks");
 tot=m1+m2+m3;
 console.log(tot);
 
                                                    //ASSIHNMENT NO:9-11
//qno:1
/*var  city= prompt("enter the city name");
if (city == "Karachi"){
    console.log("Welcome to city of lights")
}
//qno:2
 var gender = prompt("Enter your gender");
if(gender == "male"){
    console.log(" Good Morning Sir")
}
else if(gender == "female"){
    console.log(" Good Morning Ma'am")
}
else{
    console.log("undefined")
}
//qno:3
var color = prompt("Enter color");
if(color == "Red"){
     console.log("Must Stop ")
  }
  else if(color == "Yellow"){
      console.log("Ready to move ")
  }
  else if(color == "Green"){
    console.log("Move now")
  } 
  else{
    console.log("undefined")
  }
//qno:4
var fuel = prompt(" input remaining fuel in car (in litres)");
if( fuel < 0.25 ){
    console.log("Please refill the fuel in your car")
}
else{
    console.log("the tank has more than 0.25 liters on fuel in it")
}
//qno:5
var a = 4; 
if (++a === 5){ 
    alert("given condition for variable a is true"); 
} 
 
var b = 82; 
if (b++ === 83){ 
    alert("given condition for variable b is true"); 
} 
var c = 12; 
if (c++ === 13){ 
    alert("condition 1 is true"); 
} 
if (c === 13){ 
    alert("condition 2 is true");
} 
if (++c < 14){ 
    alert("condition 3 is true"); 
} 
if(c === 14){ 
    alert("condition 4 is true"); 
} 
 
var materialCost = 20000; 
var laborCost = 2000; 
var totalCost = materialCost + laborCost; 
if (totalCost === laborCost + materialCost){ 
    alert("The cost equals"); 
} 
 
if (true){ 
    alert("True"); 
} if (false){ 
    alert("False"); 
} 
 if("car" < "cat"){ 
     alert("car is smaller than cat"); 
    } 
//qno:6
var totalmarks = +prompt("enter total marks");
console.log("Total Marks:", totalmarks)
var marks1 = +prompt("enter marks of subject 1");
var marks2 = +prompt("enter marks of subject 2");
var marks3 = +prompt("enter marks of subject 3");
var obtnmarks = (marks1 + marks2 + marks3);
console.log("Obtain Marks: " , obtnmarks);
var perc = (obtnmarks/totalmarks)*100;
console.log("Percentage:", perc);
if(perc >= 80 && perc <= 100){
  console.log("Grade: A-one", "remarks: Excellent ")
}
else if(perc >=70 && perc<=80 ){
  console.log("Grade: A", "remarks: Good ")
}
else if(perc >=60 && perc<=70 ){
  console.log("Grade: B", "remarks: You need to improve ")
}
else if(perc <=60 ){
  console.log("Grade: fail", "remarks: sorry ")
}
else{
  console.log("error")
}
//qno:7
randomnum = Math.floor(Math.random() * 10 + 1); 
var guessnum = +prompt("Guess the number: ");
if ( randomnum == guessnum ){
  console.log("Bingo! Correct answer")
}
else if( randomnum = guessnum+1){
  console.log("“Close enough to the correct answer")
}
else{
  console.log("wrong answer")
}
//qno:8
var num = +prompt("enter number: ");
if(num % 3 == 0){
  console.log(num , "is divisible by 3")
}
else{
  console.log(num, "is not divisible by 3")
}
//qno:9
var num = +prompt("enter number: ");
if(num % 2 == 0 ){
  console.log(num , "is an even number")
}
else{
  console.log(num, "is an odd number")
}
//qno:10
var temp = +prompt("enter Temperature: ");
if(temp > 40 ){
  console.log("It is too hot outside")
}
else if(temp > 30 && temp <=40 ){
  console.log("The Weather today is Normal")
}
else if(temp > 20 && temp <=30 ){
  console.log("Today’s Weather is cool")
}
else if(temp > 10 && temp <=20 ){
  console.log("OMG! Today’s weather is so Cool")
}
else{
  console.log("wrong value")
}
//qno:11
var firstnum = +prompt("enter first number:");
var secnum = +prompt("enter second number:");
var operator = prompt("enter operator"); 
console.log(operator)
if(operator == "+" ){
  console.log(firstnum + secnum)
}
else if(operator == "-" ){
  console.log(firstnum - secnum)
}
else if(operator == "*" ){
  console.log(firstnum * secnum)
}
else if(operator == "/" ){
  console.log(firstnum / secnum)
}
else if(operator == "%" ){
  console.log(((firstnum + secnum)/200)*100)
}
else{
  console.log("wrong operator")
}
                                                      //ASSIHNMENT NO:12-13
//qno:1
var ch = prompt("Enter any character:");
if(ch>=65 && ch<=90){
  console.log("Character is a capital letter")
}                                                     //////////////////////////////////////////////////////
else if(ch>=97 && ch<=122){
  console.log("Character is a small letter")
}
else if(ch>=48 && ch<=57){
  console.log("Character is a digit")
}
else{
  console.log("wrong value")
}
	
//qno:2
var num1, num2;
num1 = window.prompt("Input the First integer", "0");
num2 = window.prompt("Input the second integer", "0");
                                                 
if(parseInt(num1, 10) > parseInt(num2, 10)) 
{ 
  console.log("The larger of "+ num1+ " and "+ num2+ " is "+ num1+ ".");
}   
else if(parseInt(num2, 10) > parseInt(num1, 10)) 
{
  console.log("The larger of "+ num1+" and "+ num2+ " is "+ num2+ ".");
}                  
else{
    console.log("The values "+ num1+ " and "+num2+ " are equal.");
  }
//qno:3
var num = +prompt("enter number: ");
if(num > 0){
  console.log("Positive number")
}
else if(num == 0){
  console.log("Zero")
}
else{
  console.log("Negative number")
}
//qno:4
var ch = prompt("enter an alphabet");
if(ch=='a' || ch=='e' ||ch=='i' ||ch=='o'||ch=='u' ||ch=='A' ||ch=='E' ||ch=='I' ||ch=='O' ||ch=='U'){
  console.log("True")
}
else{
  console.log("False")
}
//qno:5
var pass ="random123";
 uspass=prompt("Enter your password");
 if(uspass==""){
 alert("Please enter your password");
 }
 else if(uspass==pass){
     alert("Correct!")
 }
 else{
     alert("Incorrect!")
 }
//qno:6
var greeting; 
var hour = 13; 
if (hour < 18) { 
  console.log(greeting = "Good day");
} 
else{
    console.log(greeting = "Good evening"); 
}
 //qno:7
var time=prompt("Enter time in 24 hour clock format like 1900=7pm");
if (time>=0000&&time<1200){
  alert("GOOD MORNING.....!")
}
else if (time>=1200&&time<1700){
  alert("GOOD AFTERNOON.....!")
}
else if (time>=1700&&time<2100){
  alert("GOOD EVENING.....!")
}
else if (time>=2100&&time<2359){
  alert("GOOD NIGHT.....!")
}
else{
  alert("please enter appropriate time")
}
                                        //////////////////////////////////////////
                                                            //ASSIHNMENT NO:14-16
//qno:1
var myArray = [];
//qno:2
const array = []
//qno:3
var fruits = ["apple" , "mango" , "banana" , "orange"];
for( var i=0; i<fruits.length; i++){
  fruits[i];
  console.log(fruits[i]);
}
//qno:4
var number = [1,3,6,9,12,18];
for( var i=0; i<number.length; i++){
  console.log(number[i]);
}
//qno:5
var array = [];
for (i=0; i<10; i++) {
    array[i] = i%2===0;
}
var strArray = [];
for (i=0; i<10; i++) {
    strArray[i] = array[i] ? "true" : "false";
    console.log(strArray[i].toUpperCase());
}
//qno:6
var array = ["amna" , 3, "apple" ,4, 6, 7];
for( var i=0; i<array.length; i++){
  console.log(array[i]);
}
//qno:7
var qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
for( var i=0; i<qualification.length; i++){
  console.log(qualification[i]);
}
//qno:8
var stu=[],m=[];
for(i=0;i<3;i++){
    stu[i]=prompt("Enter name");
    m[i]=prompt("Enter "+ stu[i] + " marks :");
  var  per=(m[i]/500)*100
    console.log("Score of "+ stu[i] +" is "+ m[i] +". Percentage: "+per)
}                          ////////////////////////////////////////////
//qno:9
var colors=["orange","yellow","red"]
var beg=prompt("what do u want to add beginning of the color array?")
colors.unshift(beg)
alert(colors)
var beg=prompt("what do u want to add end of the color array?")
colors.push(beg)
alert(colors)
colors.unshift("grey","purple")
alert(colors)
colors.shift()
alert(colors)
colors.pop()
alert(colors)
var beg=prompt("what do u want to add in the color array?")
var num=+prompt("at which index u want to insert?")
colors.splice(num,num,beg)
alert(colors)
var num1=+prompt("at which index u want to delete colours?")
var num2=+prompt("how many colours u want to delete ?")
colors.splice(num1,num2+1)
alert(colors)
//qno:10
var studentscores = [320,230,480,120];
console.log(studentscores.sort());
//qno:11
var cities= ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedcities = cities.slice(2,4);
console.log(cities)
console.log(selectedcities)
//qno:12
var arr = ["This", "is","my", "cat"]; 
console.log(arr.join(' '));
//qno:13
var arr=[];
console.log("Devices :")
for(i=0;i<5;i++){
    arr[i]=prompt("Enter device name");
    console.log(arr[i]);
}
//qno:14
var arr=[];
console.log("Devices(Last in first out) :")
for(i=0;i<5;i++){
    arr[i]=prompt("Enter device name");
}
for(j=4;j>=0;j--){
    console.log(arr[j]);
}
//qno:15
 //qno:15
var arr=["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>")
for(var i=0; i < arr.length ;i++){
  document.write("<option>"+ arr[i] +"</option>")
}
document.write("</select>")
                                            //ASSIGNMENT NO:17 TO 20
//qno:1
var empty_Multidimentional_Array=[
  []
]
//qno:2
let multidimentionalL = [
  [0, 1,2,3],
  [1,0,1,2],
  [2,1,0,1],
  
];
document.write(multidimentionalL[0]+"<br>"+multidimentionalL[1]+"<br>"+multidimentionalL[2]+"<br><br>")
//qno:3
for(i=1;i<=10;i++)
{
  document.write(i+"<br>")
}
document.write("<br><br>")
//qno:4
var table=prompt("Enter a number to show its multiplication table : ");
var i=prompt("Enter length multiplication table : ");
for(j=1;j<=i;j++)
{
  document.write(table+"x"+j+"="+table*j+"<br>");
}
//qno:5
var fruits = ['apple', 'banana', 'mango', 'orange','strawberry']
document.write(fruits[0]+"<br>"+fruits[1]+"<br>"+fruits[2]+"<br>"+fruits[3]+"<br>"+fruits[4]+"<br><br>")
for(i=0;i<fruits.length;i++)
{
   document.write("Element at index "+i+" is "+fruits[i]+"<br>")
}
document.write("<br><br>") 
//qno:6
document.write("<h3>COUNTING</h3>");
for(i=1;i<=15;i++){
  document.write(i+", ")
}
document.write("<h3>REVERSE COUNTING</h3>");
for(i=10;i>0;i--){
  document.write(i+", ")
}
document.write("<h3>Even</h3>");
for(i=0;i<=20;i+=2){
  document.write(i+", ")
}
document.write("<h3>Odd</h3>");
for(i=1;i<=19;i+=2){
  document.write(i+", ")
}
document.write("<h3>Series</h3>");
for(i=2;i<=20;i+=2){
  document.write(i+"K, ")
}
document.write("<br>")
document.write("------------------------------------------------------------------<br><br><br>")
document.write("<br><br>")
//qno:7
var A = ['cake', 'apple pie', 'cookie', 'chips', 'patties']
var string=prompt("Welcome to ABC bakery, what do u want to order sir/ma'am? ")
string=string.toLowerCase();
for(i=0;i<=A.length;i++){
  if(A[i]==string)
  {
    alert("cookie is available at index "+i+" in our bakery")
  }
  else{
    alert("we are sorry "+ string+" is not available in our bakery")
  }
}
//qno:8
var array = [24, 53, 78, 91, 12];
var largest= 0;
for (i=0; i<=largest;i++){
    if (array[i]>largest) {
         largest=array[i];
    }
}
document.write("Array element: "+array[0]+" "+array[1]+" "+array[2]+" "+array[3]+" "+array[4]+" <br>")
document.write("Largest number is: "+largest);
document.write("<br><br>")
//qno:9
var array = [24, 53, 78, 91, 12];
var smallestNumber=100;
for (var i = 0; i < array.length; i++) {
  if (array[i] < smallestNumber) {
    smallestNumber = array[i];
  }
}
document.write("Array element: "+array[0]+" "+array[1]+" "+array[2]+" "+array[3]+" "+array[4]+" <br>")
document.write("Smallest number is: "+smallestNumber);
document.write("<br><br>")
//qno:10
for(i=5;i<=100;i+=5)
{
  document.write(i+" ")
}*/




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
