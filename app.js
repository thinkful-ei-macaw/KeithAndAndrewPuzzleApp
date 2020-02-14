'use strict';

const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Question 1',
      answers: [
        'Bro you working?',
        'Choice 2',
        'Choice 3',
        'Choice 4'
      ],
      correctAnswer: 'Choice 1'
    },
    {
      question: 'Question 2',
      answers: [
        'Choice 1',
        'Choice 2',
        'Choice 3',
        'Choice 4'
      ],
      correctAnswer: 'Choice 1'
    },
    {
      question: 'Question 3',
      answers: [
        'Choice 1',
        'Choice 2',
        'Choice 3',
        'Choice 4'
      ],
      correctAnswer: 'Choice 1'
    },
    {
      question: 'Question 4',
      answers: [
        'Choice 1',
        'Choice 2',
        'Choice 3',
        'Choice 4'
      ],
      correctAnswer: 'Choice 1'
    },
    {
      question: 'Question 5',
      answers: [
        'Choice 1',
        'Choice 2',
        'Choice 3',
        'Choice 4'
      ],
      correctAnswer: 'Choice 1'
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};




// starting page
function pageBegin() {
  $('header').html(`<h1>This is the message to begin.  Plz Click.  Thnx.</h1>`)
  $('main').html(`
    <button type="submit">Start</button>`);
}

$(pageBegin);


// see that they hit the button and then actually start it
function startQuiz() {
  $('main').on("click", ( event => {
    event.preventDefault();
    renderQuestion();
  })); 
}
$(startQuiz);

function whatQuestionNumber() {
  // Object.entries(store).map(([questionNumber, value]) => [questionNumber, value + 1]);
  // console.log(`${store.questionNumber}`);
  // $('placeholder-button').on('click', (event => {
  //  event.preventDefault();
  //  store.questionNumber++;
  }))
}

function currentQuestion() {
  // Object.entries(store).map(([questionNumber, value]) => [questionNumber, value + 1]);
  // console.log(`${store.questionNumber}`);
  let questions = store.questions[store.questionNumber].question;
  console.log(questions);
  return questions;
}
$(currentQuestion);

// render the question output after the user clicks submit to being quiz

function renderQuestion() {
  console.log('Is this even working?');
$('main').html(`<form>
<fieldset> <legend>${currentQuestion()}</legend>

<input type="radio" id="Choice1" name="${store.questions[store.questionNumber].answers[0]}">
<label for="Choice1">${store.questions[store.questionNumber].answers[0]}</label><br/>

<input type="radio" id="Choice2" name="${store.questions[store.questionNumber].answers[1]}">
<label for="Choice2">${store.questions[store.questionNumber].answers[1]}</label><br/>

<input type="radio" id="Choice3" name="${store.questions[store.questionNumber].answers[2]}">
<label for="Choice3">${store.questions[store.questionNumber].answers[2]}</label><br/>

<input type="radio" id="Choice4" name="${store.questions[store.questionNumber].answers[3]}">
<label for="Choice4">${store.questions[store.questionNumber].answers[3]}</label><br/>

<button type="submit">Submit</button>
</fieldset>
</form>`
  );}

function getAnswerAndCompare() {
  
  const correct = store.questions[questionNumber].correctAnswer; 
  
  let selectedOption = $('input[=]:checked').val();

  if($())
  
  $('main').on('click', ( event => {
    event.preventDefault();

  }))
} 

/*
function renderFunctions() {
  function1()
  function2()
  function3()
  function4()
};

$(doTheThing);

*/

/**
 * Example store structure
 */

// const question1 = 

/* <form>
<fieldset> <legend>Quiz Questions</legend>

<input type="radio" id="Choice1" name="Placeholder">
<label for="Choice1">Choice1</label><br/>

<input type="radio" id="Choice2" name="Placeholder">
<label for="Choice2">Choice2</label><br/>

<input type="radio" id="Choice3" name="Placeholder">
<label for="Choice3">Choice3</label>
</fieldset>
</form> */

//to do the stuff when the page loads
// $(whateverTheLastOneIs)

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates 

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)