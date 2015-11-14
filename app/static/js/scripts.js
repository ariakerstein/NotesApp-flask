// alert("test")


$( document ).ready(function() {
$('button').on('click', function() {
var message = $('#flowNow').val().substring();
//   $('<span><h2>Here is what you are working on!</h2></span>');
  $('#flowNow').remove();
  // $('#hiddenDiv2').append('<h2>In progress: </h2>' + message);
//   $('.flowNow').remove('#time');
//   $('button').remove();
 
  
});
});

//timer function
$('#startButton').on('click', function() {
// var message = $('#flowNow').val().substring();
function startTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.text(minutes + ":" + seconds);

        if (--timer < 0) {
            timer = alert("Great job! You're done");
        }
    }, 1000);
}

$(function ($) {
    var twentyFiveMinutes = 60 * 25,
        display = $('#time');
    startTimer(twentyFiveMinutes, display);
});
});


//New as of July 2015 - based on http://codepen.io/anon/pen/pJammE

// function _timer(callback)
// {
//     var time = 25;     //  The default time of the timer
//     var mode = 0;     //    Mode: count up or count down
//     var status = 0;    //    Status: timer is running or stoped
//     var timer_id;    //    This is used by setInterval function
    
//     // this will start the timer ex. start the timer with 1 second interval timer.start(1000) 
//     this.start = function(interval)
//     {
//         interval = (typeof(interval) !== 'undefined') ? interval : 1000;
 
//         if(status == 0)
//         {
//             status = 1;
//             timer_id = setInterval(function()
//             {
//                 switch(mode)
//                 {
//                     default:
//                     if(time)
//                     {
//                         time--;
//                         generateTime();
//                         if(typeof(callback) === 'function') callback(time);
//                     }
//                     break;
                    
//                     case 1:
//                     if(time < 86400)
//                     {
//                         time++;
//                         generateTime();
//                         if(typeof(callback) === 'function') callback(time);
//                     }
//                     break;
//                 }
//             }, interval);
//         }
//     }
    
//     //  Same as the name, this will stop or pause the timer ex. timer.stop()
//     this.stop =  function()
//     {
//         if(status == 1)
//         {
//             status = 0;
//             clearInterval(timer_id);
//         }
//     }
    
//     // Reset the timer to zero or reset it to your own custom time ex. reset to zero second timer.reset(0)
//     this.reset =  function(sec)
//     {
//         sec = (typeof(sec) !== 'undefined') ? sec : 0;
//         time = sec;
//         generateTime(time);
//     }
    
//     // Change the mode of the timer, count-up (1) or countdown (0)
//     this.mode = function(tmode)
//     {
//         mode = tmode;
//     }
    
//     // This methode return the current value of the timer
//     this.getTime = function()
//     {
//         return time;
//     }
    
//     // This methode return the current mode of the timer count-up (1) or countdown (0)
//     this.getMode = function()
//     {
//         return mode;
//     }
    
//     // This methode return the status of the timer running (1) or stoped (1)
//     this.getStatus
//     {
//         return status;
//     }
    
//     // This methode will render the time variable to hour:minute:second format
//     function generateTime()
//     {
//         var second = time % 60;
//         var minute = Math.floor(time / 60) % 60;
//         var hour = Math.floor(time / 3600) % 60;
        
//         second = (second < 10) ? '0'+second : second;
//         minute = (minute < 10) ? '0'+minute : minute;
//         hour = (hour < 10) ? '0'+hour : hour;
        
//         $('div.timer span.second').html(second);
//         $('div.timer span.minute').html(minute);
//         $('div.timer span.hour').html(hour);
//     }
// }
 
// // example use
// var timer;
 
// $(document).ready(function(e) 
// {
//     timer = new _timer
//     (
//         function(time)
//         {
//             if(time == 0)
//             {
//                 timer.stop();
//                 alert('time out');
//             }
//         }
//     );
//     timer.reset(0);
//     timer.mode(0);
// });

// $( "#target" ).submit(function( event ) {
//   var message = $('<span><h2>test copy for dynamic div!</h2></span>');
// $('#hiddenDiv').append(message);
//   event.preventDefault();
// });

// function timer()
// {
//   count=count-1;
//   if (count <= 0)
//   {
//      clearInterval(counter);
//      return;
//   }

//  document.getElementById("timer").innerHTML=count + " secs"; // watch for spelling
// }
// <!-- javascript tutorial -->




// var shoppingList = [
// 	'carrots', 
// 	'oranges',
// 	]

