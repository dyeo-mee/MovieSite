import React, { useState, useEffect } from 'react';
import axios from './axios';
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
    const [movies, setMovies] = useState([]);

    useEffect(()=> {
        // row들을 화면에 나타내기 위한 요소
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            // console.log(request.data.results);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]);

    // console.table(movies);

    return (
        <div className='row'>
            <h2>{title}</h2>
            {/* {   } */}
            <div className='row_posters'>
                {movies.map(movie => (
                    <img 
                        key={movie.id}
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        src={`${base_url}${
                            isLargeRow ? movie.poster_path : movie.backdrop_path
                        }`} 
                        alt={movie.name} />
                ))}
            </div>
        </div>
    );
};

export default Row