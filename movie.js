const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1";
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="';

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getMoives(API_URL);

async function getMoives(url) {
    const res = await fetch(url);
    const data = await res.json();



    showMovies(data.results);
}

function showMovies(movies) {
    main.innerHTML = "";

    movies.forEach((movie) => {
        const { title, poster_path, vote_average, overview } = movie;

        const movieEl = document.createElement("div");
        movieEl.classList.add("movie");

        movieEl.innerHTML = `<img src="${IMG_PATH + poster_path}" alt="${title}"/>
        <div class="movie-info">
            <h3> ${title} </h3> 
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>Overview</h3>
           ${overview}
        </div>`

        main.appendChild(movieEl);
    })
}

function getClassByRate(vote) {
    if (vote >= 8)
        return "green";
    else if (vote >= 5)
        return "orange";
    else
        return "red";
}

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const searchTerm = search.value;

    if (searchTerm && searchTerm !== "") {
        getMoives(SEARCH_API + searchTerm);

        search.value = "";
    } else {
        window.location.reload();
    }
});
/////////////////////////////////////////////////////////////////modal window
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
    e.preventDefault();
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function (e) {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key == 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});


//////////////////////////////////clear modal

const pop = document.querySelector('.pop');
const back = document.querySelector('.back');
const closeBtn = document.querySelector('.btn--close-pop');
const openBtn = document.querySelector('.btn');
const modalForm = document.querySelector(".modal__form");

const openPop = function (e) {
    e.preventDefault();
    pop.classList.remove('clear');
    back.classList.remove('clear');
};

const closePop = function () {
    pop.classList.add('clear');
    back.classList.add('clear');
}
const resetForm = function () {
    modalForm.reset();
}
openBtn.addEventListener('click', openPop);
openBtn.addEventListener('click', closeModal);
openBtn.addEventListener('click', resetForm);


closeBtn.addEventListener('click', closePop);
back.addEventListener('click', closePop);
document.addEventListener('keydown', function (e) {
    if (e.key == 'Escape' && !pop.classList.contains('clear')) {
        closePop();
    }
});

/////////////////////로그인 조건
const fn = document.querySelector("#fn");
const ln = document.querySelector("#ln");
const em = document.querySelector("#mail");


const isActiveLogin = () => {
    let fnValue = fn.value;
    let lnValue = ln.value;
    let emValue = em.value;

    if (
        (fnValue && lnValue) && (emValue.includes("@"))
    ) {
        openBtn.disabled = false;
        openBtn.style.opacity = 1;
        openBtn.style.cursor = "pointer";
    }
    else {
        openBtn.style.opacity = .3;
        openBtn.disabled = true;

    }
}
const init = () => {
    fn.addEventListener("input", isActiveLogin);
    ln.addEventListener("input", isActiveLogin);
    em.addEventListener("input", isActiveLogin);
    fn.addEventListener("keyup", isActiveLogin);
    ln.addEventListener("keyup", isActiveLogin);
    em.addEventListener("keyup", isActiveLogin);
}
init();


