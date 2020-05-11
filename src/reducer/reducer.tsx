import { IOffer, ICity } from "../components/app/app";

interface IState {
    city: ICity,
    offers: IOffer[],
    allOffers: IOffer[],
    cities: string[],
    hoverId: number,
}

const initialState: IState = {
    city: {
        name: `Paris`,
        location: {
            latitude: 48.85661,
            longitude: 2.351499,
            zoom: 13
        }
    },
    offers: [],
    allOffers: [],
    cities: [],
    hoverId: -1,    
}

const ActionCreator = {
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
                payload: newCity
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
    loadOffers: (offers) => {
        return {
            type: `LOAD_OFFERS`,
            payload: offers,
        }
    },
    getCities: (offers) => {
        return {
            type: `LOAD_CITIES`,
            payload: offers,
        }
    }
}

const filterOffers = (newCity: ICity, offersArr: IOffer[]): IOffer[] => offersArr.filter((offer) => offer.city.name === newCity.name);
const getCities = (offersArr: IOffer[]): ICity[] => {
    const listCities: ICity[] = [];
    const tempCities: object = {};
    for (let item of offersArr) {
        if (!tempCities[item.city.name] && listCities.length < 6) {
            listCities.push(Object.assign({},item.city));
            tempCities[item.city.name] = 1;
        }
        if (listCities.length === 6) break;
    }
    
    return listCities;
}
const getCity = (nameCity, cities) => {
    for(let city of cities) {
        if(city.name === nameCity) return {...city}
    }
    return null;
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case `CHANGE_CITY`: return { ...state, city: getCity(action.payload, state.cities) };
        case `GET_OFFERS`: return { ...state, offers: filterOffers(getCity(action.payload, state.cities), state.allOffers) };
        case `SORTING`: {
            let sortOffers: IOffer[] = [...state.offers];
            switch (action.payload) {
                case `Popular`: sortOffers = filterOffers(state.city, state.offers);
                    break;
                case `Price: low to high`: sortOffers.sort((prev, next) => next.price - prev.price);
                    break;
                case `Price: high to low`: sortOffers.sort((prev, next) => prev.price - next.price);
                    break;
                case `Top rated first`: sortOffers.sort((prev, next) => next.rating - prev.rating);
                    break;
            }
            return { ...state, offers: sortOffers };
        };
        case `HOVER_CARD`: return { ...state, hoverId: action.payload };
        case `LOAD_OFFERS`: return { ...state, allOffers: action.payload };
        case `LOAD_CITIES`: return { ...state, cities: getCities(action.payload) };
    }
    return state;
}

const Operation = {
    loadOffers: () => (dispatch, _, api) => {
        return api.get(`/hotels`)
            .then((response) => {
                dispatch(ActionCreator.getCities(response.data));
                dispatch(ActionCreator.changeCity(response.data[0].city.name));
                dispatch(ActionCreator.loadOffers(response.data)); 
                dispatch(ActionCreator.getOffers(response.data[0].city.name));                
            });
    }
}

export {
    ActionCreator,
    reducer,
    Operation,
}