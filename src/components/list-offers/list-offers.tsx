import { PureComponent } from "react";
import React = require("react");
import { CardOffer } from "../card-offer/card-offer";
import {IOffer} from '../app/app';
interface IProps {
    offers: IOffer[],
    onChoice: (id: number) => void
}
export class ListOffers extends PureComponent<IProps>{
    constructor(props) {
        super(props);
        this.state = {
            currentCard: null
        };
    }
    render() {
        const { offers, onChoice } = this.props;
        return <div className="cities__places-list places__list tabs__content">
            {offers.map((offer, index) => {                
                return <CardOffer key={`offer-${index}`} offer={offer} onCardClick={() => {
                    onChoice(offer.id);
                    this.setState(() => {                        
                        return {
                            currentCard: offer,
                        }
                    })                   
                }
                
                
            } />
                })}
        </div>;
    }
}