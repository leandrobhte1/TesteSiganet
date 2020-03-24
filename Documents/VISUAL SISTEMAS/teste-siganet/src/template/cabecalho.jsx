import React, { Component } from 'react'

import { useTranslation, Trans } from "react-i18next";

import i18n from '../i18n';

import { connect } from 'react-redux'
import { bindActionCreators} from 'redux'

import { changeFluxo, nextTicket } from '../senha/senhaActions'

class Cabecalho extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let { senhasFila, atendente , guiche, secao, unidade } = this.props

        let hora = 0;
        let minutos = 0;
        let dia = 0;
        let mes = 0;


        let dNow = new Date();

        if(dNow.getHours() < 10 ){
            hora = "0" + dNow.getHours();
        }else {
            hora = dNow.getHours();
        }

        if(dNow.getDate() < 10 ){
            dia = "0" + dNow.getDate();
        }else {
            dia = dNow.getDate();
        }

        if(dNow.getMinutes() < 10 ){
            minutos = "0" + dNow.getMinutes();
        }else {
            minutos = dNow.getMinutes();
        }

        if((dNow.getMonth()+1) < 10) {
            mes = "0" + (dNow.getMonth()+1);
        }else {
            mes = (dNow.getMonth()+1);
        }

        let localdate = dia + '/' + mes + '/' + dNow.getFullYear() + ' - ' + hora + ':' + minutos;

        return (
            <div className="cabecalho">
                <div className="line0">
                    <h3>{unidade}</h3>
                </div>
                <div className="ui divider"></div>
                <div className="bottom">
                    <div className="line1 line">
                        <div className="cabecalho__secao cspace">
                            <div className="prop">
                                <span className="bold">Seção</span>
                            </div>
                            <div className="resp">
                                <span>{secao}</span>
                            </div>
                        </div>
                        <div className="ui vertical divider"></div>
                        <div className="cabecalho__fila cspace">
                            <div className="prop pl20">
                                <span className="bold">Fila</span>
                            </div>
                            <div className="resp">
                                <span>{senhasFila} senha(s)</span>
                            </div>
                        </div>
                    </div>
                    <div className="line2 line">
                        <div className="cabecalho__guiche cspace">
                        <div className="prop">
                                <span className="bold">Guiche</span>
                            </div>
                            <div className="resp">
                                <span>{guiche}</span>
                            </div>
                        </div>
                        <div className="cabecalho__atendente cspace">
                        <div className="prop pl20">
                                <span className="bold">Atendente</span>
                            </div>
                            <div className="resp">
                                <span>{atendente}</span>
                            </div>
                        </div>
                    </div>
                    <div className="line3 line">
                        <div className="cabecalho__status cspace">
                        <div className="prop">
                                <span className="bold">Status</span>
                            </div>
                            <div className="resp">
                                <span>{senhasFila ? 'COM SENHAS NA FILA' : 'SEM SENHAS NA FILA'}</span>
                            </div>
                        </div>
                        <div className="cabecalho__tempo cspace">
                        <div className="prop pl20">
                                <span className="bold">Tempo</span>
                            </div>
                            <div className="resp">
                                <span>0:08:29</span>
                            </div>
                        </div>
                    </div>
                    <div className="line4 line">
                        <div className="cabecalho__hora cspace">
                        <div className="prop pl20">
                                <span className="bold">Hora</span>
                            </div>
                            <div className="resp">
                                <span>{localdate}</span>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )

    }

}

const mapStateToProps = state => ({fluxo: state.senha.fluxo, secao: state.senha.secao, guiche: state.senha.guiche, senhaAtual: state.senha.senhaAtual, senhasFila: state.senha.senhasFila, atendente: state.senha.atendente})

const mapDispatchToProps = dispatch => bindActionCreators({ changeFluxo, nextTicket }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Cabecalho)