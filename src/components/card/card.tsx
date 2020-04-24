import * as React from 'react';

export const Card = (props) => {
    const {offer} = props;
    return (
    <React.Fragment>
        <div className="place-card__info">
            <div className="place-card__price-wrapper">
                <div className="place-card__price">
                    <b className="place-card__price-value">&euro;{offer.price}</b>
                    <span className="place-card__price-text">&#47;&nbsp;night</span>
                </div>
                <button className="place-card__bookmark-button button" type="button">
                    <svg className="place-card__bookmark-icon" width="18" height="19">
                        <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                </button>
            </div>
            <div className="place-card__rating rating">
                <div className="place-card__stars rating__stars">
                    <span style={{width: `${offer.rating}%`}}></span>
                    <span className="visually-hidden">Rating</span>
                </div>
            </div>
            <h2 className="place-card__name">
                <a href="#">{offer.description}</a>
            </h2>
            <p className="place-card__type">{offer.type}</p>
        </div>
    </React.Fragment>);
}