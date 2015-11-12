// <!-- javascript tutorial -->

$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})

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

do {
	guess = prompt('I am thinking of a number between 1 and 10. What is it?');
	guessCount += 1;
	if (parseInt(guess) === randomNumber) {
			correctGuess = true;
	}
} while ( ! correctGuess)
document.write('<h1>You guessed the number!</h1>');
document.write('It took you ' + guessCount + ' tries' + randomNumber);

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
