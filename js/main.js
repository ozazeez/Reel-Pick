// https://sampleapis.com/api-list/movies
let getInfo = document.querySelector('button').addEventListener('click', getCaptital)
function getCaptital() {
    let getGenre = document.querySelector('input')
    let genre = getGenre.value
    let randomNum0 = Math.floor(Math.random() * 10) + 1;
    let randomNum1 = Math.floor(Math.random() * 10) + 11;
    let randomNum2 = Math.floor(Math.random() * 10) + 21;

    fetch(`https://api.sampleapis.com/movies/${genre}`)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            document.querySelector('#movie1img').src = data[randomNum0].posterURL
            document.querySelector('#movie1').innerText = `${'Movie Title: ' + data[randomNum0].title}`
            document.querySelector('#movie2img').src = data[randomNum1].posterURL
            document.querySelector('#movie2').innerText = `${'Movie Title: ' + data[randomNum1].title}`
            document.querySelector('#movie3img').src = data[randomNum2].posterURL
            document.querySelector('#movie3').innerText = `${'Movie Title: ' + data[randomNum2].title}`
        })
        .catch(err => {
            console.log(`error ${err}`)
            })
}
