import React, { Fragment, useEffect, useState } from 'react'
import api from '../../services/api';

import CardSeason from '../../components/cardSeason/CardSeason';
import "./Serie.css";

export default function Serie(props) {

    const { serieId } = props.match.params
    const [serie, setSerie] = useState([])
    const [genres, setGenres] = useState([])
    const [seasons, setSeasons] = useState([])


    const imgBaseUrl = "https://image.tmdb.org/t/p/w300"
    const imgBaseUrlBg = "https://image.tmdb.org/t/p/original"

    useEffect(() => { load() }, [])

    async function load() {
        try {
            const resposta = await api.get(`/tv/${serieId}?api_key=` + process.env.REACT_APP_API_KEY + "&language=" + process.env.REACT_APP_LANG)
            setSerie(resposta.data)
            setGenres(resposta.data.genres)
            setSeasons(resposta.data.seasons)
            console.log(resposta.data)
        } catch (erro) {
            console.log(erro)
        }
    }

    return (
        <Fragment>

            <div className="hero">
                <div className="bg"
                    style={{ backgroundImage: `url(${imgBaseUrlBg}${serie.backdrop_path})` }}
                >

                </div>
                <button className="btn-back" onClick={props.history.goBack}>
                    <span className="material-icons">navigate_before</span>Voltar
                </button>
                <img src={`${imgBaseUrl}${serie.poster_path}`} alt="poster" srcset="" />

                <div className="serie-info">
                    <h1>{serie.name}</h1>
                    <div className="score">
                        <span className="material-icons">grade</span>
                        {serie.vote_average}
                    </div>
                    <p className="genres">
                        {genres.map(genero => { return genero.name + ' | ' })}
                    </p>
                    <p>{serie.overview}</p>
                </div>
            </div >
            <section className="seasons">
                <h2>Temporadas</h2>
                {seasons.map((season) => (
                    <CardSeason season={season}/>
                ))}
            </section>
        </Fragment >
    );
}