import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Home from '../home/home'
import Senha from '../senha/senha'
import CriarSenha from '../senha/criarSenha'
import AtenderSenha from '../senha/atenderSenha'
import SenhasFila from '../senha/senhasFila'
import SenhaEspecifica from '../senha/senhaEspecifica'

export default props => (
    <Router history={hashHistory}>
        <Route path='/home' component={Home}></Route>
        {/* <Route path='/about' component={About}></Route> */}
        <Route path='/senha' component={Senha}></Route>
        <Route path='/senhaCriar' component={CriarSenha}></Route>
        <Route path='/atenderSenha' component={AtenderSenha}></Route>
        <Route path='/senhasFila' component={SenhasFila}></Route>
        <Route path='/senhaEspecifica' component={SenhaEspecifica}></Route>
        <Redirect from='*' to='/home'></Redirect>
    </Router>
)