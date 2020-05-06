import offers from "./mocks/offers";
import { IOffer } from "./components/app/app";

interface IState {
    city: string,
    offers: IOffer[],
    cities: string[]
}

const listCities: string[] = [];
const tempCities: object = {};
for(let item of offers) {
    if(!tempCities[item.city] && listCities.length < 6){
        listCities.push(item.city);
        tempCities[item.city] = 1;
    }
    if (listCities.length === 6) break;
}

const initialState: IState = {
    city: `Amsterdam`,
    offers: offers.filter((offer) => offer.city === listCities[3] ),
    cities: listCities
    //cities: [`Paris`,`Cologne`,`Brussels`,`Amsterdam`,`Hamburg`,`Dusseldorf`]
}

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
                payload: offers.filter((offer) => offer.city === newCity )
            };
        }
        return {
            type: `EMPTY`,
            payload: true
        }
    }
}

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case `CHANGE_CITY`: return { ...state, city: action.payload };
        case `GET_OFFERS`: return { ...state, offers: action.payload };
    }    
    return state;
}