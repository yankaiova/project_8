'use strict'

const numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');

console.log(numberOfFilms);

let personalMovieDB = {
    count:numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat:false   
};

let nameOfMovies1 = prompt('Один из последних просмотренных фильмов?', '');
let raitingMovies1 = prompt('На сколько оцените его?', '');
let nameOfMovies2 = prompt('Один из последних просмотренных фильмов?', '');
let raitingMovies2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies = {
        movies1: {
            nameOfMovies1,
            raitingMovies1
        }, 
        movies2: {
            nameOfMovies2, 
            raitingMovies2
        }
};

console.log(personalMovieDB.movies);