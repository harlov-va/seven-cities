import * as React from "react";
import Review from '../review/review';
import { Comment } from '../comment/comment';
export const ListReviews = (props) => {
  const { reviews, isAuthorizationRequired, onReviewSubmit } = props;
  return <section className="property__reviews reviews">
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
    <ul className="reviews__list">
      {reviews.map((item) => <Review review = {item} key={`review-${item.id}`}/>)}
    </ul>
    {!isAuthorizationRequired &&
      <Comment onReviewSubmit={onReviewSubmit}/>
    }
  </section>
}
