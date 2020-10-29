import React, {useEffect} from 'react'
import  Typography  from '@material-ui/core/Typography'
import  Paper  from '@material-ui/core/Paper'
import  Button  from '@material-ui/core/Button'

export default function Inicio(){

    useEffect(() => {
        document.title = 'Página não encontrada'
    },[])

    return(
        <div>
            <Paper id="paperNaoEncontrado" elevation={3} className="animate-up">
            <Typography variant='h2'>Página não encontrada!</Typography>
            <Button variant = "contained" color="secondary" href = '/'>Voltar ao Início</Button>
            </Paper>
        </div>
    )
}