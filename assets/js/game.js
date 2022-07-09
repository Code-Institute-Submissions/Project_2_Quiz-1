const question = document.querySelector('#question')
const choices = Array.from(document.querySelectorAll('.choice-txt'))
const scoreText = document.querySelector('#score')


let currentQuestion = {}
let Answers = true
let score = 0
let availableQuestion = []

