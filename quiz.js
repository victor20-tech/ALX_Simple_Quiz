//Access Element
const feedbackElement = document.getElementById("feedback");
const submitAnswer = document.getElementById("submit-answer");


//declaring checkAnswer function
function checkAnswer() {
    //declare the corrrect answer variable
    const correctAnswer = "4";
    
    //Access value of the selected answer
    let selectedRadioInput = document.querySelector('input[name="quiz"]:checked');
        
        //Retrieve the user's answer
        if(selectedRadioInput){
            const userAnswer = userAnswer.value;
            //Compare user's answer with the correct answer
            if(userAnswer === correctAnswer){
                feedbackElement.textContent = "Correct! Well done.";
            } else {
                feedbackElement.textContent = "That's incorrect. Try again!";
            }
        } else {
            //No answer selected
            feedbackElement.textContent = "Please select an answer.";
        }

    } 

    //Add Event Listener to the submit button
    submitAnswer.addEventListener("click", checkAnswer);
