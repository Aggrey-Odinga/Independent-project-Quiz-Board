const quizData = [{
        question: "JavaScript File Has An Extension of?",
        a: ".java",
        b: ".js",
        c: ".javascript",
        d: ".xml",
        correct: "b",
    },
    {
        question: "Inside which HTML element do we put the JavaScript?",
        a: "Js",
        b: "JavaScript",
        c: "Script",
        d: "Scripting",
        correct: "b",
    },
    {
        question: "If Button is clicked .......Event Handler is invoked",
        a: "OnSubmit()",
        b: "OnLoad()",
        c: "IsPostBack()",
        d: "Onclick()",
        correct: "d",

    },
    {
        question: "Method Prompt() Contain ........Number of Parameters",
        a: "One",
        b: "Two",
        c: "Three",
        d: "Zero",
        correct: "b",

    },
];

const quiz = document.getElementById('quiz')
const answerE1s = document.querySelectorAll('answer')
const questionE1 = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionE1.innerText = currentQuiz.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function deselectAnswers() {
    answerE1s.forEach(answerE1s => answerE1s.checked = false)
}



