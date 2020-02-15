'use strict';

const store = {
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
  $('header').html('<h1>Welcome to the Lost Quiz.  Enter, if you dare.</h1>');
  $('main').html(`
    <button id="start" type="submit">Start</button>`);
}


// see that they hit the button and then actually start it
function startQuiz() {
  $('main').on('click', '#start', ( event => {
    event.preventDefault();
    renderQuestion();
    $('header').html(`<h1>You are now taking the quiz</h1><br/>`
    );
  }));
  getAnswerAndCompare();
  nextQuestion();
  endQuiz();

}
$(startQuiz) 

// render the question output after the user clicks submit to being quiz

function renderQuestion() {
  $('main').html(`<form>
You current score ${store.score} out of 5<br/>
You are currently answering question number ${(store.questionNumber) + 1}<br/><br/>
<fieldset> <legend>${store.questions[store.questionNumber].question}</legend>
<input type="radio" id="${store.questions[store.questionNumber].answers[0]}" name="Choice" value="${store.questions[store.questionNumber].answers[0]}">
<label for="Choice1">${store.questions[store.questionNumber].answers[0]}</label><br/>
<input type="radio" id="${store.questions[store.questionNumber].answers[1]}" name="Choice" value="${store.questions[store.questionNumber].answers[1]}">
<label for="Choice2">${store.questions[store.questionNumber].answers[1]}</label><br/>
<input type="radio" id="${store.questions[store.questionNumber].answers[2]}" name="Choice" value="${store.questions[store.questionNumber].answers[2]}">
<label for="Choice3">${store.questions[store.questionNumber].answers[2]}</label><br/>
<input type="radio" id="${store.questions[store.questionNumber].answers[3]}" name="Choice" value="${store.questions[store.questionNumber].answers[3]}">
<label for="Choice4">${store.questions[store.questionNumber].answers[3]}</label><br/>
<button id="submitForm">Submit</button>
</fieldset>
</form>`);}

function getAnswerAndCompare() {
  $('main').on('click', '#submitForm', event => {
    event.preventDefault();
      
    const correct = store.questions[store.questionNumber].correctAnswer; 
  
    let selectedOption = $('input[name=Choice]:checked').val();
  
    if (selectedOption === correct) {
      getCorrectFeedback();
    } 
    else if (selectedOption !== correct && selectedOption !== undefined){
      getWrongFeedback();
  }
    else {
      renderQuestion();
    }
  });
}

function getCorrectFeedback() {
  store.score++;
  store.questionNumber++;
  if(store.questionNumber < 5) {
    $('main').html(`
    <p>You current score ${store.score} out of 5</p><br/>
    <p>Well howdy doody, you got it right.  Continue on yer way, partner.</p>
    <button type="submit" id="nextUp">Next Question</button>`)
  } else {
    $('main').html(`
    <p>You current score ${store.score} out of 5</p><br/>
    <p>Well howdy doody, you got it right.  Continue on yer way, partner.</p>
    <button type="submit" id="finished">Finish Quiz</button>`)
  } 
}

function getWrongFeedback() {
  const correct = store.questions[store.questionNumber].correctAnswer; 
  let selectedOption = $('input[name=Choice]:checked').val();
  store.questionNumber++;
  if(store.questionNumber < 5) {
    
    $('main').html(`
    <p>You current score ${store.score} out of 5</p><br/>
    <p>Yikes.  You selected ${selectedOption} while the correct answer was ${correct}. Click Next Question below</p>
    <button type="submit" id="nextUp">Next Question</button>`)
  } else {
    $('main').html(`
    <p>You current score ${store.score} out of 5</p><br/>
    <p>Yikes.  You selected ${selectedOption} while the correct answer was ${correct}.  Click Next Question below</p>
    <button type="submit" id="finished">Finish Quiz</button>`)
  }
};

function nextQuestion() {
 
  $('main').on('click', '#nextUp', event => {
    event.preventDefault();
    renderQuestion();
  })
}

function endQuiz() {
  
  $('main').on('click', '#finished', ( event => {
    event.preventDefault();
    $('header').html(`<h1>Congrats! You've finished!!</h1><br/>`
    );
    $('main').html(`
    <p>You scored a ${store.score} out of 5</p><br/>
    <p>Would you like to retake the quiz?</p><br/>
    <button type="submit" id="start">CLICK HERE!</button>
    `)
    store.score = 0;
    store.questionNumber = 0;
  }))
};

$(pageBegin)