import { PureComponent } from "react";
import React = require("react");
import { Card } from "../card/card";
import { IOffer } from '../app/app';
interface IProps {
    offers: IOffer[],
    onCardClick: (id: number) => void,
    onHoverCard: (cardId: number) => void,
}
export class ListOffers extends PureComponent<IProps>{
    constructor(props) {
        super(props);
    }
    render() {
        const { offers, onCardClick, onHoverCard } = this.props;
        return <div className="cities__places-list places__list tabs__content">
            {offers.map((offer, index) => {
                return <Card
                    key={`offer-${index}`}
                    offer={offer}
                    showStatus={true}
                    className={`cities`}
                    onCardClick={() => { onCardClick(offer.id); }}
                    onHoverCard={() => { onHoverCard(offer.id); }}
                />
            })}
        </div>;
    }
}