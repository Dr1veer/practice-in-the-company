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
let objFilm;

if (!localStorage.numberArrFilm) {
    localStorage.numberArrFilm = 0;
}
console.log(localStorage.numberArrFilm);
for (let i = 0; i<localStorage.numberArrFilm; i++) {
    let favoriteStyle,
        favoriteImg;
    try {
        objFilm = JSON.parse(localStorage.getItem(i));
        if (objFilm.favorite) {
            favoriteStyle = 'favourite-film';
            favoriteImg = 'img/icons/star.png';
        } else {
            favoriteStyle = '';
            favoriteImg = 'img/icons/favorite.png';
        }
            
        containerFils.insertAdjacentHTML(
            "beforeend",
            `<div class="film ${favoriteStyle}">`+
            `<img src="${objFilm.imgSrc}" alt="#" class="film__img">`+
            '<p class="film__text">'+ objFilm.text + '</p>'+
            '<p class="film__btn-edit">Редактировать</p>'+
            '<div class="film__favourite">'+
            `<img src="${favoriteImg}" alt="#" class="film__favourite_img">`+
            '</div>'+
            '<div class="film__delete"></div>'+
            '</div>'
        );
    } catch {}
}


//localStorage.clear();

function goAboutFilms() {

    for (let i = 0; i < boxFilm.length; i++) {
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
            if (doubleClick == 0) {
                boxFilm[i].style.display = 'none';
                /*
                localStorage.removeItem(i-3);
                for (let x = i-3; x+1<localStorage.numberArrFilm; x++) {
                    localStorage.setItem(x) = localStorage.getItem(x+1);
                }
                localStorage.numberArrFilm = +localStorage.numberArrFilm - 1;
                */  
                /*
                console.log('После удаления   \n' + localStorage.numberArrFilm);
                for (let i = 0; i<localStorage.numberArrFilm; i++) {
                        objFilm = JSON.parse(localStorage.getItem(i));
                        console.log(objFilm.imgSrc);
                        console.log(objFilm.text);
                }
                */
            }
            doubleClick++;

        });
        boxFilm[i].children[3].addEventListener('click', function() {
            if (doubleClick == 0) {
                boxFilm[i].classList.toggle('favourite-film');
                if (boxFilm[i].classList.contains('favourite-film')) {
                    boxFilm[i].children[3].children[0].src = 'img/icons/star.png';
                    
                    objFilm = JSON.parse(localStorage.getItem(i));
                    objFilm.favorite = true;
                    localStorage.setItem(i, JSON.stringify({
                        imgSrc: objFilm.imgSrc,
                        text: objFilm.text,
                        favorite: objFilm.favorite,
                    }));
                } else {
                    boxFilm[i].children[3].children[0].src = 'img/icons/favorite.png';

                    objFilm = JSON.parse(localStorage.getItem(i));
                    objFilm.favorite = false;
                    localStorage.setItem(i, JSON.stringify({
                        imgSrc: objFilm.imgSrc,
                        text: objFilm.text,
                        favorite: objFilm.favorite,
                    }));
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
//add film
btnAddFilmConfirm.addEventListener('click', function() {
    let image = new Image();
        image.src = addFilmValue2.value;
     
        image.addEventListener('load', () => {
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
                //save sourse of film
                localStorage.setItem(localStorage.numberArrFilm, JSON.stringify({
                    imgSrc: addFilmValue2.value,
                    text: addFilmValue3.value,
                    favorite: false,
                }));
                //number of Array += 1
                localStorage.numberArrFilm = +localStorage.numberArrFilm + 1;

                addFilmBtn.style.filter = 'none';
                blur.style.filter = 'none';
                addFilmBox.style.display = 'none';
                addFilmValue2.style.borderBottom = 'none';
                addFilmValue1.value = '';
                addFilmValue2.value = '';
                addFilmValue3.value = '';
                goAboutFilms();
            } 
        });
        image.addEventListener('error', () => { 
            addFilmValue2.style.borderBottom = '3px solid #f00';
            alert('Некорретный ввод URL адреса изображения');
        });
});

localStorage.quanFilms = 0;

btnEditImgConfirm.addEventListener('click', function() {
 
    let image = new Image();
        image.src = editUrl.value;
     
        image.addEventListener('load', () => {
            if (confirm('Вы точно хотите изменить изображение?')) {

                boxFilm[numberFilm].children[0].src = editUrl.value;

                objFilm = JSON.parse(localStorage.getItem(numberFilm));
                objFilm.imgSrc = editUrl.value;
                localStorage.setItem(numberFilm, JSON.stringify({
                    imgSrc: objFilm.imgSrc,
                    text: objFilm.text,
                    favorite: objFilm.favorite,
                }));
                modalWindowEdit2.style.display = 'none';
                blur.style.filter = 'none';
                editUrl.style.borderBottom = 'none';
                editUrl.value = '';
                

            }
        });
        image.addEventListener('error', () => {
            editUrl.style.borderBottom = '3px solid #f00';
            alert('Некорретный ввод URL адреса');
        });
     
});
btnEditTextConfirm.addEventListener('click', function() {
    if (editBigText.value != '') {
        if (confirm('Вы точно хотите изменить описание фильма?')) {

            boxFilm[numberFilm].children[1].innerHTML = editBigText.value;

            objFilm = JSON.parse(localStorage.getItem(numberFilm));
            objFilm.text = editBigText.value;
            localStorage.setItem(numberFilm, JSON.stringify({
                imgSrc: objFilm.imgSrc,
                text: objFilm.text,
                favorite: objFilm.favorite,
            }));

            modalWindowEdit3.style.display = 'none';
            blur.style.filter = 'none';
            editBigText.value = '';
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
    editUrl.style.borderBottom = 'none';
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
    editUrl.value = '';
});

modalWindowEditExit3.addEventListener('click', function() {
    blur.style.filter = 'none';
    modalWindowEdit3.style.display = 'none';
    editBigText.value = '';
});

addExit.addEventListener('click', function() {
    addFilmBtn.style.filter = 'none';
    blur.style.filter = 'none';
    addFilmBox.style.display = 'none';
    addFilmValue2.style.borderBottom = 'none';
    addFilmValue1.value = '';
    addFilmValue2.value = '';
    addFilmValue3.value = '';
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

