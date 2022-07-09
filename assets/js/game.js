const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-txt'))
const scoreText = document.querySelector('#score')


let currentQuestion = {}
let Answers = true
let score = 0
let availableQuestion = []

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
    getNewQuestions{}
}

