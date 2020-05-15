import * as React from 'react';
import { ListOffers } from '../list-offers/list-offers';
import { Map } from '../map/map';
import ListCities from '../list-cities/list-cities'
import SortingOptions from '../sorting-options/sorting-options';
import withActiveItem from '../../hocs/with-active-item';
import { Header } from '../header/header';

const SortingOptionsWrapped = withActiveItem(SortingOptions);

const Main = (props) => {
  const { city, 
          offers, 
          cities, 
          hoverId, 
          onCardClick, 
          onTabClick, 
          onChangeSorting, 
          onHoverCard,
          isAuthorizationRequired,
          user
        } = props;
  
  return <React.Fragment>
    <div className="page page--gray page--main">
      <Header 
        isAuthorizationRequired={isAuthorizationRequired}
        user={user}
      />
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