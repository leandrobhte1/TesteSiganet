import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'

import MenuLateralOficial from '../template/menuLateralOficial'
import InfoSenhas from '../template/informacoesSenha'
import Cabecalho from '../template/cabecalho'
import PageHeader from '../template/pageHeader'

import i18n from '../i18n';

import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'

import { changeFluxo, nextTicket, changeSenha, insertSenhaList, finalizaSenhaList } from './senhaActions'

let senha = '';

class senhaEspecifica extends Component {

  constructor(props) {
    super(props);
  }

  savePress(e){

    let control = 0;

    console.log("e.: ",e.target.value)
    senha = e.target.value;

    console.log("Senha.: ", senha);

    let { fluxo, senhaAtual, senhasFila, senhasList } = this.props

    senhasList.map(s => {
      if(s == senha){
        console.log("Senha existe na fila!");
        control = 1;
        this.props.nextTicket(senha);
      }
    })

    if(control == 0) {
      alert("Senha não encontrada na fila!");
    }
  }

  handleClick() {
    console.log("Confirmou.: ", senha);

    let { fluxo, senhaAtual, senhasFila, senhasList } = this.props
    this.props.nextTicket(senha);
    // this.props.finalizaSenhaList(senha);
  }

  render() {

    let { fluxo, senhaAtual, senhasFila, senhasList } = this.props

    return(
        <div>
                <PageHeader name={i18n.t('emissor')} small={i18n.t('senhas')}></PageHeader>
                <div className="container">
                    <Cabecalho unidade="TRIBUNAL REGIONAL DO TRABALHO" secao={i18n.t('Atendimento')} fila={i18n.t('Fila')} 
                        guiche={i18n.t('Guiche')} atendente={i18n.t('Atendente')} status={i18n.t('Status')} tempo={i18n.t('Tempo')} hora={i18n.t('Hora')}></Cabecalho>
                </div>
                <div className="corpoContent container">
                    
                    <MenuLateralOficial></MenuLateralOficial>
                    <div className="preenche">
                        <h3>Digite a senha que deseja chamar: </h3>
                        <div className="dispInfo">
                            <input onKeyUp={this.savePress} className="react-autosuggest__input" type="number" placeholder={this.props.placeholder} ></input>
                            <a href="#/senha"><button onClick={this.handleClick} type="button">Confirmar</button></a>
                        </div>
                    </div>
                    
                </div>
            </div>
          
    )
  }

}

const mapStateToProps = state => ({fluxo: state.senha.fluxo, senhaAtual: state.senha.senhaAtual, senhasFila: state.senha.senhasFila, senhasList: state.senha.senhasList})

const mapDispatchToProps = dispatch => bindActionCreators({ changeFluxo, nextTicket, changeSenha, insertSenhaList, finalizaSenhaList }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(senhaEspecifica)