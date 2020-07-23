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
