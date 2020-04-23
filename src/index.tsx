import * as React from 'react'
import * as ReactDom from 'react-dom';
import {App} from './components/app/app';
import offers from './mocks/offers';

ReactDom.render(
    <App offers={offers}/>,
    document.querySelector(`#root`)
);