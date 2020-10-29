import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Inicio from '../src/pages/Inicio'
import Busca from '../src/pages/Busca'
import NaoEncontrado from '../src/pages/NaoEncontrado'

export default function Rotas(){
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path = "/" component={Inicio} />
                <Route exact path = "/Busca" component={Busca} />
                <Route component={NaoEncontrado} />
            </Switch>
        </BrowserRouter>
    )
}
