import * as React from 'react';
import { Card } from '../card/card';

export const CardOffer = (props) => {
    const { offer, onCardClick } = props;
    return (
        <article className="cities__place-card place-card" onClick={onCardClick}>
            <div className="place-card__mark">
                <span>Premium</span>
            </div>
            <div className="cities__image-wrapper place-card__image-wrapper">
                <a href="#">
                    <img className="place-card__image" src={offer.img} width="260" height="200" alt="Place image" />
                </a>
            </div>
            <Card offer={offer}/>
        </article>);
}