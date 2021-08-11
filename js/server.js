'use strict';

window.addEventListener("DOMContentLoaded", () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Пилигримм",
            "Скотт Пилигрим против..."
        ]
    };

    const removeAdvert = document.querySelectorAll('.promo__adv img'),
        poster = document.querySelector('.promo__bg'),
        changingGenre = poster.querySelector('.promo__genre'),
        ulList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector("form.add"),
        addInput = addForm.querySelector(".adding__input"),
        checkbox = addForm.querySelector('[type = "checkbox"]');


    const someChanging = ((text, poste) => {
        text.textContent = "Драма";
        poste.style.backgroundImage = `url("img/bg.jpg")`;
    });
    

    const sortArray = (arr) => {
        arr.sort();
    };
    

    const deleteAdvert = (arr) => {
        arr.forEach(item => {
            item.remove();
        });
    };
    

    addForm.addEventListener("submit", (event) => {
        event.preventDefault();
        if (addInput.value != "" && addInput != null) {
            const newFilm = addInput.value;
            const checkValue = checkbox.checked;
            movieDB.movies.push(newFilm);
            sortArray(movieDB.movies);
            addingNewFilm(movieDB.movies, ulList);
            if (checkValue) {
                console.log("Добавлен любимый фильм");
            }
        }
        event.target.reset();
    });



    function addingNewFilm(films, parent) {
        parent.innerHTML = "";
        sortArray(movieDB.movies);
        films.forEach((item, i) => {
            if (item.length > 21) {
                const slicedName = item.substring(0, 21);
                parent.innerHTML += `<li class="promo__interactive-item">${i+1}.${slicedName}...
            <div class="delete">
            </div>
            </li>`;
            } else {
                parent.innerHTML += `<li class="promo__interactive-item">${i+1}.${item}
            <div class="delete">
            </div>
            </li>`;
            }
        });
        document.querySelectorAll('div.delete').forEach((btn, i) => {
            btn.addEventListener("click", () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                addingNewFilm(films, parent);
            });
        });
    }

    addingNewFilm(movieDB.movies, ulList);
    deleteAdvert(removeAdvert);
    
    someChanging(changingGenre, poster);

});