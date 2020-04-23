import * as React from 'react';
import {Main} from '../main/main';
import offers from '../../mocks/offers';

export const App = (props) => {  
    return <Main offers={offers}/>;
}