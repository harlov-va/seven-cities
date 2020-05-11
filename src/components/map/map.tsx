import * as React from 'react';
import * as leaflet from 'leaflet';
import { IOffer, ICity } from '../app/app';

interface IProps {
  className: string,
  offers: IOffer[],
  city: ICity,
  hoverId: number,  
}

export class Map extends React.PureComponent<IProps> {
  private icon: object;
  private iconActive: object;
  private layer: any;
  private mapRef: any;
  private map: any;
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
    this.map = null;
  }

  componentDidMount() {
    const { offers, city } = this.props;    
    const zoom = city.location.zoom;
    this.map = leaflet.map(this.mapRef.current, {
      center: [city.location.latitude, city.location.longitude],
      zoom: zoom,
      zoomControl: false,
      marker: true
    });
    this.map.setView([city.location.latitude, city.location.longitude], zoom);
    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>'
      })
      .addTo(this.map);
    
    const markerArray = [];
    offers.forEach((elem: IOffer) => {
      markerArray.push(leaflet.marker([elem.location.latitude,elem.location.longitude], {icon: this.icon}))
    });
    this.layer = leaflet.featureGroup(markerArray).addTo(this.map);
  }

  componentDidUpdate(prevProps) {  
    if (prevProps.offers !== this.props.offers || prevProps.hoverId !== this.props.hoverId) {
      this.updateMarkers(this.props.offers, this.props.city);
    }
  }

  updateMarkers(offers, city) {
    this.layer.clearLayers();
    offers.forEach((offer) => {
      leaflet
        .marker([offer.location.latitude,offer.location.longitude], {icon: offer.id === this.props.hoverId ? this.iconActive : this.icon})
        .addTo(this.layer);
    });
    this.map.setView(new leaflet.LatLng(city.location.latitude,city.location.longitude), city.zoom);
  }

  render() {    
    const {className} = this.props;

    return (
      <section
        className={`map${className ? ` ` + className : ``}`}
        ref={this.mapRef}
      />
    );
  }
}
