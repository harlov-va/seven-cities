import * as React from 'react';
import { ListOffers } from '../list-offers/list-offers';
import { Map } from '../map/map';
import ListCities from '../list-cities/list-cities'
import SortingOptions from '../sorting-options/sorting-options';
import withActiveItem from '../../hocs/with-active-item';

const SortingOptionsWrapped = withActiveItem(SortingOptions);

const Main = (props) => {
  const { city, offers, cities, hoverId, onCardClick, onTabClick, onChangeSorting, onHoverCard } = props;
  
  return <React.Fragment>
    <div className="page page--gray page--main">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link header__logo-link--active">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41" />
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">Oliver.conner@gmail.com</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <ListCities cities={cities} onTabClick={onTabClick} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length !== 0 ? offers.length : `No`} places to stay in {city.name}</b>
              <SortingOptionsWrapped onChangeSorting={onChangeSorting} />
              <ListOffers offers={offers} onCardClick={onCardClick} onHoverCard={onHoverCard} />
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
    </div>

  </React.Fragment>;
}

// const mapStateToProps = (state, ownProps) => Object.assign({},ownProps,{
//   city: state.city,
//   offers: state.offers,
//   cities: state.cities,
//   activeCard: state.activeCard,
// });


export default Main;
// export default connect(mapStateToProps)(Main);