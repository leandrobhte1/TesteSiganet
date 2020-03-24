//  import 'modules/bootstrap/dist/css/bootstrap.min.css'
//  import 'modules/font-awesome/css/font-awesome.min.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../template/custom.css'

import { useTranslation, Trans } from "react-i18next";

import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'

export default function App() {

    let { t, i18n } = useTranslation();

    let changeLanguage = lng => {
        i18n.changeLanguage(lng);
        window.location.reload(true) // to render again the input and table components and translate them
    };

  return (

    <div className="">
      <div className="topMenu">
        <Menu></Menu>
        <div className="buttonsMenu">
          <button className="ptBR" onClick={() => changeLanguage("pt")}></button>
          <button className="en" onClick={() => changeLanguage("en")}></button>
        </div>
      </div>
        <Routes></Routes>
    </div>

  )
    
}