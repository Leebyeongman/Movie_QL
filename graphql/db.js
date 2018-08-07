let movies = [{
        id: 0,
        name: "Star Wars - The new one",
        score: 1
    },
    {
        id: 1,
        name: "Avengers - Infinity War",
        score: 9
    },
    {
        id: 2,
        name: "Misson Impossible - Fall Out",
        score: 8
    },
    {
        id: 3,
        name: "AntMan",
        score: 8
    }
];

export const getMovies = () => movies;

export const getById = id => {
    const filteredMovies = movies.filter(movie => movie.id === id);
    // filter는 모든 대상을 거친 뒤 해당 조건에 맞는 걸 리턴
    return filteredMovies[0];
};

export const deleteMovie = (id) => {
    const cleandMovies = movies.filter(movie => movie.id !== id);
    if (movies.length > cleandMovies.length) {
        movies = cleandMovies;
        return true;
    }
    else {
        return false;
    }
}

export const addMovie = (name, score) => {
    const newMovie = {
        id: '${movies.length + 1}',
        name,
        score
    }
    movies.push(newMovie);
    return newMovie;
}