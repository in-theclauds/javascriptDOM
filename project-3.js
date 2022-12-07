// variables

const accordion = document.getElementsByClassName('content-container');

// throwing all content inside of "content-container" in the accordoin variable then looping through the variable which will then add an event listener to all of our content container classes and inside of the function we are referecing an object that is calling the function. Adding toggle method.

for (i = 0; i < accordion.length; i++) {

    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active');
    })

};