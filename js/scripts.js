//business logic


function SignUp(fname,pwd){
  this.name=fname;
  this.password =pwd;
}

var userData =[
  {
    name:"eric",
   password:"waiting"
 },
 {
   name:"jemila",
   password:"locker"
 },
 {
   name:"agnes",
   password:"three"
 },
 {
   name:"amin",
   password:"laptop"
 },
 {
   name:"augustine",
   password:"ochieng"
 }

];

//valigate account
function validate(){
  for(var i=0; i<=userData.length; i++ ){
    if(userData.name == userData[i].name && userData.password == userData[i].password){
      alert("logged in");
    }
  }
}

var input1 = document.getElementById("userName").value;
var input2 = document.getElementById("password").value;

var newUser = new SignUp(input1,input2);



//add new object to the array
function addObject(){
  userData.push({name:input1 ,password:input1});
}




//user logic
$(document).ready(function(){
$("button#SignUp").click(function(){
  addObject();
  // validate();
  console.log(userData);
})
});
