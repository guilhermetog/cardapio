import React, { Component} from 'react';
import PropTypes from 'prop-types';
import * as RestauranteAPI from '../../apis/RestauranteAPI';
import './LoginForm.css';


class LoginForm extends Component {
    efetuarLogin =(e)=>{
        e.preventDefault()
        RestauranteAPI.fakeLogin(e.target.user.value,e.target.password.value,(data)=>{
            this.context.store.dispatch({type:"LOGIN", data})
        })
        let token = this.context.store.getState().login.token;
        if(token){
            RestauranteAPI.getCardapio(token,(data)=>{
                this.context.store.dispatch({type:"GET_CARDAPIO",data})
            })
        }
    }

    render() {
        return (
            <form className="login-form" onSubmit={this.efetuarLogin}>
                <input type="text" name="user" placeholder="email..." required></input>
                <input type="password" name="password" placeholder="senha..." required></input>
                <button className="btn">Login</button>
            </form>
        )
    }
}

LoginForm.contextTypes = {
    store: PropTypes.object.isRequired
}

export default LoginForm;
