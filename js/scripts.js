/*global $*/

//Class 1:
        // Fork and clone the repo and set up your project workspace and link files
        // Write HTML for your project
//Class 2:  
        // Declare four global variables for intial state of the list of choices, the computer choice, the user choice, and the winner.  
        // Practice using console.log() and debugger to debug your code
        // Create your document ready function. 
        // Create a click hander for when the "Shoot!" button is clicked, takes in the user choice from the input field, 
        // Display the user choice to the output screen
//Class 3:  
        // Randomly choose among 'rock', 'paper', or 'scissors' from the list of choices 
        // Display the computer choice to the output screen
        // Compare the user choice and the computer choice to determine who won. 
        // Display the user winner to the output screen 
        // Clear the input box for the next choice

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES

//FUNC
// DOCUMENT READY FUNCTION
$( document ).ready(function() {
 
     $("#shoot").click(function(){
        // Gobal Variables
 // true and true  ==
 // false and true !==
 // true and false ==!
 //
        
        
          var userChoice = [];
          
          var winner ="";
          
          var choices = ["rock","paper","scissors"];
          
          var computerChoice = Math.ceil( (Math.random()*3) - 1);
          
          var inputValues = $("#input").val();
         // console.logs
         $("userChoice").push(inputValues);
         
          console.log(inputValues);
          
          console.log(computerChoice);
         
           console.log(userChoice);
           
          
        
              $("#move").html($("#input").val()); 
        
        
                 $("#mb_move").html(choices[computerChoice]);
            
 
                $("#mb_move").html(choices[computerChoice]);
            
          
                $("#mb_move").html(choices[computerChoice]);
             
        
      // comparing computer Choices and user choice
     if((inputValues === choices[0]) && (computerChoice === choices[2])){ 
         $("#text").html("You Lost");
         $("#IMG").attr("src","https://res.cloudinary.com/teepublic/image/private/s--EMbCISXN--/t_Preview/b_rgb:ffffff,c_limit,f_jpg,h_630,q_90,w_630/v1503238730/production/designs/1837617_0.jpg");
    
   }
      
    
      
         });
         
});