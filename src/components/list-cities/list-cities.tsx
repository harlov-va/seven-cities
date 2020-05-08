import * as React from "react";

interface IProps {
  onTabClick: (city: string) => void,
  cities: string[]
}

export default class ListCities extends React.PureComponent<IProps>{
  constructor(props) {
    super(props);
    const { cities } = this.props;  
    this.state = {
      selectedTab: cities[0],
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
            return <li className="locations__item" key={city}>
              <a className={this._isActive(city) ? 'locations__item-link tabs__item tabs__item--active' : 'locations__item-link tabs__item'} href="#">
                <span>{city}</span>
              </a>
            </li>
          })}
        </ul>
      </section>
    </div>
  }
}