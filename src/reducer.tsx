import offers from "./mocks/offers";
import { IOffer } from "./components/app/app";

interface IState {
    city: string,
    offers: IOffer[],
    cities: string[],
    hoverId: number,
}

const listCities: string[] = [];
const tempCities: object = {};
for (let item of offers) {
    if (!tempCities[item.city] && listCities.length < 6) {
        listCities.push(item.city);
        tempCities[item.city] = 1;
    }
    if (listCities.length === 6) break;
}

const initialState: IState = {
    city: listCities[0],
    offers: offers.filter((offer) => offer.city === listCities[0]),
    cities: listCities,
    hoverId: -1,
    //cities: [`Paris`,`Cologne`,`Brussels`,`Amsterdam`,`Hamburg`,`Dusseldorf`]
}
const filterOffers = (newCity:string):IOffer[] => offers.filter((offer) => offer.city === newCity);
export const ActionCreator = {
    changeCity: (newCity) => {
        if (newCity) {
            return {
                type: `CHANGE_CITY`,
                payload: newCity,
            }
        }
    },
    getOffers: (newCity) => {
        if (newCity) {
            return {
                type: `GET_OFFERS`,
                // payload: offers
                payload: filterOffers(newCity)
            };
        }
        return {
            type: `EMPTY`,
            payload: true
        }
    },
    sorting: (nameSort) => ({
        type: `SORTING`,
        payload: nameSort
    }),
    hoverCard: (hoverId) => ({
        type: `HOVER_CARD`,
        payload: hoverId
    }),
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case `CHANGE_CITY`: return { ...state, city: action.payload };
        case `GET_OFFERS`: return { ...state, offers: action.payload };
        case `SORTING`: {
            let sortOffers: IOffer[] = [...state.offers];
            switch (action.payload) {
                case `Popular`: sortOffers = filterOffers(state.city);
                    break;
                case `Price: low to high`: sortOffers.sort((prev, next) => next.price-prev.price);
                    break;
                case `Price: high to low`:sortOffers.sort((prev, next) => prev.price-next.price);
                    break;
                case `Top rated first`:sortOffers.sort((prev, next) => next.rating-prev.rating);
                    break;
            }
            return { ...state, offers: sortOffers };
        };
        case `HOVER_CARD`: return { ...state, hoverId: action.payload };
    }
    return state;
}