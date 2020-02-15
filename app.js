'use strict';

const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Question 1',
      answers: [
        'Choice 1',
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
  $('header').html(`<h1>This is the message to begin.  Plz Click.  Thnx.</h1>`);
  $('main').html(`
    <button id="start" type="submit">Start</button>`);
}

$(pageBegin)

// see that they hit the button and then actually start it
function startQuiz() {
  $('#start').on("click", ( event => {
    event.preventDefault();
    store.score = 0;
    store.questionNumber = 0;
    renderQuestion();
    $('header').html(`<h1>You are now taking the quiz</h1><br/>
    <p>You current score ${store.score} out of 5</p><br/>
    <p>You are currently answering question number ${(store.questionNumber) + 1}</p>`);
  }));
  getAnswerAndCompare() 
}
$(startQuiz) 

// render the question output after the user clicks submit to being quiz

function renderQuestion() {
  console.log('Is this even working?');
  $('main').html(`<form>
<fieldset> <legend>${currentQuestion()}</legend>
<input type="radio" id="Choice1" name="Choice" value="${store.questions[store.questionNumber].answers[0]}">
<label for="Choice1">${store.questions[store.questionNumber].answers[0]}</label><br/>
<input type="radio" id="Choice2" name="Choice" value="${store.questions[store.questionNumber].answers[1]}">
<label for="Choice2">${store.questions[store.questionNumber].answers[1]}</label><br/>
<input type="radio" id="Choice3" name="Choice" value="${store.questions[store.questionNumber].answers[2]}">
<label for="Choice3">${store.questions[store.questionNumber].answers[2]}</label><br/>
<input type="radio" id="Choice4" name="Choice" value="${store.questions[store.questionNumber].answers[3]}">
<label for="Choice4">${store.questions[store.questionNumber].answers[3]}</label><br/>
<button id="abc" type="submit">Submit</button>
</fieldset>
</form>`
  );}

function getAnswerAndCompare() {
  $('#abc').on('click', ( event => {
    
    event.preventDefault();
      
    const correct = store.questions[store.questionNumber].correctAnswer; 
    console.log(correct);
  
    let selectedOption = $('input[name=Choice]:checked').val();
    console.log(selectedOption);

    if(selectedOption === correct) {
      getCorrectFeedback();
    } else {
      getWrongFeedback();

  };
}));

function getCorrectFeedback() {
  if(store.questionNumber < 5) {
    store.questionNumber++;
    $('main').html(`
    <p>Well howdy doo, you got it right.  Continue on yer way, partner.  Here's a button to push that I haven't made yet.</p>
    <button type="submit" name="nextUp">Nice!</button>`)
  } else {
    $('main').html(`
    <p>Well howdy doo, you got it right.  Continue on yer way, partner.  Here's a button to push that I haven't made yet.</p>
    <button type="submit" name="finished">Finish Quiz yea boiii</button>`)
  }
 
  store.score++;
}

function getWrongFeedback() {
  if(store.questionNumber < 5) {
    store.questionNumber++;
  $('main').html(`
    <p>Yikes.  You selected ${selectedOption} while the correct answer was ${correct}.  You should spend some time to reflect, and then click this button when you can live with yourself again.</p>
    <button type="submit" name="nextUp">I won't give up! I want to live!</button>`)
  } else {
    $('main').html(`
    <p>Yikes.  You selected ${selectedOption} while the correct answer was ${correct}.  You should spend some time to reflect, and then click this button when you can live with yourself again.</p>
    <button type="submit" name="finished">I won't give up! I want to live!</button>`)
  }
};

function nextQuestion() {
  $('#nextUp').on('click', ( event => {
    event.preventDefault();
    renderQuestion();
  }))
}

function endQuiz() {
  $('#finished').on('click', ( event => {
    event.preventDefault();
    $('header').html(`<h1>Congrats! You've finished!!</h1><br/>
    <p>You scored a ${store.score} out of 5</p><br/>
    <p>Would you like to retake the quiz?</p><br/>
    <button type="submit" name="start">CLICK HERE!</button>
    `)
  }))
}

// if(store.questionNumber < 5) {} else {}



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