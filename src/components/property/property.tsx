import * as React from "react";
import { ListReviews } from "../list-reviews/list-reviews";
import { ListNeighbors } from '../list-neighbors/list-neighbors'
import { Map } from "../map/map";
import { Header } from "../header/header";

export const Property = (props) => {
  const { city, 
    reviews, 
    neighbours, 
    hoverId, 
    isAuthorizationRequired, 
    user, 
    onCardClick, 
    currentOffer,
    onFormCommentSumbit,
   } = props;
  return (
    <React.Fragment>
      <div className="page">
      <Header 
        isAuthorizationRequired={isAuthorizationRequired}
        user={user}
      />

        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                {currentOffer.images.map((property,index) => <div className="property__image-wrapper" key={`images-${index}`}>
                  <img className="property__image" src={property} alt="Photo studio" />
                </div>)}
              </div>
            </div>
            <div className="property__container container">
              <div className="property__wrapper">
                {currentOffer.is_premium && <div className="property__mark">
                  <span>Premium</span>
                </div>}
                <div className="property__name-wrapper">
                  <h1 className="property__name">
                    {currentOffer.title}
                  </h1>
                  <button className={`property__bookmark-button button ${currentOffer.is_favorite ? `property__bookmark-button--active` : ``}`} type="button">
                    <svg className="place-card__bookmark-icon" width="31" height="33">
                      <use xlinkHref="#icon-bookmark"></use>
                    </svg>
                    <span className="visually-hidden">To bookmarks</span>
                  </button>
                </div>
                <div className="property__rating rating">
                  <div className="property__stars rating__stars">
                    <span style={{ width: `${currentOffer.rating * 20}%` }}></span>
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">{currentOffer.rating % 2 === 0 ? `${currentOffer.rating}.0` : currentOffer.rating}</span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    Entire place
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {currentOffer.bedrooms + ` Bedrooms`}
                  </li>
                  <li className="property__feature property__feature--adults">
                    { `Max `+currentOffer.max_adults + ` adults`}
                  </li>
                </ul>
                <div className="property__price">
                  <b className="property__price-value">&euro;{currentOffer.price}</b>
                  <span className="property__price-text">&nbsp;night</span>
                </div>
                <div className="property__inside">
                  <h2 className="property__inside-title">What&apos;s inside</h2>
                  <ul className="property__inside-list">
                    {currentOffer.goods.map((item, index) => <li className="property__inside-item" key={item + index}>
                      {item}
                    </li>)}
                  </ul>
                </div>
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img className="property__avatar user__avatar" src={currentOffer.host.avatar_url} width="74"
                        height="74"
                        alt="Host avatar" />
                    </div>
                    <span className="property__user-name">
                      {currentOffer.host.name}
                  </span>
                    {currentOffer.host.is_pro && <span className="property__user-status">
                      Pro
                  </span>}
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      {currentOffer.description}
                    </p>
                  </div>
                </div>
                <ListReviews reviews={reviews} 
                isAuthorizationRequired={isAuthorizationRequired} 
                onReviewSubmit={(event) => {
                  onFormCommentSumbit(event, currentOffer.id);
                }}
                />
              </div>
            </div>
            <Map
              offers={neighbours}
              city={city}
              hoverId={hoverId}
              className={`property__map`}
            />
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">Other places in the neighbourhood</h2>
              <ListNeighbors offers={neighbours} onCardClick={onCardClick} />
            </section>
          </div>
        </main>
      </div>
    </React.Fragment>
  );
}
