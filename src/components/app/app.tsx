import * as React from 'react';
import {Main} from '../main/main';
// import offers from '../../mocks/offers';

export interface IOffer {
    city: string,
    price: number,
    description: string,
    rating: number,
    type: `Apartment` | `Private room`,
    img: string,
    coor: number[]
}

export interface IProps {
    offers: IOffer[]
}

export class App extends React.PureComponent<IProps>{
    static getScreen(question, props, onUserFocus){
        if(question === -1){
            const { gameTime, errorCount} = props;
            // return <WelcomeScreen time={gameTime} errorCount={errorCount} onHoveHendler={onUserFocus} />
        }
        const { offers} = props;
        return <Main offers={offers}/>;
    }
    constructor(props){
        super(props);
        this.state = {
            question: 1,
        };
    }
    render() {
        const  question:number  = this.state[`question`];
        return App.getScreen(question, this.props, () => {
            // console.log(`Наведен на карточку`);
            // this.setState((prevState) => {
				// question: prevState.question + 1,
            // })
        });
    }
}