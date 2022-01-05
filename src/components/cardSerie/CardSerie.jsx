import React from "react";
import "./CardSerie.css";

export default function CardSerie({ serie }) {
    const nota = serie.vote_average.toFixed(1)
    const imgUrl = "https://image.tmdb.org/t/p/w200/"
    const data = new Date(serie.first_air_date)
    const data_lancamento = data.toLocaleDateString()
    return (
        <div className="card-serie">
            <span className="material-icons fav-btn">add_circle_outline</span>
            <div
                className="poster-image"
                style={{ backgroundImage: `url(${imgUrl}${serie.poster_path})` }}>
            </div>
            <div className="card-detail">
                <div className="score"><span className="material-icons">star</span>
                    {nota}
                </div>
                <h1>{serie.name}</h1>
                <h2>{data_lancamento}</h2>
            </div>
            <div className="buttom">
                <a hfef="#" className="btn-detail">
                    <span className="material-icons">play_arrow</span>
                    detalhes
                </a>
            </div>
        </div >
    );
}