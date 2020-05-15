import * as React from 'react';
import ListCities from '../list-cities/list-cities';
import { Header } from '../header/header';

const MainEmpty = (props) => {
  const { city, 
          cities, 
          isAuthorizationRequired, 
          user, 
          onTabClick, 
        } = props;
  
  return <React.Fragment>    
    <div className="page page--gray page--main">
    <Header 
        isAuthorizationRequired={isAuthorizationRequired}
        user={user}
      />

      <main className="page__main page__main--index page__main--index-empty">
        <h1 className="visually-hidden">Cities</h1>
        <ListCities cities={cities} onTabClick={onTabClick}/>
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
    </div>

  </React.Fragment>;
}

export default MainEmpty;