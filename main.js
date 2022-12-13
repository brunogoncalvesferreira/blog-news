import "./src/styles/global.css"
import "./src/styles/main.css"

const API = {
  link: "https://api.nytimes.com/svc/topstories/v2/world.json?api-key=",
  API_KEY: "jcuQiLGAM7b519A4sBm5hYmJ5yQhOcJK",
}
const posts = document.querySelector(".group-post")

fetch(API.link + API.API_KEY)
  .then((response) => response.json())
  .then((data) =>
    data.results.map(
      (articles) =>
        (posts.innerHTML += `
    <div class="post">
        <img src=${articles.multimedia[0].url} />
        <h2>${articles.title}</h2>
        <p>
          ${articles.abstract}
        </p>
        <a href=${articles.url} target="_blank">Leia mais <i class="ph-arrow-circle-right"></i></a>
    </div>
`)
    )
  )
