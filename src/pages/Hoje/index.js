//cSpell: Ignore Cabecalho, previsao,apikey, botao, animacao,

import React, {useState, useEffect} from 'react'
import '../../App.css'
import TextField from '@material-ui/core/TextField'
import {makeStyles} from '@material-ui/core/styles'
import { Container, Button } from '@material-ui/core'
import Paper from '@material-ui/core/Paper'
import SearchIcon from '@material-ui/icons/Search';

import sol from '../images/sunny.png'
import chuva from '../images/rain.png'
import nuvem from '../images/cloudy.png'
import neve from '../images/snow.png'
import tempestade from '../images/storms.png'
import noiteNublada from '../images/nt_mostlycloudy.png'
import neblina from '../images/fog.png'
import granizo from '../images/sleet.png'


const useStyles = makeStyles(theme => ({
    caixaTexto:{
        marginTop: theme.spacing(10)
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
      },
    container: {
        display: 'flex',
        flexDirection: 'row',
    },
    botao: {
        marginTop: '80px',
        marginLeft:'2px',
        height: '55px',
        padding: theme.spacing(2),
    },
    botaoLimpar:{
        marginLeft: theme.spacing(6)
    }
}))



export default function Busca(){
    const classes = useStyles()
    const [cidade, setCidade] = useState('')
    const [previsao, setPrevisao] = useState('')

    function Limpar(){
        setPrevisao('')
        setCidade('')
     }

    async function obterResultados(){
        let apikey = process.env.REACT_APP_API_KEY
        let url = `https://api.hgbrasil.com/weather?format=json-cors&key=${apikey}&city_name=${cidade}`
        await fetch(url)
        .then(response => response.json())
        .then(data => {
            setPrevisao(data.results)
        })
        .catch(function (error){
            console.error(`Houve um erro: ${error.message}`)
        })
    }

    useEffect(() => {
        document.title = 'Busca'
    },[])
    
    function ListaResultados(props){
        const dados = props.dados
        const umidade = dados.humidity
        const hr = dados.time
        const atualmente = dados.currently
        const descricao = dados.description
        const vento = dados.wind_speedy
        const temp = dados.temp
        const condicao = dados.condition_slug
 
        return(
            <div id="resultados">
            { condicao === "cloud" || condicao === "cloudly_day"?
        <img src={nuvem} alt="nublado"/>
        : condicao === "clear_day" || condicao === "none_day" ?
        <img src={sol} alt="ensolarado"/>
        : condicao === "rain" ?
        <img src={chuva} alt="chuvoso"/>
        : condicao === "snow" ?
        <img src={neve} alt="nevando"/>
        : condicao === "storm" ?
        <img src={tempestade} alt="tempestade"/>
        : condicao === "cloudly_night" || condicao === "none_night"?
        <img src={noiteNublada} alt="noite nublada"/>
        : condicao === "hail"?
        <img src={granizo} alt="granizo"/>
        : 
        <img src={neblina} alt="neblina"/>
        }
        <h2>Horário: {hr} - {atualmente} </h2> 
        <h2>Condição: {descricao}</h2>
        <h2>Temperatura: {temp}°C </h2>
        <h2>Umidade do ar: {umidade}%</h2>
        <h2>Velocidade do vento: {vento}</h2>
        </div>
        )
    }

return(

    <div>
    <Container id="animacao" className="animate-up">
    <Container id = "container" className={classes.container}>      
    <TextField className={classes.caixaTexto} 
        required
        fullWidth
        variant="outlined"
        margin="normal"
        color="secondary"
        type="text"
        id="cidade"
        name="cidade"
        label="Informe a Cidade: "
        value={cidade}
        onChange={event => setCidade(event.target.value)}
        /> 
        <Button
            className={classes.botao}
            type = "button"
            onClick={obterResultados}
            variant="contained"
            color="secondary"
        ><SearchIcon/> Pesquisar
        </Button>
    </Container>
    </Container>

    {cidade === '' | previsao === '' ?
    <h1 id="aguardando" className="animate-opacity">Aguardando......</h1>
    : 
    <div id="previsao">
    <h1>Tempo atual em {cidade}:</h1>
    <Paper align="center" id="paper" elevation={3} className="animate-up">
    <ListaResultados dados={previsao}/>
    </Paper>

    <Button
        className={classes.botaoLimpar}
        type = "button"
        onClick={Limpar}
        variant="contained"
        color="secondary"
        > Limpar
        </Button>

    </div>
    }
    </div>

    )     
}

