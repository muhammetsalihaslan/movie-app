import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

const API_KEY = `0db9423930517eebdf7f4f1ffbd6b266`
const FEATURED_API = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}`;
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const Main = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState("")

    useEffect(() => {
        getMovies(FEATURED_API);
    }, []);


    const getMovies = (API) => {
        setLoading(true)
        axios.get(API).then((res) => setMovies(res.data.results)).catch((err) => console.log(err)).finally(() => setLoading(false))
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      getMovies(SEARCH_API+searchTerm)
    }
    
    return(
       <>
         <form className="search" onSubmit={handleSubmit}>
        <input
          type="search"
          className="search-input"
          placeholder="Search a movie..."
          onChange={(e) => setSearchTerm(e.target.value)}
         
        />
        <button type="submit">Search</button>
      </form>
        <div className="d-flex justify-content-center flex-wrap">
         {loading ? (
          <div className="spinner-border text-primary m-5" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          movies?.map((movie) => <MovieCard key={movie.id} {...movie}/>)
        )}
        </div>
        </>
    ) 
}

export default Main;