const numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?", "");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

const lastFilm1 = prompt("Один из последних просмотренных фильмов?", "");
const rateOfFilm1 = prompt("На сколько оцените его?", "");
const lastFilm2 = prompt("Один из последних просмотренных фильмов?", "");
const rateOfFilm2 = prompt("На сколько оцените его?", "");

personalMovieDB.movies[lastFilm1] = rateOfFilm1;
personalMovieDB.movies[lastFilm2] = rateOfFilm2;

console.log(personalMovieDB);