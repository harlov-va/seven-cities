import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import * as React from 'react'
import * as ReactDom from 'react-dom';
import App from './components/app/app';
import reviews from './mocks/reviews';
import { reducer, Operation } from './reducer/reducer';
import thunk from 'redux-thunk';
import { compose } from 'recompose';
import { createAPI } from './api';

const init = (reviewsOfOffer) => {
    const api = createAPI((obj) => store.dispatch(obj));
    const store = createStore(reducer,
        compose(
            applyMiddleware(thunk.withExtraArgument(api)),    
            window[`__REDUX_DEVTOOLS_EXTENSION__`] ? window[`__REDUX_DEVTOOLS_EXTENSION__`]() : (f) => f
        )
    );            
    store.dispatch(Operation.loadOffers());
    ReactDom.render(<Provider store={store}>
        <App reviews={reviewsOfOffer} />
        </Provider>,
        document.querySelector(`#root`)
    );
}

init(reviews);