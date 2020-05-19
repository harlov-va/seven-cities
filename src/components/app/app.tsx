import { connect } from 'react-redux';
import * as React from 'react';
import Main from '../main/main';
import Property from '../property/property';
import SignIn from '../sign-in/sign-in';
import Favorites from '../favorites/favorites';
import { ActionCreator, Operation } from '../../reducer/reducer';
import { getSortedOffers } from '../../reducer/selectors';
import { Switch, Route, Redirect } from 'react-router-dom';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();
const PrivateRoute = ({ component: Component, isAuthorizationRequired, ...rest }) => (
    <Route
        {...rest}
        render={(props) => (
            Boolean(!isAuthorizationRequired)
                ? <Component {...props} />
                : <Redirect to="/login" />
        )
        }
    />
);

const App = (props) => {
    const { isAuthorizationRequired } = props;
    return (
        <Switch>
            <Route path="/" exact component={Main} />
            <Route path="/login" exact component={SignIn} />
            <Route path="/favorites" exact component={Favorites} />
            <PrivateRoute path="/property/:id" isAuthorizationRequired={isAuthorizationRequired} exact component={Property} />
        </Switch>
    )
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
};

export default connect(mapStateToProps, mapDispatchToProps)(App);