import * as React from 'react';
import { Link } from 'react-router-dom';

export const Card = (props) => {
    const { offer, showStatus, className, onHoverCard, onFavoriteClick } = props;
    return (
        <article className={`${showStatus ? className + `__place-card` : className + `__card`} place-card`} onMouseOver={onHoverCard}  >
            {showStatus && offer.is_premium && <div className="place-card__mark">
                <span>{offer.is_premium ? `Premium` : ``}</span>
            </div>}
            <div className={`${className}__image-wrapper place-card__image-wrapper`}>
                <Link to={`/property/${offer.id}`}>
                    <img className="place-card__image" src={offer.preview_image} width="260" height="200" alt="Place image" />
                </Link>
            </div>
            <div className="place-card__info">
                <div className="place-card__price-wrapper">
                    <div className="place-card__price">
                        <b className="place-card__price-value">&euro;{offer.price}</b>
                        <span className="place-card__price-text">&#47;&nbsp;night</span>
                    </div>
                    <button className={`place-card__bookmark-button button ${offer.is_favorite ? `place-card__bookmark-button--active` : ``}`}
                        type="button"
                        onClick={onFavoriteClick}
                    >
                        <svg className="place-card__bookmark-icon" width="18" height="19">
                            <use xlinkHref="#icon-bookmark"></use>
                        </svg>
                        <span className="visually-hidden">To bookmarks</span>
                    </button>
                </div>
                <div className="place-card__rating rating">
                    <div className="place-card__stars rating__stars">
                        <span style={{ width: `${offer.rating * 20}%` }}></span>
                        <span className="visually-hidden">Rating</span>
                    </div>
                </div>
                <h2 className="place-card__name">
                    <Link to={`/property/${offer.id}`}>{offer.title} </Link>
                </h2>
                <p className="place-card__type">{offer.type}</p>
            </div>
        </article>
    );
}