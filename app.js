'use strict';

const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What type of plane did the survivors arrive on The Island with?',
      answers: [
        'Boeing 777',
        'The Fortnight Battle Bus',
        'The Concord',
        'The Judge Dread Jet Pack'
      ],
      correctAnswer: 'Boeing 777'
    },
    {
      question: 'What are the numbers used in the Valenzetti Equation?',
      answers: [
        'Pi and 42',
        '4 8 15 16 23 42',
        '1 Fish 2 Fish Red Fish Blue Fish',
        '1 2 3'
      ],
      correctAnswer: '4 8 15 16 23 42'
    },
    {
      question: 'Which of the following characters did NOT arrive in Oceanic flight 815?',
      answers: [
        'Kate Austen',
        'Jack Shephard',
        'Hugo Reyes',
        'Desmond Hume'
      ],
      correctAnswer: 'Desmond Hume'
    },
    {
      question: 'What was the goal of the Dharma Initiative?',
      answers: [
        'A sick societal expiriment on humans',
        'Kill all of the Hostiles',
        'Manipulate any of the six factors of the Valenzetti Equation to stave off the end of humanity',
        'To do war against the Hanso Foundation'
      ],
      correctAnswer: 'Manipulate any of the six factors of the Valenzetti Equation to stave off the end of humanity'
    },
    {
      question: 'Who Kills Jacob?',
      answers: [
        'The Man In Black',
        'Hugo Reyes',
        'Richard Alpert',
        'Benjamin Linus'
      ],
      correctAnswer: 'Benjamin Linus'
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};




// starting page
function pageBegin() {
  console.log('render pageBegin()');
  $('header').html('<h1>Welcome to the Lost Quiz.  Enter, if you dare.</h1>');
  $('.first').html(`
    <button id="start" type="submit">Start</button>`);
}


// see that they hit the button and then actually start it
function startQuiz() {
  $('.first').on('click', '#start', ( event => {
    console.log('render startQuiz');
    event.preventDefault();
    store.score = 0;
    store.questionNumber = 0;
    renderQuestion();
    $('header').html(`<h1>You are now taking the quiz</h1><br/>
    <p>You current score ${store.score} out of 5</p><br/>
    <p>You are currently answering question number ${(store.questionNumber) + 1}</p>`);
  }));
  getAnswerAndCompare();
  nextQuestion();
  endQuiz();

}
$(startQuiz) 

// render the question output after the user clicks submit to being quiz

function renderQuestion() {
  console.log('renderQuestion()');
  $('main').html(`<form>
<fieldset> <legend>${store.questions[store.questionNumber].question}</legend>
<input type="radio" id="Choice1" name="Choice" value="${store.questions[store.questionNumber].answers[0]}">
<label for="Choice1">${store.questions[store.questionNumber].answers[0]}</label><br/>
<input type="radio" id="Choice2" name="Choice" value="${store.questions[store.questionNumber].answers[1]}">
<label for="Choice2">${store.questions[store.questionNumber].answers[1]}</label><br/>
<input type="radio" id="Choice3" name="Choice" value="${store.questions[store.questionNumber].answers[2]}">
<label for="Choice3">${store.questions[store.questionNumber].answers[2]}</label><br/>
<input type="radio" id="Choice4" name="Choice" value="${store.questions[store.questionNumber].answers[3]}">
<label for="Choice4">${store.questions[store.questionNumber].answers[3]}</label><br/>
<button id="abc">Submit</button>
</fieldset>
</form>`);}

function getAnswerAndCompare() {
  $('main').submit( event => {
    console.log('getAnswerAndCompare()');
    event.preventDefault();
      
    const correct = store.questions[store.questionNumber].correctAnswer; 
    console.log(correct);
  
    let selectedOption = $('input[name=Choice]:checked').val();
    console.log(selectedOption);

    if(selectedOption === correct) {
      getCorrectFeedback();
    } else {
      getWrongFeedback();

    }
  });
}

function getCorrectFeedback() {
  console.log('getCorrectFeedback()');
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
  console.log('render wrongFeedBack()');
  if(store.questionNumber < 5) {
    const correct = store.questions[store.questionNumber].correctAnswer; 
    let selectedOption = $('input[name=Choice]:checked').val();
    store.questionNumber++;
    
    $('.second').html(`
    <p>Yikes.  You selected ${selectedOption} while the correct answer was ${correct}.  You should spend some time to reflect, and then click this button when you can live with yourself again.</p>
    <button type="submit" name="nextUp">I won't give up! I want to live!</button>`)
  } else {
    $('.second').html(`
    <p>Yikes.  You selected ${selectedOption} while the correct answer was ${correct}.  You should spend some time to reflect, and then click this button when you can live with yourself again.</p>
    <button type="submit" name="finished">I won't give up! I want to live!</button>`)
  }
};

function nextQuestion() {
 
  $('main').submit( event => {
    console.log('render nextQuestion()')
    event.preventDefault();
    renderQuestion();
  })
}

function endQuiz() {
  
  $('#finished').on('click', ( event => {
    console.log('render endQuiz()');
    event.preventDefault();
    $('header').html(`<h1>Congrats! You've finished!!</h1><br/>
    <p>You scored a ${store.score} out of 5</p><br/>
    <p>Would you like to retake the quiz?</p><br/>
    <button type="submit" name="start">CLICK HERE!</button>
    `)
  }))
}

$(pageBegin)

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