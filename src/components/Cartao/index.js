//cSpell: Ignore Cartao

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 500,
    width: '100%',
    zIndex: 1,
  },

});

export default function Cartao() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image="https://source.unsplash.com/collection/651678/weather" 
          title="Seja bem vindo"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
          Imagem de unsplash.com
          </Typography>
        </CardContent>
      <CardActions>
        <Button size="small" color="secondary" variant="contained" href = "https://source.unsplash.com" target="_blank">
          Visite imagem
        </Button>
      </CardActions>
    </Card>
  );
}