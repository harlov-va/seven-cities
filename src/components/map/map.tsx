import * as React from 'react';
import * as leaflet from 'leaflet';
import { IOffer } from '../app/app';

interface ICords {
  cords: number[]
}

interface IProps {
  className: string,
  offers: IOffer[],
  hoverId: number,  
}

export class Map extends React.PureComponent<IProps> {
  private icon: object;
  private iconActive: object;
  private layer: any;
  private mapRef: any;
  constructor(props) {
    super(props);
    this.mapRef = React.createRef();
    this.icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    this.iconActive = leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30]
    });
  }

  componentDidMount() {
    const city = [52.38333, 4.9];
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });
    const zoom = 12;
    const map = leaflet.map(this.mapRef.current, {
      center: city,
      zoom: zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      })
      .addTo(map);
    const { offers } = this.props;
    const markerArray = [];
    offers.forEach((elem: IOffer) => {
      markerArray.push(leaflet.marker(elem.cords, {icon}))
    });
    this.layer = leaflet.featureGroup(markerArray).addTo(map);
  }

  componentDidUpdate(prevProps) {    
    if (prevProps.offers !== this.props.offers || prevProps.hoverOfferId !== this.props.hoverId) {
      this.updateMarkers(this.props.offers);
    }
  }

  updateMarkers(offers) {
    this.layer.clearLayers();
    offers.forEach((offer) => {
      leaflet
        .marker(offer.cords, {icon: offer.id === this.props.hoverId ? this.iconActive : this.icon})
        .addTo(this.layer);
    });
  }

  render() {
    // return <div id="map" style={{width: `100%`, height: `100%`}}></div>    
    const {className} = this.props;

    return (
      <section
        className={`map${className ? ` ` + className : ``}`}
        ref={this.mapRef}
      />
    );
  }
}
