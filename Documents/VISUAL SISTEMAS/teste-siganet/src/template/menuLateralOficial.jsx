import React, { Component } from 'react'

import IconButton from '../template/iconButton'

import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'

import { changeFluxo, nextTicket, changeSenha, insertSenhaList, finalizaSenhaList } from '../senha/senhaActions'

import { Button, Header, Icon, Modal } from 'semantic-ui-react'

import ModalBT from '../template/modal'
import ModalBTInput from '../template/modalInput'

import If from '../template/if'

import { useTranslation, Trans } from "react-i18next";

import i18n from '../i18n';

let c;

class MenuLateralOficial extends Component {

    

    constructor(props) {
        super(props);
    }

    handlerClick(n){

        let { fluxo, senhaAtual, senhasFila, senhasList } = this.props


        if(n == 1){
            this.props.nextTicket(senhaAtual + 1)
        } else if (n == 4 ){
            this.props.changeSenha(senhasFila + 1)
            this.props.insertSenhaList(senhaAtual + 1);
        } else if(n == 5){
            this.props.changeSenha(senhasFila - 1)
            console.log("senha finalizada.: ",senhaAtual);
            this.props.finalizaSenhaList(senhaAtual)
        }

        // console.log("Chegou aqui!", fluxo);

        this.props.changeFluxo(n);
    }
    
    

    nextTicket(cont){

        let { senhasFila, senhaAtual } = this.props

        

        console.log("cont.: ",c);

        if(cont == 0 && c != 1){
            c = cont + 1;
            if(senhasFila <= senhaAtual){
                alert("Não existem senhas na fila! Para chamar a próxima senha crie uma senha antes!");
            } else {
                this.handlerClick(1);
            }
        }else {
            // this.props.nextTicket(senhaAtual + 1);
            console.log("SenhasFila.: ", senhasFila);
            console.log("SenhaAtual.: ", senhaAtual);
            if(senhasFila < senhaAtual){
                alert("Não existem senhas na fila! Para chamar a próxima senha crie uma senha antes!");
            } else {
                this.handlerClick(1);
            }
        }

        
    }

    showSenhasFila() {
        let { fluxo, senhaAtual, senhasFila, senhasList } = this.props

        console.log("senhasFila.: ",senhasList);


    }

    renderRows(fluxo) {

        let cont = 0;

        /// fluxo 0 - tela inicial
        /// fluxo 1 - ao clicar em proxima senha (chamou a senha)
        /// fluxo 2 - ao clicar em inicia atendimento
        /// fluxo 3 - ao clicar em Criar senha
        /// fluxo 4 - Ao clicar em ver as senhas na fila
        /// fluxo 5 - Finalizou senha
        

        return (
            <div className="actionsList">
                <ul className="menuList">
                    <If test={fluxo == 2}>
                        <li onClick={() => this.handlerClick(5)} className="menuListItem"><a href="#/home"><button className="menuButton">Finaliza atendimento</button></a></li>
                        <div className="ui divider"></div>
                    </If>
                    <If test={fluxo == 0 || fluxo == 1 || fluxo == 3 || fluxo == 4 || fluxo == 5 }>
                        <li onClick={() => this.nextTicket(cont)} className="menuListItem"><button className="menuButton">Próxima senha</button></li>
                        <div className="ui divider"></div>
                    </If>
                    <If test={fluxo == 1}>
                        <li onClick={() => this.handlerClick(2)} className="menuListItem"><a href="#/atenderSenha"><button className="menuButton">Inicia atendimento</button></a></li>
                        <div className="ui divider"></div>
                    </If>
                    <If test={fluxo == 0 || fluxo == 1 || fluxo == 3 || fluxo == 4 || fluxo == 5}>
                        <li className="menuListItem"><a href="#/senhaEspecifica"><button className="menuButton">Senha específica</button></a></li>
                        <div className="ui divider"></div>
                    </If>
                    <If test={fluxo == 0 || fluxo == 2 || fluxo == 3 || fluxo == 4 || fluxo == 5}>
                        <li className="menuListItem"><a href="#/senhaCriar"><button className="menuButton">Criar senha</button></a></li>
                        <div className="ui divider"></div>
                    </If>
                    <If test={fluxo == 0 || fluxo == 1 || fluxo == 3 || fluxo == 4 || fluxo == 5}>
                        <li onClick={() => this.showSenhasFila()} className="menuListItem"><a href="#/senhasFila"><button className="menuButton">Senhas na fila</button></a></li>
                        <div className="ui divider"></div>
                    </If>
                    <If test={fluxo == 0 || fluxo == 1 || fluxo == 2 || fluxo == 3 || fluxo == 4 || fluxo == 5}>
                        <li className="menuListItem"><ModalBTInput name="Cancelar senha" titulo="Digite a senha que deseja cancelar abaixo!" placeholder="Digite a senha a ser cancelada aqui" ></ModalBTInput></li>
                        <div className="ui divider"></div>
                    </If>
                    <If test={fluxo == 2}>
                        <li className="menuListItem"><button className="menuButton">Cancela atendimento</button></li>
                        <div className="ui divider"></div>
                    </If>
                    <If test={fluxo == 1}>
                        <li className="menuListItem"><button className="menuButton">Descongelar senha</button></li>
                        <div className="ui divider"></div>
                    </If>
                    <If test={fluxo == 1}>
                        <li className="menuListItem"><button className="menuButton">Filtro prioridade</button></li>
                        <div className="ui divider"></div>
                    </If>
                    <If test={fluxo == 1}>
                        <li className="menuListItem"><button className="menuButton">Filtro categoria</button></li>
                        <div className="ui divider"></div>
                    </If>
                    <If test={fluxo == 1}>
                        <li className="menuListItem"><button className="menuButton">Filtro Atividade</button></li>
                        <div className="ui divider"></div>
                    </If>
                    <If test={fluxo == 1}>
                        <li className="menuListItem"><button className="menuButton">Exclui Atividade</button></li>
                        <div className="ui divider"></div>
                    </If>
                </ul>
            </div>
        )

    }

    render() {
        let { fluxo } = this.props
        return (
            <div className="MenuOptionsList">
                {this.renderRows(fluxo)}
            </div>
            
        )
    }
    
}

const mapStateToProps = state => ({fluxo: state.senha.fluxo, senhaAtual: state.senha.senhaAtual, senhasFila: state.senha.senhasFila, senhasList: state.senha.senhasList})

const mapDispatchToProps = dispatch => bindActionCreators({ changeFluxo, nextTicket, changeSenha, insertSenhaList, finalizaSenhaList }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MenuLateralOficial)