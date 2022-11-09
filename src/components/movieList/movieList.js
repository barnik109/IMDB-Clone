import React, { useEffect, useState } from 'react'
import "./movieList.css"
import { useParams } from 'react-router-dom'
import Cards from '../card/card'

const MovieList = () => {
    const [movieList, setMovieList] = useState([])
    const { type } = useParams();

    useEffect(()=> {
        getData()
    }, [])
    
    useEffect(() => {
        getData()
    }, [type])
    
    const getData = () => {
        fetch(`https://api.themoviedb.org/3/movie/${type?type:"popular"}?api_key=82b8cb8bd84a11729a4c977e74c5e3f9&language=en-US&page=1`)
            .then(res => res.json())
            .then(data => setMovieList(data.results))
    }

    return (
        <div className="movie_List">
            <h2 className="list_title">{(type?type:"POPULAR").toUpperCase()}</h2>
            <div className="list_cards">
                {
                    movieList.map(movie => (
                        <Cards movie={movie}/>
                    ))
                }
            </div>
        </div>
    )
}

export default MovieList

