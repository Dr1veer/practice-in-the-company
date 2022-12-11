"use strict";

let blur = document.querySelector('.container'),
    boxFilm = document.getElementsByClassName('film'),
    numberFilm,
    containerFils = document.getElementById('idContainer'),
    btnEditImg = document.getElementById('btnEditImg'),
    btnEditText = document.getElementById('btnEditText'),

    addFilmBtn = document.querySelector('.add-film'),
    addFilmBox = document.querySelector('#addFilmBox'),
    addExit = document.querySelector('#addExit'),

    addFilmValue1 = document.querySelector('#addFilmValue1'),
    addFilmValue2 = document.querySelector('#addFilmValue2'),
    addFilmValue3 = document.querySelector('#addFilmValue3'),

    btnAddFilmConfirm = document.getElementById('btnAddFilmConfirm'),
    
    editUrl = document.querySelector('.edit__input'),
    editBigText = document.querySelector('.edit__big-input'),

    btnEditImgConfirm = document.getElementById('btnEditImgConfirm'),
    btnEditTextConfirm = document.getElementById('btnEditTextConfirm'),

    modalWindowEditExit1 = document.querySelector('#editExit1'),
    modalWindowEditExit2 = document.querySelector('#editExit2'),
    modalWindowEditExit3 = document.querySelector('#editExit3'),

    modalWindowEdit1 = document.querySelector('#edit1'),
    modalWindowEdit2 = document.querySelector('#edit2'),
    modalWindowEdit3 = document.querySelector('#edit3'),

    btnFilmFavor = document.getElementsByClassName('film__favourite'),
    openFavoriteFilms = document.querySelector('.favourite-btn');

    let doubleClick = 0;
const lastCreateFilm = boxFilm.length;

/*
let numberId = 0,
    arrFilms = [];

function Film(id, imgSrc, text, favorite) {
    this.id = id;
    this.imgSrc = imgSrc;
    this.text = text;
    this.favorite = favorite;
    numberId++;
}
arrFilms[i] = new Film(numberId, boxFilm[i].children[0].src, boxFilm[i].children[1].innerHTML, boxFilm[i].classList.contains('favourite-film'));
*/




function goAboutFilms() {


outer: for (let i = 0; i < boxFilm.length; i++) {
        //mouse over on film
        boxFilm[i].addEventListener('mouseover', function() {
            boxFilm[i].children[3].style.top = '10px';
            boxFilm[i].children[4].style.top = '10px';
        });
        //mouse out with film
        boxFilm[i].addEventListener('mouseout', function() {
            boxFilm[i].children[3].style.top = '-40px';
            boxFilm[i].children[4].style.top = '-40px';
        });
        //open modal window №1
        boxFilm[i].children[2].addEventListener('click', function() {
            blur.style.filter = 'blur(2px)';
            modalWindowEdit1.style.display = 'flex';
            numberFilm = i;
        });
        //delete film
        boxFilm[i].children[4].addEventListener('click', function() {
            boxFilm[i].style.display = 'none';
        });
        boxFilm[i].children[3].addEventListener('click', function() {
            if (doubleClick == 0) {
                boxFilm[i].classList.toggle('favourite-film');
                if (boxFilm[i].classList.contains('favourite-film')) {
                    boxFilm[i].children[3].children[0].src = 'img/icons/star.png';
                } else {
                    boxFilm[i].children[3].children[0].src = 'img/icons/favorite.png';
                }
            }
            doubleClick++;
        });
    }
}
goAboutFilms();


setInterval(work, 200);
function work() {
    doubleClick = 0;
}

btnAddFilmConfirm.addEventListener('click', function() {
    if(confirm('Создать фильм?')) {
        containerFils.insertAdjacentHTML(
            "beforeend",
            '<div class="film">'+
            `<img src="${addFilmValue2.value}" alt="#" class="film__img">`+
            '<p class="film__text">'+ addFilmValue3.value + '</p>'+
            '<p class="film__btn-edit">Редактировать</p>'+
            '<div class="film__favourite">'+
            '<img src="img/icons/favorite.png" alt="#" class="film__favourite_img">'+
            '</div>'+
            '<div class="film__delete"></div>'+
            '</div>'
        );
        addFilmBtn.style.filter = 'none';
        blur.style.filter = 'none';
        addFilmBox.style.display = 'none';

        goAboutFilms();
    }  
});

btnEditImgConfirm.addEventListener('click', function() {
    if (editUrl.value != '') {
        if (confirm('Вы точно хотите изменить изображение?')) {
            boxFilm[numberFilm].children[0].src = editUrl.value;
            modalWindowEdit2.style.display = 'none';
            blur.style.filter = 'none';
        }
    }
});
btnEditTextConfirm.addEventListener('click', function() {
    if (editBigText.value != '') {
        if (confirm('Вы точно хотите изменить описание фильма?')) {
            boxFilm[numberFilm].children[1].innerHTML = editBigText.value;
            modalWindowEdit3.style.display = 'none';
            blur.style.filter = 'none';
        }
    }
});

// open "add film" modal window
addFilmBtn.addEventListener('click', function() {
    addFilmBtn.style.filter = 'blur(2px)';
    blur.style.filter = 'blur(2px)';
    addFilmBox.style.display = 'flex';
});

//open second modal window
btnEditImg.addEventListener('click', function() {
    modalWindowEdit1.style.display = 'none';
    modalWindowEdit2.style.display = 'flex';
});

btnEditText.addEventListener('click', function() {
    modalWindowEdit1.style.display = 'none';
    modalWindowEdit3.style.display = 'flex';
});

//exit modal window
modalWindowEditExit1.addEventListener('click', function() {
    blur.style.filter = 'none';
    modalWindowEdit1.style.display = 'none';
});

modalWindowEditExit2.addEventListener('click', function() {
    blur.style.filter = 'none';
    modalWindowEdit2.style.display = 'none';
});

modalWindowEditExit3.addEventListener('click', function() {
    blur.style.filter = 'none';
    modalWindowEdit3.style.display = 'none';
});

addExit.addEventListener('click', function() {
    addFilmBtn.style.filter = 'none';
    blur.style.filter = 'none';
    addFilmBox.style.display = 'none';
});

//favorite list
openFavoriteFilms.addEventListener('click', function() {
    boxFilm = document.getElementsByClassName('film');
    openFavoriteFilms.classList.toggle('active');
    if (openFavoriteFilms.classList.contains('active')) {
        for (let i = 0; i < boxFilm.length; i++) {
            if (!(boxFilm[i].classList.contains('favourite-film'))) {
                boxFilm[i].style.display = 'none';
            }
        }
    } else {
        for (let i = 0; i < boxFilm.length; i++) {
            boxFilm[i].style.display = 'flex';
        }
    }

    addFilmBtn.classList.toggle('wr-passive');
});
