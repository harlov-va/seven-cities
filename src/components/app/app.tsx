import * as React from 'react';
import {Main} from '../main/main';
import { Property } from '../property/property';

export interface IOffer {
    id: number,
    city: string,
    price: number,
    description: string,
    rating: number,
    type: `Apartment` | `Private room`,
    img: string,
    cords: number[]
}

export interface IProps {
    offers: IOffer[]
}

export class App extends React.PureComponent<IProps>{
    static getScreen(id, props, onUserClick){
        const { offers } = props;
        if(id === -1){
            return <Main offers={offers}/>;
        }
        if(id > -1){
            return <Property offers = {offers} onChoice= {onUserClick}/>
        }
        return null;
    }
    constructor(props){
        super(props);
        this.state = {
            id: -1,
        };
    }
    render() {
        const id:number = this.state[`question`];
        return App.getScreen(id, this.props, (cardId) => {
            console.log(`cardId`);
            this.setState(() => {
				id: cardId
            })
        });
    }
}
