$(document).ready(function() {
  //This line is telling jQuery to look at the HTML document
  //Then calling the .ready() method on the HTML document
  //The ready() method is an built in method in jQuery which helps to load the whole page then execute the rest code
  $("#eventhandler").click(function() {
    //then you are targeting the id="eventhandler" from index.html
    //we're passing it as an argument to another function. This is called an anonymous callback function. It is a callback function because it is not executed immediately; instead the function is passed in to the jQuery click() function to be executed at a future time - in the case of the .click() function, when that event handler is triggered by a user clicking on any of the selected elements.
    $("#eventhandler-def").fadeToggle();
  });

  $("#callback").click(function() {
    $("#callback-def").fadeToggle();
  });

  $("#bizlogic").click(function() {
    $("#bizlogic-def").fadeToggle();
  });

  $("#uilogic").click(function() {
    $("#uilogic-def").fadeToggle();
  });

  $("#argvsfunc").click(function() {
    $("#argvsfunc-def").fadeToggle();
  });

  $("#arithmetic").click(function() {
    $("#arithmetic-def").fadeToggle();
  });

  $("#var").click(function() {
    $("#var-def").fadeToggle();
  });

  $("#string").click(function() {
    $("#string-def").fadeToggle();
  });

  $("#method").click(function() {
    $("#method-def").fadeToggle();
  });

  $("#return").click(function() {
    $("#return-def").fadeToggle();
  });

  $("#argument").click(function() {
    $("#argument-def").fadeToggle();
  });
  
});
