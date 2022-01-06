import React from 'react'
import './CardSeason.css'

export default function CardSeason({season}){
    return (
        <div className="card-season">
            <img src={`https://image.tmdb.org/t/p/w200${season.poster_path}`}
                alt="poster-season" />
            <div className="season-info">
                <h3>{season.name}</h3>
                <p className="eps-count">{season.episode_count} episódios</p>
                <p>{season.overview}</p>
                
            </div>
        </div>
    )
}