// console.log(shoppingList[0]);

// var html = '';

// for ( var i = 1; i <= 10; i += 1) {
// 	html += <'div>' + i + '</div';
// }
// document.write(html);



// var upper = 10000;
// var randomNumber = getRandomNumber(upper);
// var attempts = 0;

// function getRandomNumber(upper) {
//     return Math.floor( Math.random() * upper ) + 1;
// }

// while ( guess !== randomNumber ) {
// 	guess = getRandomNumber( upper );
// 	attempts += 1;
// }
// document.write("<p>The random number was: " + rnadomNumber + "<p>");
// document.write("<p>It took the computer: " + " attempts to get it right.</p>");


// do while example
// var randomNumber = getRandomNumber(upper);
// var guess;
// var guessCount = 0;
// var correctGuess = false;

// function getRandomNumber( upper ) {
// 	var num = Math.floor(Math.random() * upper) + 1;
// 	return num;
// // }

// do {
// 	guess = prompt('I am thinking of a number between 1 and 10. What is it?');
// 	guessCount += 1;
// 	if (parseInt(guess) === randomNumber) {
// 			correctGuess = true;
// 	}
// } while ( ! correctGuess)
// document.write('<h1>You guessed the number!</h1>');
// document.write('It took you ' + guessCount + ' tries' + randomNumber);


// while ( guessCount < 10 ) {
// 	guess = prompt('I am thinking of a number between 1 and 10. What is it?');
// 	guessCount += 1;
// 	if (parseInt(guess) === randomNumber) {
// 			correctGuess = true;
// 	break
// 	}
// } 
// if (correctGuess) {
// document.write('<h1>You guessed the number!</h1>');
// document.write('It took you ' + guessCount + ' tries' + randomNumber);
// }


// // // Calculate quarters remaining in life:
// // // var currentAge = 38;
// // // var lifeExpectancy = 
// // // var remaining = 

// // // var counter = 0;
// // // while ( counter < 100) {
// //     var randNum = randomNumber(6);
// //     document.write(randNum + ' ');
// //     counter += 1;
// // }

// for (var i = 0; i < 10; i +=1 ){
// 	document.write( counter );
// }



// if () {
//     alert( "Hey I know you")
// }

// while () {
    
// }



// $('#exampleModal').on('show.bs.modal', function (event) {
//   var button = $(event.relatedTarget) // Button that triggered the modal
//   var recipient = button.data('whatever') // Extract info from data-* attributes
//   // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
//   // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
//   var modal = $(this)
//   modal.find('.modal-title').text('New message to ' + recipient)
//   modal.find('.modal-body input').val(recipient)
// })


// $("#exampleModal").submit(function(){
//  alert("i've submitted this form");
// });


// var html = '';

// for ( var i = 1; i <= 10; i += 1) {
// 	html += <'div>' + i + '</div';
// }
// document.write(html);



// var upper = 10000;
// var randomNumber = getRandomNumber(upper);
// var attempts = 0;

// function getRandomNumber(upper) {
//     return Math.floor( Math.random() * upper ) + 1;
// }

// while ( guess !== randomNumber ) {
// 	guess = getRandomNumber( upper );
// 	attempts += 1;
// }
// document.write("<p>The random number was: " + rnadomNumber + "<p>");
// document.write("<p>It took the computer: " + " attempts to get it right.</p>");


// do while example
// var randomNumber = getRandomNumber(upper);
// var guess;
// var guessCount = 0;
// var correctGuess = false;

// function getRandomNumber( upper ) {
// 	var num = Math.floor(Math.random() * upper) + 1;
// 	return num;
// }

// do {
// 	guess = prompt('I am thinking of a number between 1 and 10. What is it?');
// 	guessCount += 1;
// 	if (parseInt(guess) === randomNumber) {
// 			correctGuess = true;
// 	}
// } while ( ! correctGuess)
// document.write('<h1>You guessed the number!</h1>');
// document.write('It took you ' + guessCount + ' tries' + randomNumber);

// // Calculate quarters remaining in life:
// // var currentAge = 38;
// // var lifeExpectancy = 
// // var remaining = 

// // var counter = 0;
// // while ( counter < 100) {
// //     var randNum = randomNumber(6);
// //     document.write(randNum + ' ');
// //     counter += 1;
// // }

// for (var i = 0; i < 10; i +=1 ){
// 	document.write( counter );
// }



// if () {
//     alert( "Hey I know you")
// }

// while () {
    
// }
