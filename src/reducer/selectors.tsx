import { createSelector } from 'reselect';
import { IOffer, ICity } from '../components/app/app';

const getOffers = (state) => state.offers;
const getAllOffers = (state) => state.allOffers;
const getCity = (state) => state.city;
const getSortingOption = (state) => state.sortingOption;

const filterOffers = (newCity: ICity, offersArr: IOffer[]): IOffer[] => offersArr.filter((offer) => offer.city.name === newCity.name);

const getOffersSorted = (allOffers, offers, city, sortOption) => {
    let sortOffers: IOffer[] = [...offers];
    switch (sortOption) {
        case `Popular`: sortOffers = filterOffers(city, allOffers);
            break;
        case `Price: low to high`: sortOffers.sort((prev, next) => next.price - prev.price);
            break;
        case `Price: high to low`: sortOffers.sort((prev, next) => prev.price - next.price);
            break;
        case `Top rated first`: sortOffers.sort((prev, next) => next.rating - prev.rating);
            break;
    }
    return sortOffers;
}

export const getSortedOffers = createSelector(
    getAllOffers,
    getOffers,
    getCity,
    getSortingOption,
    (all, offers, city, sortOption) => getOffersSorted(all, offers, city, sortOption)
);