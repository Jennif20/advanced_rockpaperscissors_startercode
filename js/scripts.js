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
        
        
          var userChoice = "";
          
          var winner ="";
          
          var choices = ["rock","paper","scissors"];
          
          var computerChoice =""
          
          var randomIndex = Math.floor(Math.random()*choices.length);
          computerChoice =choices[randomIndex];
        userChoice = $("#input").val();
         
          
          
           console.log(userChoice);
           console.log(computerChoice);
         
          
        
              $("#move").html($("#input").val()); 
        
        
                 $("#cmove").html(computerChoice);
            
 
                $("#cmove").html(computerChoice);
            
          
                $("#cmove").html(computerChoice);
             
             
        
   // comparing computer Choices and user choice
     // computer wins
        //  Rock vs paper
     if((userChoice === choices[0]) && (computerChoice === choices[1])){ 
         $("#text").html("You Lost, Computer Wins");
         $("#IMG").attr("src","https://iwsmt-content-ok2nbdvvyp8jbrhdp.stackpathdns.com/November-19-2011-23-56-17-damnthatswhackAcrushingdefeat.gif");
      }
     //Paper Vs scissors
    else if((userChoice === choices[1]) && (computerChoice === choices[2])){
        $("#text").html("You Lost, Computer Wins");
        $("#IMG").attr("src","https://cdn.xl.thumbs.canstockphoto.com/rock-paper-scissors-image_csp21302477.jpg");
      
     }
    // scissors Vs Rock
   else if((userChoice === choices[2]) && (computerChoice === choices[0])){
         $("#text").html("You Lost, Computer Wins");
         $("#IMG").attr("src","https://beardeertshirt.files.wordpress.com/2011/09/rock-paper-scissors-shirt.jpg?w=300&h=300");
   }
   
   
   
    // Users wins
    //paper Vs rock
    else if((userChoice === choices[1]) && (computerChoice === choices[0])){
       $("#text").html("You win");
        $("#IMG").attr("src","https://iwsmt-content-ok2nbdvvyp8jbrhdp.stackpathdns.com/November-19-2011-23-56-17-damnthatswhackAcrushingdefeat.gif");
    }
    //scissors Vs paper
    else if((userChoice === choices[2]) && (computerChoice ===choices[1])){
       $("#text").html("You win");
       $("#IMG").attr("src","https://cdn.xl.thumbs.canstockphoto.com/rock-paper-scissors-image_csp21302477.jpg");
    }
    //rock vs scissors
    else if((userChoice === choices[0]) && (computerChoice === choices[2] )){
         $("#text").html("You win");
         $("#IMG").attr("src","https://beardeertshirt.files.wordpress.com/2011/09/rock-paper-scissors-shirt.jpg?w=300&h=300");

     }
     // ties
     // rock VS rock
     else if ((userChoice === choices[0]) && (computerChoice === choices[0])){
         
        $("#text").html("Its a tie try again.");
        $("#IMG").attr("src","http://www.thydemonsbescribblin.com/uploads/2/9/2/8/29282825/5895759_orig.jpg?521");
     }
     //paper vs paper
     else if ((userChoice === choices[1]) && (computerChoice === choices[1])){
         $("#text").html("its a tie try again!");
         $("#IMG").attr("src","http://www.thydemonsbescribblin.com/uploads/2/9/2/8/29282825/5895759_orig.jpg?521");
     }
     //scissors vs scissors
    else if ((userChoice === choices[2] ) && (computerChoice === choices[2])){
        $("#text").html("Its a tie try again. :(");
        $("#IMG").attr("src","http://www.thydemonsbescribblin.com/uploads/2/9/2/8/29282825/5895759_orig.jpg?521");
    }
    
    
    
    
    
    
          
           
           
           
           
         });
         
});
