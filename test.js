var Firebase = require("firebase");
var fb = new Firebase("https://redwatersoccer.firebaseio.com/");
fb.set({
  emails: [ 
    {name:"Darrell",email:"dirtslayer@gmail.com"},
    {name:"Antal",email:"antal.shaw@gmail.com"}
  ],

  pendingEmails: [ 
    {name:"Darell",email:"dirtslayer@gmail.com",secret:"randomstring123"},
    {name:"Antal",email:"antal.shaw@gmail.com",secret:"randomstring456"}
  ],
  
  foo:"bar",
  hello:"world"
});
fb.child("emails").on("value", function(snapshot) {
  console.log(snapshot.val());
});
