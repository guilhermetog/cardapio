import React from 'react';
import ReactDOM from 'react-dom';

// CSS Global


//Config
import Roteamento from './routes'
import {BrowserRouter} from 'react-router-dom'
import registerServiceWorker from './registerServiceWorker';


//Redux
import store from './store'
import {Provider} from 'react-redux'

//Roteador
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Roteamento/>
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));



registerServiceWorker();
