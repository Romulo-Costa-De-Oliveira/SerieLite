import React, { Fragment, useEffect, useState } from 'react'
import axios from 'axios'
import CardSerie from '../../components/cardSerie/CardSerie'
import Menu from '../../components/menu/Menu'

export default function News() {

    const [series, setSeries] = useState([])

    useEffect(() => load(), [])

    async function load() {
        try {
            const resposta = await axios.get("https://api.themoviedb.org/3/tv/airing_today?api_key=d2c9d95f237a0f48191f44de70be02e0&language=pt-BR")
            setSeries(resposta.data.results)
            console.log(resposta)
        } catch (erro) {
            console.log(erro);
        }
    }

    return (
        <Fragment>
            <Menu/>
            <div className="content">
                {series.map((serie) => <CardSerie key={serie.id} serie={serie} />)}
            </div >
        </Fragment >
    );
}