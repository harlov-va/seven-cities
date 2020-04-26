import * as React from 'react'
import * as ReactDom from 'react-dom';
import {App} from './components/app/app';
import offers from './mocks/offers';
import reviews from './mocks/reviews';

ReactDom.render(
    <App offers={offers} reviews={reviews}/>,
    document.querySelector(`#root`)
);