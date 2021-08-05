    let numberOfFilms,
        lastFilm,
        rateOfFilm;

    function start () {
        numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
        while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
        }
    }

    start();

    let personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

    showMyDB(personalMovieDB.privat);

    function showMyDB(check) {
        if (!check) {
            console.log(personalMovieDB);
        }
    }

    function remeberMyFilms() {
        for (let i = 0; i<2; i++) {
            lastFilm = prompt("Один из последних просмотренных фильмов?", "");
            rateOfFilm = prompt("На сколько оцените его?", "");
        if (lastFilm != null && rateOfFilm != null && lastFilm != "" && rateOfFilm != "" && lastFilm.length <= 50) {
            console.log("Done");
            personalMovieDB.movies[lastFilm] = rateOfFilm;
        } else {
             console.log("Error");
            i--;
        }
    }
    }

    remeberMyFilms();

    
    function detectPersonalLevel() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотренно довольно мало фильмов");
        } else if ((personalMovieDB.count >= 10)&&(personalMovieDB.count <= 30)) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count > 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    }
    
    detectPersonalLevel();

    function writeYourGenres() {
        for (let i = 1; i <= 3; i++) {
            personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`, "");
        }
    }
    writeYourGenres();