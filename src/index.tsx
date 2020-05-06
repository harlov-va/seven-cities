import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as React from 'react'
import * as ReactDom from 'react-dom';
import App from './components/app/app';
import reviews from './mocks/reviews';
import { reducer } from './reducer';

const init = (reviewsOfOffer) => {
    const store = createStore(reducer);

    ReactDom.render(<Provider store={store}>
        <App reviews={reviewsOfOffer} />
        </Provider>,
        document.querySelector(`#root`)
    );
}

init(reviews);