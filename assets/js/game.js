const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-txt'))
const scoreText = document.querySelector('#score')


let currentQuestion = {}
let Answers = true
let score = 0
let availableQuestions = []

let questions = [
    {
        question:'ques1?',
        option1: '1',
        option2: '2',
        option3: '3',
        option4: '4',
        answer: '3'
    },
]

const Score_Points = 100
const Max_Questions = 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions] 
    getNewQuestions()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > Max_Questions) {
        localStorage.setItem('newestScore', score)

        return window.location.assign('/end.html')
    }

const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
currentQuestion = availableQuestions[questionsIndex]
question.innerText = currentQuestion.question

choices.forEach(choice => {
    const number = choice.dataset['number']
    choice.innerText = currentQuestion['choice' + number]
})

availableQuestions.splice(questionsIndex, 1)

Answers = true 
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {
        if(!Answers) return

        Answers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(Score_Points)
        }
        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 100)
    })
})




