import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Restaurante from './pages/Restaurante'


const Roteamento = () => {
    return(
        <Switch>
            <Route path="/" exact component={Restaurante}/>
            <Route path="*" component={()=>(<div>Pagina 404</div>)}/>
        </Switch>
    )
}

export default Roteamento