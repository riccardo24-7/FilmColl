let lastFilm,
    rateOfFilm,
    genreOfFilms;
    
    let personalMovieDB = {
        count: 0,
        movies: {},
        actors: {},
        genres: [],
        privat: false,
        start: function() {
            this.count = +prompt("Сколько фильмов Вы уже посмотрели?", "");
            while (this.count == "" || this.count == null || isNaN(this.count)) {
                this.count = +prompt("Сколько фильмов Вы уже посмотрели?", "");
            }
            return this.count;
        },
        addMovies: function() {
            for (let i = 0; i<2; i++) {
                lastFilm = prompt("Один из последних просмотренных фильмов?", "");
                rateOfFilm = prompt("На сколько оцените его?", "");
            if (lastFilm != null && rateOfFilm != null && lastFilm != "" && rateOfFilm != "" && lastFilm.length <= 50) {
                console.log("Done");
                this.movies[lastFilm] = rateOfFilm;
            } else {
                 console.log("Error");
                i--;
            }
        }
        },
        addGenres: function() {
            for (let i = 1; i <= 3; i++) {
                genreOfFilms =  prompt(`Ваш любимый жанр под номером ${i}`, "");
                if (genreOfFilms != null && genreOfFilms != "") {
                    console.log("Done");
                    this.genres[i-1] = genreOfFilms;
                } else {
                    console.log("Error");
                    i--;
                }
            }
            this.genres.forEach((item, i) => {
                console.log(`Любимый жанр ${i+1} - это ${item}`, "");
            });
        },
        detectPersonalLevel: function() {
            if (this.count < 10) {
                console.log("Просмотренно довольно мало фильмов");
            } else if ((this.count >= 10)&&(this.count <= 30)) {
                console.log("Вы классический зритель");
            } else if (this.count > 30) {
                console.log("Вы киноман");
            } else {
                console.log("Произошла ошибка");
            }
        },
        toggleVisibleMyDB: function() {
            if (!this.privat) {
                this.privat = true;
            } else {
                this.privat = false;
            }
        },
        showMyDB: function(hidden) {
            if (!hidden) {
                console.log(personalMovieDB);
            }
        }
        
    };

    personalMovieDB.start();
    personalMovieDB.detectPersonalLevel();
    personalMovieDB.addMovies();
    personalMovieDB.addGenres();
    personalMovieDB.toggleVisibleMyDB();
    personalMovieDB.showMyDB();