import * as React from "react";
import { ICity } from '../../types';

interface IProps {
  onTabClick: (city: string) => void,
  cities: ICity[]
}

export default class ListCities extends React.PureComponent<IProps>{
  constructor(props) {
    super(props);    
    this.state = {
      selectedTab: ``,
    }
  }
  _isActive(tabCity) {
    return this.state[`selectedTab`] === tabCity;
  };
  _setActiveTab(event) {
    const onTabClick = this.props[`onTabClick`];
    this.setState({ selectedTab: event.target.textContent});
    onTabClick(event.target.textContent);
  };
  render() {
    const { cities } = this.props;    
    return <div className="tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list" onClick={this._setActiveTab.bind(this)}>
          {cities.map((city) => {
            return <li className="locations__item" key={city.name}>
              <a className={this._isActive(city.name) ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'} href="#">
                <span>{city.name}</span>
              </a>
            </li>
          })}
        </ul>
      </section>
    </div>
  }
}