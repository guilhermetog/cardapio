import React, { Component} from 'react';
import './RestauranteInfo.css';

import StarsControl from '../StarsControl';


class RestauranteInfo extends Component {

    render() {
        return (
            <div className="restaurante-info">
                <div className="rest-info-header">
                    <h2>{this.props.nome}</h2>
                    <StarsControl indice={this.props.avaliacoes}></StarsControl>
                </div>
                <div className="rest-info-body">
                    <p className={`horario ${this.props.aberto?'aberto':'fechado'}`}><i className="fas fa-clock"></i>{this.props.aberto?'Aberto Agora':'Fechado Agora'}</p>
                    <p className="especialidade"><i className="fas fa-utensils"></i>{this.props.categoria}</p>
                    <p className="preco"><i className="fas fa-dollar-sign"></i>{this.props.preco}</p>
                    <p className="local"><i className="fas fa-map-marker-alt"></i>{this.props.endereco}</p>
                    <p className="pagamento"><i className="fas fa-credit-card"></i>{this.props.pagamento}</p>
                </div>
            </div>
        );
    }
}


export default RestauranteInfo;
