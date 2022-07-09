
const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const finalScore = document.querySelector('#finalScore')
const recentScore = document.querySelector('#recentScore')


const highscores = JSON.parse(localStorage.getItem('highscores')) || []

const Max_High_Scores = 5

finalScore.innerText = recentScore

username.addEventListener('keyup', () => {
    saveScoreBtn.disabled = !username.value
} )

saveHighScore = e => {
    e.preventDefault()

    const score = {
        score: recentScore,
        name: username.value
    }

    highscores.push(score)

    highscores.sort((a,b) => {
        return b.score - a.score

    })

    highscores.splice(5)


    localStorage.setItem('highscores', JSON.stringify(highscores)) 
    
      window.location.assign('/')
    }
