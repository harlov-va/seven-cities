import * as React from 'react';
import { Card } from '../card/card';

export const CardNeighbor = (props) => {
    const { offer, onCardClick } = props;
    return (
        <article className="near-places__card place-card" onClick={onCardClick}>
            <div className="near-places__image-wrapper place-card__image-wrapper">
                <a href="#">
                    <img className="place-card__image" src={offer.img} width="260" height="200" alt="Place image" />
                </a>
            </div>
            <Card offer={offer} />
        </article>);
}