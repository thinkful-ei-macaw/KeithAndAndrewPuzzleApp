'use strict';

// starting page
function pageBegin() {
  $('main').html(`<form id="quiz-form">
    <fieldset> <legend>Hello. Do you want to begin?</legend>

    <input type="radio" id="YES" name="YES">
    <label for="YES">YES</label><br/>
    <button type="submit">Start</button>
            
    </fieldset>`);
}

$(pageBegin);


// see that they hit the button and then actually start it
function startQuiz() {
  $('main').submit( event => {
    event.preventDefault();
    renderQuestion();
  }); 
}
$(startQuiz);

// render the question output after the user clicks submit to being quiz
function renderQuestion() {
  console.log('Is this even working?');
$('main').html(`<form>
<fieldset> <legend>Quiz Questions</legend>

<input type="radio" id="Choice1" name="Placeholder">
<label for="Choice1">Choice1</label><br/>

<input type="radio" id="Choice2" name="Placeholder">
<label for="Choice2">Choice2</label><br/>

<input type="radio" id="Choice3" name="Placeholder">
<label for="Choice3">Choice3</label>

<button type="submit">Submit</button>
</fieldset>
</form>`
  );}

$(renderQuestion);


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