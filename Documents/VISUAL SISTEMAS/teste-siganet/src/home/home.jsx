import React from 'react'

import TelaBasica from '../template/telaBasica'

import Cabecalho from '../template/cabecalho'

import Corpo from '../template/corpo'

import { Divider, Radio, Rating, Grid, Dimmer, Loader, Image, Segment, Button, Icon } from 'semantic-ui-react'

import i18n from '../i18n';

import { useTranslation, Trans } from "react-i18next";

export default props => (

    <TelaBasica>

        <Cabecalho unidade="TRIBUNAL REGIONAL DO TRABALHO" secao={i18n.t('Atendimento')} fila={i18n.t('Fila')} 
            guiche={i18n.t('Guiche')} atendente={i18n.t('Atendente')} status={i18n.t('Status')} tempo={i18n.t('Tempo')} hora={i18n.t('Hora')}></Cabecalho>
        <Corpo></Corpo>
        
    </TelaBasica>
)