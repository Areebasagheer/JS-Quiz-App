var startButton = document.getElementById("btn-start");
var Welcome = document.getElementById("Welcome");
var quizScreen = document.getElementById("quiz-start");

startButton.addEventListener("click", startQuiz);

function startQuiz(){
    Welcome.style.display = "none";
    quizScreen.style.display = "flex"

}

var questions = [
    {
        question: 'Inside which HTML element do we put the JavaScript?',
        option1: '<scprit>',
        option2: '<javascript>',
        option3: '<js>',
        option4: '<scripting>',
        correctOption: '<script>',
    },
    {
        question: 'Where is the correct place to insert a JavaScript?',
        option1: 'The <head> section',
        option2: 'The <body> section',
        option3: 'Both the <head> and "body" section are correct',
        correctOption: 'The <body> section',
    },
    {
        question: 'What is the correct syntax for referring to an external script called "xxx.js"?',
        option1: '<scripr href="xxx.js">',
        option2: '<scripr name="xxx.js">',
        option3: '<scripr src="xxx.js">',
        correctOption: '<scripr src="xxx.js">',
    },
    {
        question: 'How do you write "Hello World" in an alert box?',
        option1: 'msg("Hello World");',
        option2: 'alert("Hello World");',
        option3: 'alertBox("Hello World");',
        option4: 'msgBox("Hello World");',
        correctOption: 'alert("Hello World");',
    },
    {
        question: 'How do you create a function in JavaScript?',
        option1: 'function = myFunction()',
        option2: 'function myFunction()',
        option3: 'function:myFunction()',
        correctOption: 'function myFunction()',
    },
    {
        question: "How can you detect the client's browser name?",
        option1: 'client.navName',
        option2: 'browser.name',
        option3: 'navigator.appName',
        correctOption: 'navigator.appName',
    },
    {
        question: 'How to write an IF statement for executing some code if "i" is NOT equal to 5?',
        option1: 'if =! 5 then',
        option2: 'if(i != 5)',
        option3: 'if i <> 5',
        option4: 'if(i <> 5)',
        correctOption: 'if(i != 5)',
    },
    {
        question: 'How does a WHILE loop start?',
        option1: 'while i = 1 to 10',
        option2: 'while (i <= 10; i++)',
        option3: 'while(i <= 10)',
        correctOption: 'while(i <= 10)',
    },
    {
        question: 'How does a FOR loop start?',
        option1: 'for (i = 0; i <= 5; i++)',
        option2: 'for (i <= 5; i++)',
        option3: 'for i = 1 to 5',
        option4: 'for (i = 0; i <= 5)',
        correctOption: 'for (i = 0; i <= 5; i++)',
    },
    {
        question: 'How can you add a comment in a JavaScript?',
        option1: '//This is a comment',
        option2: "'This is a comment",
        option3: '<!--This is a comment-->',
        correctOption: '//This is a comment',
    },
];

var ques = document.getElementById("ques");
var opt1 = document.getElementById("opt1");
var opt2 = document.getElementById("opt2");
var opt3 = document.getElementById("opt3");
var btn = document.getElementById("btn");
var index = 0;
var score = 0;
var totalQuestions = questions.length; 
var totalMarks = 10;
function nextQuestion() {
    var getOptions = document.getElementsByName("options");
    
    for (var i = 0; i < getOptions.length; i++) {
        if (getOptions[i].checked) {
            var selectedValue = getOptions[i].value;
            var selectedQues = questions[index - 1]['question']
            var selectedAns = questions[index - 1][`option${selectedValue}`]
            var correctOption = questions[index - 1]['correctOption'];
            
            if(selectedAns == correctOption){
               score++;
            }
        }
        getOptions[i].checked = false;
    }

    btn.disabled = true;

    if (index >= questions.length) {
        var percentage = Math.round((score / questions.length) * 100) 
        var marksObtained = Math.round((score / questions.length) * totalMarks); 

        Swal.fire({
          title: 'Quiz Completed!',
          html: `<b> Total Questions : ${totalQuestions} </b> <br>
                 <b> Correct Answers:</b> ${score} <br> 
                 <b>Percentage:</b> ${percentage}% <br> 
                 <b>Marks:</b> ${marksObtained} out of ${totalMarks}`,
          icon: 'success',
          confirmButtonText: 'OK'
        }).then(() => {
          index = 0;  
          score = 0; 
          nextQuestion(); 
        });
    } else {
        
        ques.innerText = `${index + 1}) ${questions[index]["question"]}`;
        opt1.innerText = questions[index].option1;
        opt2.innerText = questions[index].option2;
        opt3.innerText = questions[index].option3;
       
        index++;
    }
}

function clicked() {
    btn.disabled = false; 
}

nextQuestion();