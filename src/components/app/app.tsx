import { connect } from 'react-redux';
import * as React from 'react';
import Main from '../main/main';
import MainEmpty from '../main-empty/main-empty';
import { Property } from '../property/property';
import { SignIn } from '../sign-in/sign-in';
import { ActionCreator, Operation } from '../../reducer/reducer';
import { getSortedOffers } from '../../reducer/selectors';

interface IUser {
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
    host: IUser,
    description: string,
    location: ILocation,
}
interface IReview {
    id: number,
    user: IUser,
    rating: number,
    comment: string,
    date: string,
}
interface IProps {
    reviews: IReview[],
    loadReviews: (id: number) => void,
}

class App extends React.PureComponent<IProps>{
    static getScreen(id, props, onUserClick) {
        const {
            city,
            offers,
            cities,
            hoverId,
            reviews,
            isAuthorizationRequired,
            user,
            onTabClick,
            onChangeSorting,
            onHoverCard,
            onLogin,
            onFormCommentSumbit,
            
        } = props;

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
                    isAuthorizationRequired={isAuthorizationRequired}
                    user={user}
                />;
            } else {
                return <MainEmpty
                    city={city}
                    cities={cities}
                    onTabClick={onTabClick}
                    isAuthorizationRequired={isAuthorizationRequired}
                    user={user}
                />
            }
        }
        const neighbours: IOffer[] = [];
        let curOffer;
        for (let item of offers) {
            if (item.id === id) {
                curOffer = { ...item };
                break;
            }
        }
        offers.forEach((elem) => {
            if ((curOffer.id !== elem.id) &&
                (Math.abs(curOffer.location.latitude.toFixed(2) - elem.location.latitude.toFixed(2)) <= 0.05) &&
                (Math.abs(curOffer.location.longitude.toFixed(2) - elem.location.longitude.toFixed(2)) <= 0.05)) {
                neighbours.push({ ...elem });
            }
        });

        if (id > -1) {
            if (isAuthorizationRequired) {
                return <SignIn onLogin={onLogin} />;
            }            
            return <Property city={city}
                neighbours={neighbours}
                reviews={reviews}
                currentOffer={curOffer}
                isAuthorizationRequired={isAuthorizationRequired}
                user={user}
                onCardClick={onUserClick}
                onFormCommentSumbit={onFormCommentSumbit}
            />
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
        const {loadReviews} = this.props;
        return App.getScreen(id, this.props, (cardId) => {
            this.setState({ id: cardId });
            loadReviews(cardId);
        });
    }
}

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
    city: state.city,
    offers: getSortedOffers(state),
    cities: state.cities,
    hoverId: state.hoverId,
    isAuthorizationRequired: state.isAuthorizationRequired,
    user: state.user,
    reviews: state.reviews,
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
    onLogin: (evt: any): void => {
        evt.preventDefault();
        dispatch(Operation.login(evt));
    },
    onFormCommentSumbit: (evt: any, id: number): void => {
        evt.preventDefault();
        dispatch(Operation.sendComment(evt, id));
        dispatch(Operation.loadReviews(id));
    },
    loadReviews: (id: number): void => {
        dispatch(Operation.loadReviews(id));
    },
});

export {
    App,
    IUser,
    ILocation,
    ICity,
    IOffer,
    IReview,
    IProps,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);