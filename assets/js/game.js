const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-txt'))
const scoreText = document.querySelector('#score')


let currentQuestion = {}
let Answers = true
let score = 0
let availableQuestions = []

let questions = [
    {
        question:'What is the capital of Finland?',
        option1: 'Paris',
        option2: 'London',
        option3: 'Helsinki',
        option4: 'Stockholm',

        answer: 'Helsinki'
    },
    {
        question:'Which five colours make up the Olympic rings?',
        option1: 'blue,yellow,black,green,red',
        option2: 'red,orange,pink,white,purple',
        option3: 'red,red,red,red,red',
        option4: 'black,green,orange,purple,grey',

        answer: 'blue,yellow,black,green,red'
    },
    {
        question:'Who painted the Mona Lisa?',
        option1: 'Leonardo DiCaprio',
        option2: 'Albert Einstein',
        option3: 'Charles Darwin',
        option4: 'Leonardo da Vinci',

        answer: 'Leonardo da Vinci'
    },
    {
        question:'Which planet is closest to the sun?',
        option1: 'Earth',
        option2: 'Jupiter',
        option3: 'Moon',
        option4: 'Mercury',

        answer: 'Mercury'
    },
    {
        question:'How many elements are there in the periodic table?',
        option1: '118',
        option2: '120',
        option3: '52',
        option4: '99',

        answer: '118'
    },
    {
        question:'Which country\'s rugby team is known as The Springboks?',
        option1: 'Paris',
        option2: 'London',
        option3: 'Helsinki',
        option4: 'Stockholm',

        answer: 'Helsinki'
    },
    {
        question:'What is the capital of Finland?',
        option1: 'India',
        option2: 'USA',
        option3: 'South Africa\'s',
        option4: 'Australia',

        answer: 'South Africa\'s'
    },
    {
        question: 'What is the smallest country in the world?',
        option1: 'Japan',
        option2: 'Canada',
        option3: 'Argentina',
        option4: 'Spain',

        answer: 'Vatican City'
    },
    {
        question:'What was the most streamed show on Netflix in 2020',
        option1: 'The Umbrella Academy season 2',
        option2: 'American Pie',
        option3: 'Squid Game',
        option4: 'Demon Slayer',

        answer: 'The Umbrella Academy season 2'
    },
    {
        question:'In what franchise would you find the character Katniss Everdeen?',
        option1: 'The Maze Runner',
        option2: 'Game of Thrones',
        option3: 'The hunger Games',
        option4: 'The Cycle',

        answer: 'The hunger Games'
    }

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

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()




