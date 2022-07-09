const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-txt'))
const scoreText = document.querySelector('#score')


let currentQuestion = {}
let Answers = true
let score = 0
let availableQuestions = []

let questions = [
    {
        question:'ques1',
        option1: '1',
        option2: '2',
        option3: '3',
        option4: '4',
        Answer: '3'
    },
]

const Score_Points = 100
const Max_Questions = 10

startGame = () => {
    questionConter = 0
    score = 0
    availableQuestions = [...questions] 
    getNewQuestions()
}

getNewQuestions = () => {
    if(availableQuestions.lenght === 0 || questionsCounter > Max_Questions) {
        localStorage.setItem('newestScore', score)

        return window.location.assign('/end.html')
    }

const questionsIndex = MAth.floor(Math.random() * availableQuestions.lenght)
currentQuestion = availableQuestions[questionsIndex]
question.innerText = currentQuestion.question

choices.forEach(choice => {
    const number = choice.dataset ['number']
    choice.innerText = currentQuestion['choice' + number]
})

availableQuestions.splice(questionsIndex, 1)

acceptionAnswers = true
}


