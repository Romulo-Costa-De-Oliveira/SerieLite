import React, { Fragment, useEffect, useState } from 'react';
import api from '../../services/api';
import CardSerie from '../../components/cardSerie/CardSerie';
import Menu from '../../components/menu/Menu';

export default function News() {

    const [series, setSeries] = useState([])


    useEffect(() => { load() }, [])

    async function load() {
        try {
            const resposta = await api.get("/tv/airing_today?api_key="+ process.env.REACT_APP_API_KEY + "&language=" + process.env.REACT_APP_LANG)
            setSeries(resposta.data.results)
          
        } catch (erro) {
            console.log(erro)
        }
    }

    return (
        <Fragment>
            <Menu />
            <div className="content">
                {series.map((serie) => <CardSerie key={serie.id} serie={serie} />)}
            </div >
        </Fragment >
    );
}