//cSpell: Ignore Cabecalho, previsao,apikey, botao, animacao, mostlycloudy

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
        height: '55px'
    },
    botaoLimpar:{
        marginLeft: theme.spacing(6)
    }
}))


export default function Busca(){
    const classes = useStyles()
    const [cidade, setCidade] = useState('')
    const [previsao, setPrevisao] = useState([])

    function Limpar(){
        setPrevisao([])
        setCidade('')
    }

    async function obterResultados(){
        let apikey = process.env.REACT_APP_API_KEY
        let url = `https://api.hgbrasil.com/weather?format=json-cors&key=${apikey}&city_name=${cidade}`
        await fetch(url)
        .then(response => response.json())
        .then(data => {
            setPrevisao(data.results.forecast)
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
        const listagemResultados = dados.map((resultado) => 
        <p key={resultado.date}> 
        { resultado.condition === "cloud" || resultado.condition  === "cloudly_day"?
        <img src={nuvem} alt="nublado"/>
        : resultado.condition  === "clear_day" || resultado.condition === "none_day" ?
        <img src={sol} alt="ensolarado"/>
        : resultado.condition === "rain" ?
        <img src={chuva} alt="chuvoso"/>
        : resultado.condition === "snow" ?
        <img src={neve} alt="nevando"/>
        : resultado.condition === "storm" ?
        <img src={tempestade} alt="tempestade"/>
        : resultado.condition === "cloudly_night" || resultado.condition === "none_night"?
        <img src={noiteNublada} alt="tempestade"/>
        : resultado.condition === "hail"?
        <img src={granizo} alt="granizo"/>
        : 
        <img src={neblina} alt="neblina"/>
        }<br/>{resultado.date} - {resultado.weekday} <br/>{resultado.description} <br/>Temperatura: <br/>Miníma {resultado.min}°C <br/>Máxima {resultado.max}°C</p>
        )
        return(
            <div>
            <Paper id="paper" elevation={3} className="animate-up">
        <h2>{listagemResultados[0]}</h2>
            </Paper>
            <Paper id="paper" elevation={3} className="animate-up">
        <h2>{listagemResultados[1]}</h2>
           </Paper>
           <Paper id="paper" elevation={3} className="animate-up">
        <h2>{listagemResultados[2]}</h2>
           </Paper>
           <Paper id="paper" elevation={3} className="animate-up">
        <h2>{listagemResultados[3]}</h2>
           </Paper>
           <Paper id="paper" elevation={3} className="animate-up">
        <h2>{listagemResultados[4]}</h2>
           </Paper>
           <Paper id="paper" elevation={3} className="animate-up">
        <h2>{listagemResultados[5]}</h2>
           </Paper>
           <Paper id="paper" elevation={3} className="animate-up">
        <h2>{listagemResultados[6]}</h2>
           </Paper>
           <Paper id="paper" elevation={3} className="animate-up">
        <h2>{listagemResultados[7]}</h2>
           </Paper>
           <Paper id="paper" elevation={3} className="animate-up">
        <h2>{listagemResultados[8]}</h2>
           </Paper>
           <Paper id="paper" elevation={3} className="animate-up">
        <h2>{listagemResultados[9]}</h2>
           </Paper>
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

    {cidade === '' | previsao.length === 0 ?
    <h1 id="aguardando" className="animate-opacity">Aguardando......</h1>
    : 
    <div id="previsao">
    <h1>Previsão de 10 dias para a cidade de {cidade}:</h1>
        <ListaResultados dados={previsao}/>

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