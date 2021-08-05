    let numberOfFilms,
        lastFilm,
        rateOfFilm;

    do {
        numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");
    } while (numberOfFilms == 0);


    let personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        actors: {},
        genres: [],
        privat: false
    };

    if (personalMovieDB.count < 10) {
        console.log("Просмотренно довольно мало фильмов");
    } else if ((personalMovieDB.count >= 10)&&(personalMovieDB.count <= 30)) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count > 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
    
    
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
        //personalMovieDB.movies[lastFilm] = rateOfFilm;
    }
    
    console.log(personalMovieDB);