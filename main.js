const button = document.querySelector("button")

const BASE_URL = "https://api.themoviedb.org/3/movie/"

const API_KEY = "api_key=829d09bfd7a0a1e933a2c3afe962728c"

const language = "language=pt-BR"

button.addEventListener("click", () => {
    findMovie()
})

function findMovie() {
    const movie_id = (Math.random() * 1000) + 1
    const url = `${ BASE_URL }${ movie_id }?${ API_KEY }&${ language }`
    axios.get(url).then(response => {
        const data = response.data
        const poster = JSON.stringify(data.poster_path)
        const urlPoster = "https://image.tmdb.org/t/p/w500"
        const title = JSON.stringify(data.title).slice(0, -1).substring(1)
        const description = JSON.stringify(data.overview).slice(0, -1).substring(1)
        if (poster != "" & description != "") {
            document.querySelector(".content-left").innerHTML = `
                <img src="${ urlPoster + data.poster_path }" alt="Poster do filme">
            `
            document.querySelector(".content-right").innerHTML = `
                <h2>
                    ${ title }
                </h2>
                <p>
                    ${ description }
                </p>
            `
        }
        console.log(response)
    }).catch(error => {
        document.querySelector(".content-left").innerHTML = `
            <img src="./assets/Poster.png" alt="Poster do filme">
        `
        document.querySelector(".content-right").innerHTML = `
            <h2>
                Ops, hoje não é dia de assistir filme. Bora codar! 🚀
            </h2>
            <p>
            </p>
        `
    })
}
