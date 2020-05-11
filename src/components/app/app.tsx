import { connect } from 'react-redux';
import * as React from 'react';
import Main from '../main/main';
import MainEmpty from '../main-empty/main-empty';
import { Property } from '../property/property';
import { ActionCreator } from '../../reducer/reducer';

interface IHost {
    id: number,
    name: string,
    is_pro: boolean,
    avatar_url: string
}
interface ILocation {
    latitude: number,
    longitude: number,
    zoom: number
}
interface ICity {
    name: string,
    location: ILocation,
}
interface IOffer {
    id: number,
    city: ICity,
    preview_image: string,
    images: string[],
    title: string,
    is_favorite: boolean,
    is_premium: boolean,
    rating: number,
    type: string,
    bedrooms: number,
    max_adults: number,
    price: number,
    goods: string[],
    host: IHost,
    description: string,
    location: ILocation,
}
interface IReview {
    name: string,
    avatar: string,
    rating: number,
    description: string,
    date: number
}
interface IProps {
    reviews: IReview[]
}

class App extends React.PureComponent<IProps>{
    static getScreen(id, props, onUserClick) {
        const { city, offers, cities, hoverId, reviews, onTabClick, onChangeSorting, onHoverCard } = props;
        
        if (id === -1) {
            if (offers.length > 0) {
                return <Main
                    city={city}
                    cities={cities}
                    offers={offers}
                    hoverId={hoverId}
                    onCardClick={onUserClick}
                    onTabClick={onTabClick}
                    onChangeSorting={onChangeSorting}
                    onHoverCard={onHoverCard}
                />;
            } else {
                return <MainEmpty
                    city={city}
                    cities={cities}
                    onTabClick={onTabClick}
                />
            }
        }
        const neighbours: IOffer[] = [];
        let curOffer;
        for (let item of offers) {
            if (item.id === id) {
                curOffer = {...item};
                break;
            }
        }
        offers.forEach((elem) => {
            if ((curOffer.id !== elem.id) &&
                (Math.abs(curOffer.location.latitude.toFixed(2) - elem.location.latitude.toFixed(2)) <= 0.05) &&
                (Math.abs(curOffer.location.longitude.toFixed(2) - elem.location.longitude.toFixed(2)) <= 0.05)) {
                neighbours.push({...elem});
            }
        });

        if (id > -1) {
            return <Property city={city} neighbours={neighbours} reviews={reviews} currentOffer={curOffer} onCardClick={onUserClick} />
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

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
    city: state.city,
    offers: state.offers,
    cities: state.cities,
    hoverId: state.hoverId,
});

const mapDispatchToProps = (dispatch) => ({
    onTabClick: (newCity: string): void => {
        dispatch(ActionCreator.changeCity(newCity));
        dispatch(ActionCreator.getOffers(newCity));
    },
    onChangeSorting: (sort: string): void => {
        dispatch(ActionCreator.sorting(sort));
    },
    onHoverCard: (hoverId: number): void => {
        dispatch(ActionCreator.hoverCard(hoverId));
    },
});

export { 
    App,
    IHost,
    ILocation,
    ICity,
    IOffer,
    IReview,
    IProps,    
 };

export default connect(mapStateToProps, mapDispatchToProps)(App);