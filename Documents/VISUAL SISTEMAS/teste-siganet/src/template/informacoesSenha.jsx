import React, { Component } from 'react'

import { useTranslation, Trans } from "react-i18next";

import i18n from '../i18n';
import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'


class InformacoesSenha extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { fluxo, senhaAtual, clienteAtual, prioridade, servico, atividade } = this.props

        if(fluxo != 0) {
            return (
                <div className="contentBody">
                    <div className="bottom">
                        <div className="line1 line">
                            <div className="dispInfo">
                                <div className="prop">
                                    <span className="bold">Senha</span>
                                </div>
                                <div className="ui vertical divider"></div>
                                <div className="resp">
                                    <span>{senhaAtual}</span>
                                </div>
                            </div>
                        </div>
                        <div className="line2 line">
                            <div className="dispInfo">
                                <div className="prop">
                                    <span className="bold">Cliente</span>
                                </div>
                                <div className="ui vertical divider"></div>
                                <div className="resp">
                                    <span>{clienteAtual}</span>
                                </div>
                            </div>
                        </div>
                        <div className="line2 line">
                            <div className="dispInfo">
                                <div className="prop">
                                    <span className="bold">Prioridade</span>
                                </div>
                                <div className="ui vertical divider"></div>
                                <div className="resp">
                                    <span>{prioridade}</span>
                                </div>
                            </div>
                        </div>
                        <div className="line3 line">
                            <div className="dispInfo">
                                <div className="prop">
                                    <span className="bold">Serviço</span>
                                </div>
                                <div className="ui vertical divider"></div>
                                <div className="resp">
                                    <span>{servico}</span>
                                </div>
                            </div>
                        </div>
                        <div className="line3 line">
                            <div className="dispInfo">
                                <div className="prop">
                                    <span className="bold">Atividade</span>
                                </div>
                                <div className="ui vertical divider"></div>
                                <div className="resp">
                                    <span>{atividade}</span>
                                </div>
                            </div>
                        </div>
                        <div className="line3 line">
                            <div className="dispInfo">
                                <div className="prop">
                                    <span className="bold">Tempo total de espera</span>
                                </div>
                                <div className="ui vertical divider"></div>
                                <div className="resp">
                                    <span>0:00:00</span>
                                </div>
                            </div>
                        </div>
                        <div className="line3 line">
                            <div className="dispInfo">
                                <div className="prop">
                                    <span className="bold">Tempo total de atendimento efetivo</span>
                                </div>
                                <div className="ui vertical divider"></div>
                                <div className="resp">
                                    <span>0:00:00</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            )
        } else {
            return (
                <div className="contentBody"></div>
            )
        }


        
    }

}



const mapStateToProps = state => ({fluxo: state.senha.fluxo, senhaAtual: state.senha.senhaAtual, clienteAtual: state.senha.clienteAtual, prioridade: state.senha.prioridade, servico: state.senha.servico, atividade: state.senha.atividade})

const mapDispatchToProps = dispatch => bindActionCreators({ }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(InformacoesSenha)