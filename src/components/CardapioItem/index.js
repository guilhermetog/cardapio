import React, { Component} from 'react';
import './CardapioItem.css';

class CardapioItem extends Component {

    render() {
        return (
            <div className="cardapio-item">
                <div className="card-item-header">
                    <h2 className="card-item-nome">{this.props.name}</h2>
                    <h2 className="card-item-preco">R${this.props.price.toFixed(2)}</h2>
                </div>
                <p className="card-item-desc">{this.props.description}</p>
            </div>
        );
    }
}

export default CardapioItem;
