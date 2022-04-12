import React from 'react'
import ReactDOM from 'react-dom'

// import Primeiro from './compenentes/Primeiro'
// import BomDia from './compenentes/BomDia'

// import { BoaTarde, BoaNoite } from './compenentes/Multiplos'

import Saudacao from './compenentes/Saudacao'
import Pai from './compenentes/Pai'
import Filho from './compenentes/Filho'

// ReactDOM.render(<BomDia nome='Marcus' />,document.getElementById('root'))

ReactDOM.render(
    <div>
        <Pai nome="Paulo" sobrenome="Silva">
            <Filho nome="Pedro" />
            <Filho nome="Paulo" />
            <Filho nome="Carla" />
        
        </Pai>
    </div>
,document.getElementById('root'))