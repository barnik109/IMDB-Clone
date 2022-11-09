import React,{useEffect,useState} from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton'
import "./card.css"
import { Link } from 'react-router-dom'

const Cards = ((movie) => {

    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
      setTimeout(() => {
          setIsLoading(false);
      }, 1500);
    }, [])
    
    return <>
        <div className="cards">
            <SkeletonTheme color="#2020" highlightColor='#444'>
                <Skeleton height={300} duration={2}/>
            </SkeletonTheme>
        </div>
        :
        <Link style={{ textDecoration: "none", color: "white" }} to={`/movie/${movie.id}`} >
        <div className="cards">
            <div className="cards_img">
                <img src={`https://image.tmdb.org/t/p/original${movie && movie.poster_path}`} />
            </div>
            <div className="cards__overlay">timeout
                <div className="card__title">{movie ? movie.original_title : ""}</div>
                <div className="card__runtime">
                    {movie ? movie.release_date : ""}
                    <span className="card__rating">
                        {movie ? movie.vote_average : ""}
                    </span>
                </div>
                <div className="card__description">{movie ? movie.overview : ""}</div>
            </div>
            </div>
            </Link>
    </>
})

export default Cards
