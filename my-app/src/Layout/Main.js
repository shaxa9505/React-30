import React, { useState, useEffect } from 'react';
import Loading from '../Components/Loading';
import Movies from '../Components/Movies';
import Search from '../Components/Search';

export default function Main() {

    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    const SearchMovie = (url, type = "all") => {
        setLoading(true);
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=a9deb32d&s=${url}${type !== "all" ? `&type=${type}` : ""}`)
            .then(data => data.json())
            .then(data => {
                setLoading(false);
                setMovies(data.Search);
            })
    }

    useEffect(() => {
        fetch("http://www.omdbapi.com/?i=tt3896198&apikey=a9deb32d&s=panda")
            .then(data => data.json())
            .then(data => {
                setMovies(data.Search);
                setLoading(false);
            })
    }, [])


    return (
        <div className="container content">
            <Search SearchMovie={SearchMovie} />
            {loading ? <Loading /> : <Movies movies={movies} />}
        </div>
    );
}
