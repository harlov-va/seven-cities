import React = require("react");
import { Card } from "../card/card";

export const ListNeighbors = (props) => {
        const { offers, onHoverCard } = props;
        return <div className="near-places__list places__list">
            {offers.map((offer) => {
                return <Card
                    key={`neighbor-${offer.id}`}
                    offer={offer}
                    showStatus={false}
                    className={`near-places`}
                    onHoverCard={() => { onHoverCard(offer.id); }}
                    />
            })}
        </div>;    
}