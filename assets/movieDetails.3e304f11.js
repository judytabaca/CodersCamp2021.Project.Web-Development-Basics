import"./style.3ebcdd82.js";import"./footer.645e5149.js";import{a as e}from"./vendor.a6cc7faa.js";const t=e.create({baseURL:"https://www.omdbapi.com/"});(async()=>{const{data:{Title:e,Runtime:i,Year:o,Genre:r,Poster:a,Plot:n,Ratings:c}}=await t.get(`?i=${sessionStorage.movieId}&apikey=46e8c41c`);document.querySelector(".movie-detail__title").innerText=e,document.querySelector(".movie-detail__image").src=a,document.querySelector(".movie-detail__info").innerText=`${o} | ${i} | ${r.split(",")[0]}`,document.querySelector(".movie-detail__description").innerText=n,document.querySelector(".movie-detail__imdb-rate").innerText=c[0].Value,document.querySelector(".movie-detail__tomatoes-rate").innerText=c[1].Value,document.querySelector(".movie-detail__metacritic-rate").innerText=c[2].Value})();
