//READY FUNCTION
$(document).ready(function() {

});

//STATE OBJECT
var state = {
  questionsAsked: [],
  score: []
}

var createQuestion = function(question, answer1, value1, answer2, value2, answer3, value3, answer4, value4) {
  $('.js-quiz-container').html(`
    <form class="js-quiz-form">
      <span class="js-question-span">${question}</span>
      <span><input type="radio" name="answer" value="${value1}">${answer1}</span></br>
      <span><input type="radio" name="answer" value="${value2}">${answer2}</span></br>
      <span><input type="radio" name="answer" value="${value3}">${answer3}</span></br>
      <span><input type="radio" name="answer" value="${value4}">${answer4}</span></br>
      <span class="js-buttons"><input type="submit" class="js-submit-answer-button" value="Submit">
      <input type="reset" class="js-restart-button" value="Restart"  onClick="window.location.reload()"></span>
    </form>
  `)
}

//EVENT LISTENERS
$('.js-begin-quiz-button').on('click',function(e){
  $('.js-begin-quiz-button').addClass('hidden');
  $('.js-quiz-container').removeClass('hidden')
  $('.js-score-container').removeClass('hidden')
  createQuestion('1.) Learning is defined as a change in behavior as a result of what?',
                  'Experience',1,
                  'Mistakes',0,
                  'Instruction',0,
                  'Confusion',0)
});
// $('.js-submit-answer-button').on('click',function(e){
//   $('.js-begin-quiz-button').addClass('hidden');
//   $('.js-quiz-container').removeClass('hidden')
// });
$('.js-quiz-container').submit(function(e){
  var answer = ($('input[name=answer]:checked').val())
  e.preventDefault();
  state.questionsAsked.push(1)
  console.log (state.questionsAsked.length)
  if (answer == 1) {
    state.score.push(1)
    $('.js-score').text('Current Score: ' + state.score.length + '/10')
    alert ('CORRECT!')
      }
  else {
    alert ("INCORRECT!")
  }
  for (var i = 0; i <= state.questionsAsked.length; i++) {
    console.log (i)
    if (i === 1) {
      createQuestion('2.) What are the four Levels of Learning?',
                      'Rote, Understanding, Application, Correlation',1,
                      'Rote, Understanding, Execution, Correlation',0,
                      'Rote, Confusion, Execution, Correlation',0,
                      'Memorization, Confusion, Execution, Correlation',0);
    }
    else if (i === 2) {
      createQuestion('3.) What are the first three laws of learning?',
                      'Primacy, Intensity, Recency',0,
                      'Exercise, Readiness, Effect',0,
                      'Readiness, Effect, Exercise',1,
                      'Readiness, Effect, Primacy',0);
    }
    else if (i === 3){
      createQuestion('4.) Who created the first three laws of learning?',
                      'L. Ron Hubbard',0,
                      'George R.R. Martin',0,
                      'J.K. Rowling',0,
                      'E.L. Thorndike',1);
    }
    else if (i === 4) {
      createQuestion('5.) What is the definition of primacy?',
                      'Things that are first learned are best remembered',1,
                      'The quality of being intense',0,
                      'The state of being fully prepared for something',0,
                      'The quality or state of being recent',0);
    }
    else if (i === 5) {
      createQuestion('6.) What is the first level of Maslows Hierarchy?',
                      'Self-Esteem',0,
                      'Physiological Needs',1,
                      'Safety',0,
                      'Love and Belonging',0);
    }
    else if (i === 6) {
      createQuestion('7.) What is the last level of Maslows Hierarchy of Human Needs?',
                      'Self-Actualization',1,
                      'Safety',0,
                      'Self-Esteem',0,
                      'Physiological',0);
    }
    else if (i === 7) {
      createQuestion('8.) What is the single greatest barrier to effective communication?',
                      'Overuse of Abstractions',0,
                      'Confusion between the symbol and symbolized object',0,
                      'Lack of common experience',1,
                      'Interference',0);
    }
    else if (i === 8) {
      createQuestion('9.) Which quote below describes the invulnerability hazardous attitude?',
                      'Dont tell me what to do',0,
                      'Do something, QUICK!',0,
                      'Whats the use?',0,
                      'It wont happen to me',1);
    }
    else if (i === 9) {
      createQuestion('10.) Which defense mechanism is defined as a refusal to accept external reality because it is too threatening?',
                       'Reaction Formation',0,
                       'Compensation',0,
                       'Projection',0,
                       'Denial',1);
    }
    else if (i === 10){
      alert ("ALL DONE! You got" + state.score.length + "/10 correct!")


    }
  }
 });
