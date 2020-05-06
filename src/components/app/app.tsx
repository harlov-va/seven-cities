import {connect} from 'react-redux';
import * as React from 'react';
import { Main } from '../main/main';
import { Property } from '../property/property';
import {ActionCreator} from '../../reducer';

export interface IOffer {
    id: number,
    city: string,
    price: number,
    description: string,
    rating: number,
    type: `Apartment` | `Private room`,
    img: string,
    cords: number[],
    features: string[],
    inside: string[],
}
export interface IReview {
    name: string,
    avatar: string,
    rating: number,
    description: string,
    date: number
  }
export interface IProps {    
    reviews: IReview[]
}

class App extends React.PureComponent<IProps>{
    static getScreen(id, props, onUserClick) {
        const { city, offers, cities, reviews, onTabClick } = props;
        if (id === -1) {
            return <Main cities={cities} 
            offers={offers} 
            onChoice={onUserClick} onTabClick={onTabClick}/>;
        }
        const neighbours: IOffer[] = [];        
        let curOffer;
        for (let item of offers) {
            if (item.id === id) {
                curOffer = item;
                break;
            }
        }
        offers.forEach((elem) => {
            if ((curOffer.id !== elem.id) &&
                (Math.abs(curOffer.cords[0].toFixed(2) - elem.cords[0].toFixed(2)) <= 0.05) &&
                (Math.abs(curOffer.cords[1].toFixed(2) - elem.cords[1].toFixed(2)) <= 0.05)) {
                neighbours.push(elem);
            }
        });
        
        if (id > -1) {
            return <Property neighbours={neighbours} reviews={reviews} currentOffer={curOffer} onChoice={onUserClick} />
        }
        return null;
    }
    constructor(props) {
        super(props);
        this.state = {
            id: -1,
        };
    }
    render() {
        const id: number = this.state[`id`];
        return App.getScreen(id, this.props, (cardId) => {            
            this.setState((prevState) => ({
                id: cardId
            }))
        });
    }
}

const mapStateToProps = (state, ownProps) => Object.assign({},ownProps,{
    city: state.city,
    offers: state.offers,
    cities: state.cities,
});

const mapDispatchToProps = (dispatch) => ({
    onTabClick: (newCity:string):void => {
        dispatch(ActionCreator.changeCity(newCity));
        dispatch(ActionCreator.getOffers(newCity));
    }
});

export {App};

export default connect(mapStateToProps, mapDispatchToProps)(App);