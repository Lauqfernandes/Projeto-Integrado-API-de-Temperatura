
// cSpell: Ignore Cabecalho

import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import WbSunnyIcon from '@material-ui/icons/WbSunny';
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(10)
  },
  button: {
    margin: theme.spacing(1)
  }
}));

export default function Cabecalho (){

  const classes = useStyles();

  return (
    <AppBar position="static">
      <Toolbar>
          <WbSunnyIcon />
        <Typography variant="h6" className={classes.title}>
          Previsão do Tempo
        </Typography>
        {window.location.href === 'http://localhost:3000/' | window.location.href === 'http://localhost:3001/' ?
          <Button className={classes.button} variant = "contained" color="secondary" href = '/Busca'>Buscar cidade</Button>
          :<Button className={classes.button} variant = "contained" color="secondary" href = '/'>Voltar ao Início</Button>
        }
      </Toolbar>
    </AppBar>
  )
}
