import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import * as RestauranteAPI from '../../apis/RestauranteAPI';
import './Restaurante.css';

import RestauranteInfo from '../../components/RestauranteInfo';
import Cardapio from '../../components/Cardapio';
import LoginForm from '../../components/LoginForm';

class Restaurante extends Component {
    constructor(){
        super()
        
        this.state = {
            logado:false,
            infos:{},
            cardapio:[]
        }
    }

    componentWillMount(){

        this.context.store.subscribe(()=>{
            const store_state = this.context.store.getState()
            this.setState({
                infos: store_state.restaurante.infos,
                logado: store_state.login.token?true:false,
                cardapio: store_state.restaurante.cardapio
            })
        })

        RestauranteAPI.getRestaurante((data)=>{
            this.context.store.dispatch({type:'GET_RESTAURANTE',data});
        })
    }


    render() {
        return (
        <Fragment>
            <div className="restaurante-page">
                <header>
                    <LoginForm store={this.context.store}></LoginForm>
                </header>
                <div className="container">
                    <RestauranteInfo {...this.state.infos}></RestauranteInfo>
                    <Cardapio cardapio={this.state.cardapio} display={this.state.logado}></Cardapio>
                </div>
            </div>
        </Fragment>
        );
    }
}

Restaurante.contextTypes = {
    store: PropTypes.object.isRequired
}

export default Restaurante;
