import { PureComponent } from "react";
import React = require("react");
import { IOffer } from '../app/app';
import { Card } from "../card/card";
interface IProps {
    offers: IOffer[],
    onCardClick: (id: number) => void
}

export class ListNeighbors extends PureComponent<IProps>{
    constructor(props) {
        super(props);
    }
    render() {
        const { offers, onCardClick } = this.props;
        return <div className="near-places__list places__list">
            {offers.map((offer) => {
                return <Card
                    key={`neighbor-${offer.id}`}
                    offer={offer}
                    showStatus={false}
                    className={`near-places`}
                    onCardClick={() => { onCardClick(offer.id); }
                    } />
            })}
        </div>;
    }
}