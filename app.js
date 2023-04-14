const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
}

const question1 = prompt('Один из последних просмотренных фильмов?')
const question2 = prompt('На сколько оцените его?')

personalMovieDB['movies'][question1] = question2;

console.log(personalMovieDB);