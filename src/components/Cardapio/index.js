import React, { Component} from 'react';
import './Cardapio.css';

import CardapioItem from '../CardapioItem';

class Cardapio extends Component {

    render() {
        return (
            <div className="cardapio">  
                <div className="cardapio-header">
                    <h2>Cardápio</h2>
                </div>       
                <div className="cardapio-body">
                    {!this.props.display?         
                        <p className="mensagem">Faça o login para ter acesso ao cardápio...</p> :

                        <ul>
                            {this.props.cardapio.map(item=> 
                                <li key={item.id}><CardapioItem {...item}></CardapioItem></li>)}
                        </ul>
                    }
                </div>
            </div>
        );
    }
}

export default Cardapio;
