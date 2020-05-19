import * as React from "react";
import { Card } from "../card/card";

const ListOffers = (props) => {
    const { offers, onHoverCard, onFavoriteClick } = props;
    return (        
        <div className="cities__places-list places__list tabs__content">
            {offers.map((offer, index) => {
                return <Card
                    key={`offer-${index}`}
                    offer={offer}
                    showStatus={true}
                    className={`cities`}
                    onHoverCard={() => { onHoverCard(offer.id); }}
                    onFavoriteClick={(event) => { 
                        event.stopPropagation();
                        onFavoriteClick(offer); 
                    }}
                />
            })}
        </div>
    )
}

export default ListOffers;