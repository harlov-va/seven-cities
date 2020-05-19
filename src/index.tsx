import * as React from 'react'
import * as ReactDom from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import App from './components/app/app';
import { reducer, Operation } from './reducer/reducer';
import thunk from 'redux-thunk';
import { compose } from 'recompose';
import { createAPI } from './api';

const history = createBrowserHistory();
const init = () => {
    // const api = createAPI((obj) => store.dispatch(obj));
    const api = createAPI(() => history.push(`/login`));
    const store = createStore(reducer,
        compose(
            applyMiddleware(thunk.withExtraArgument(api)),
            window[`__REDUX_DEVTOOLS_EXTENSION__`] ? window[`__REDUX_DEVTOOLS_EXTENSION__`]() : (f) => f
        )
    );
    
    store.dispatch(Operation.loadOffers());

    ReactDom.render(
        <Provider store={store}>
        <Router history={history}>
            <App />
        </Router>
        </Provider>,
        document.querySelector(`#root`)
    );
}

init();