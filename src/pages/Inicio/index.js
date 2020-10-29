// cSpell: Ignore Cabecalho, Cartao

import React, {useEffect} from 'react'
import Cabecalho from '../../components/Cabecalho'
import Cartao from '../../components/Cartao'

export default function Inicio(){

    useEffect(() => {
        document.title = 'Início'
    },[])

    return(
        
        <div>
            <link href="../../App.css" rel="stylesheet"/>
            <Cabecalho />
           <h1 id="bemvindo" className="animate-up" align = 'center'>BEM VINDO !!!! </h1> 
           <h2 id="intro" className="animate-up" align = 'center'> Aqui você encontrará dados sobre a previsão do tempo, umidade, e probabilidade de chuva na sua cidade, ou onde desejar.</h2>

           <Cartao/>
        </div>
            
    )
}