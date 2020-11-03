import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import React from 'react'
import Parapapa from './screens/tela-cadastro'
import Logar from './screens/tela-login'
import Itens from './screens/tela-meus-itens'
import CadastraItem from './screens/tela-inserir-item'
import Inicio from './screens/tela-inicial'


function Um() {
    return <Router>
        <h1>Início Da Tela</h1>
        <Switch>
            <Route path="/telacadastro">
                <Parapapa />
            </Route>
            <Route path="/logar">
                <Logar />
            </Route>
            <Route path="/itens">
                <Itens />
            </Route>
            <Route path="/cadastraitem">
                <CadastraItem />
            </Route>
            <Route path="/inicial">
                <Inicio />
            </Route>
            </Switch>
    </Router>
}

export default Um