const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-txt'))
const scoreText = document.querySelector('#score')


let currentQuestion = {}
let Answers = true
let score = 0
let availableQuestions = []

let questions = [
    {
        question:'Which five colours make up the Olympic rings?',
        option1: 'blue,yellow,black,green,red',
        option2: 'red,orange,pink,white,purple',
        option3: 'red,red,red,red,red',
        option4: 'black,green,orange,purple,grey',

        answer: 1,
    },
    {
        question:'Who painted the Mona Lisa?',
        option1: 'Leonardo DiCaprio',
        option2: 'Albert Einstein',
        option3: 'Charles Darwin',
        option4: 'Leonardo da Vinci',

        answer: 4,
    },
    {
        question:'Which Planet is closest to the sun?',
        option1: 'Earth',
        option2: 'Jupiter',
        option3: 'Moon',
        option4: 'Mercury',

        answer: 4,
    },
    {
        question:'How many elements are there in the periodic table?',
        option1: '118',
        option2: '120',
        option3: '52',
        option4: '99',

        answer: 1,
    },
    {
        question:'How many valves does the heart have?',
        option1: '4',
        option2: '12',
        option3: '5',
        option4: '9',

        answer: 1,
    },
    {
        question:'Which country\'s rugby team is known as The Springboks?',
        option1: 'India',
        option2: 'USA',
        option3: 'South Africa\'s',
        option4: 'Australia',

        answer: 3,
    },
    {
        question: 'What is the smallest country in the world?',
        option1: 'Japan',
        option2: 'Vatican City',
        option3: 'Argentina',
        option4: 'Spain',

        answer: 2,
    },
    {
        question:'What was the most streamed show on Netflix in 2020',
        option1: 'The Umbrella Academy season 2',
        option2: 'American Pie',
        option3: 'Squid Game',
        option4: 'Demon Slayer',

        answer: 1,
    },
    {
        question:'In what franchise would you find the character Katniss Everdeen?',
        option1: 'The Maze Runner',
        option2: 'Game of Thrones',
        option3: 'The Hunger Games',
        option4: 'The Cycle',

        answer: 3,
    },
    {
        question:'What is the capital of Finland?',
        option1: 'Paris',
        option2: 'London',
        option3: 'Helsinki',
        option4: 'Stockholm',

        answer: 3,
    }

]

const Score_Points = 100
const Max_Questions = 10

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions] 
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > Max_Questions) {
        localStorage.setItem('newestScore', score)

        return window.location.assign('/endScreen.html')
    }

const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
currentQuestion = availableQuestions[questionsIndex]
question.innerText = currentQuestion.question

choices.forEach(option => {
    const number = option.dataset['number']
    option.innerText = currentQuestion['option' + number]
})

availableQuestions.splice(questionsIndex, 1)

Answers = true 
}

choices.forEach(option => {
    option.addEventListener('click', e => {
        if(!Answers) return

        Answers = false
        const selectedOption = e.target
        const selectedAnswer = selectedOption.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(Score_Points)
        }
        selectedOption.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedOption.parentElement.classList.remove(classToApply)
            getNewQuestion()
        }, 100)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()




