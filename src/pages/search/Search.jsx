import React, { Fragment, useEffect, useState, } from 'react'
import api, { api_options } from '../../services/api';
import CardSerie from '../../components/cardSerie/CardSerie'
import Menu from '../../components/menu/Menu'


export default function Search(props) {

    const [series, setSeries] = useState([])

    const urlApi = "/search/tv" + props.location.search

    useEffect(() => load(), [props.location.search])

    async function load() {
        try {
            const resposta = await api.get(urlApi + "&api_key=" + process.env.REACT_APP_API_KEY + "&language=" + process.env.REACT_APP_LANG)
            setSeries(resposta.data.results)
            console.log()

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