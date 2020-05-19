import { connect } from 'react-redux';
import * as React from 'react';
import ListOffers from '../list-offers/list-offers';
import { Map } from '../map/map';
import ListCities from '../list-cities/list-cities'
import SortingOptions from '../sorting-options/sorting-options';
import withActiveItem from '../../hocs/with-active-item';
import { Header } from '../header/header';
import { getSortedOffers } from '../../reducer/selectors';
import { ActionCreator, Operation } from '../../reducer/reducer';
import offers from '../../mocks/offers';
import { IOffer } from '../../types';

const SortingOptionsWrapped = withActiveItem(SortingOptions);

const Main = (props) => {
  const { city,
    offers,
    cities,
    hoverId,
    onTabClick,
    onChangeSorting,
    onHoverCard,
    isAuthorizationRequired,
    user,
    onFavoriteClick,
  } = props;

  return <React.Fragment>
    <div className="page page--gray page--main">
      <Header
        isAuthorizationRequired={isAuthorizationRequired}
        user={user}
      />
      {(offers.length > 0)
        ? <main className="page__main page__main--index">
          <h1 className="visually-hidden">Cities</h1>
          <ListCities cities={cities} onTabClick={onTabClick} />
          <div className="cities">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{offers.length !== 0 ? offers.length : `No`} places to stay in {city.name}</b>
                <SortingOptionsWrapped onChangeSorting={onChangeSorting} />
                <ListOffers
                  offers={offers}
                  onHoverCard={onHoverCard}
                  onFavoriteClick={onFavoriteClick}
                />
              </section>
              <div className="cities__right-section">
                <Map
                  className="cities__map"
                  offers={offers}
                  city={city}
                  hoverId={hoverId}
                />
              </div>
            </div>
          </div>
        </main>
        : <main className="page__main page__main--index page__main--index-empty">
          <h1 className="visually-hidden">Cities</h1>
          <ListCities cities={cities} onTabClick={onTabClick} />
          <div className="cities">
            <div className="cities__places-container cities__places-container--empty container">
              <section className="cities__no-places">
                <div className="cities__status-wrapper tabs__content">
                  <b className="cities__status">No places to stay available</b>
                  <p className="cities__status-description">We could not find any property availbale at the moment in {city.name}</p>
                </div>
              </section>
              <div className="cities__right-section"></div>
            </div>
          </div>
        </main>
      }
    </div>

  </React.Fragment>;
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
  onFavoriteClick: (offer: IOffer): void => {
      dispatch(Operation.changeOfferFavoriteStatus(offer.id, !offer.is_favorite));    
  },
});

export {
  Main,
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);