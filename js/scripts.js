
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
    event.preventDefault();
    var fName = $("input#first-name").val();
    var lName = $("input#last-name").val();
    var eAddress = $("input#email").val();
    var pNumber = $("input#phoneNumber").val();
    var mSubject = $("input#subject").val();
    var cMessage = $("input#message").val();

    var newUser = new Contact(fName,lName,eAddress,pNumber,mSubject,cMessage);
    $("#fName").text(" " + newUser.firstName);
    $("#lName").text("" + newUser.lastName);
    $("#eAddress").text("" + newUser.email);
    $("#pNumber").text("" + newUser.number);
    $("#cSubject").text("" + newUser.subject);
    $("#cMessage").text("" + newUser.message);

    $('.contactDisplayArea').show();
  });
});

