//Business Logic
function Contact(firstName,lastName,email,number,subject,message){
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.number = number;
  this.subject = subject;
  this.message = message;
}
//UI Logic
$(document).ready(function(){
	 $("form#contact-form").submit(function(event){
    event.PreventDefault();
    var firstName = $("input#first-name").val();
    var lastName = $("input#last-name").val();
    var emailAddress = $("input#email").val();
    var phoneNumber = $("input#phoneNumber").val();
    var subject = $("input#subject").val();
    var message = $("input#message").val();
    $("#fName").text(" " + Contact.firstName);
    $("#fName").text("" + Contact.lastName);
    $("#lName").text("" + Contact.lastName);
    $("#eAddress").text("" + Contact.email);
    $("#pNumber").text("" + Contact.number);
    $("#cSubject").text("" + Contact.subject);
    $("#cMessage").text("" + message);
  });
});
// var customerQuery = document.getElementById("form").elements;
// var display = {};
// for (var 1=0; i<customerQuery.length;i++);
//   if (customerQuery[i].type="submit") {
//     display[customerQuery[i].name]=customerQuery[i].value;
//   }
