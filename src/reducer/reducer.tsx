import { IOffer, ICity, IReview } from "../components/app/app";

interface IState {
    city: ICity,
    offers: IOffer[],
    allOffers: IOffer[],
    cities: string[],
    hoverId: number,
    sortingOption: string,
    isAuthorizationRequired: boolean,
    user: object,
    reviews: IReview[],
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
    sortingOption: `Popular`,
    isAuthorizationRequired: false,
    user: {},
    reviews:[],
}

const ActionTypes = {
    CHANGE_CITY: `CHANGE_CITY`,
    GET_OFFERS: `GET_OFFERS`,
    EMPTY: `EMPTY`,
    SORTING: `SORTING`,
    HOVER_CARD: `HOVER_CARD`,
    LOAD_OFFERS: `LOAD_OFFERS`,
    LOAD_CITIES: `LOAD_CITIES`,
    AUTHORIZATION: `AUTHORIZATION`,
    LOGIN: `LOGIN`,
    SEND_COMMENT: `SEND_COMMENT`,
    LOAD_REVIEWS: `LOAD_REVIEWS`,
};

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
    },
    isAuthorization: (status) => {
        return {
            type: ActionTypes.AUTHORIZATION,
            payload: status,
        }
    },
    login: (user) => {
        return {
            type: ActionTypes.LOGIN,
            payload: user,
        }
    },
    sendComment: (comment) => {
        return {
            type: ActionTypes.SEND_COMMENT,
            payload: comment,
        }
    },
    loadReviews: (reviews) => {
        return {
            type: ActionTypes.LOAD_REVIEWS,
            payload: reviews,
        }
    },
}

const filterOffers = (newCity: ICity, offersArr: IOffer[]): IOffer[] => offersArr.filter((offer) => offer.city.name === newCity.name);
const getCities = (offersArr: IOffer[]): ICity[] => {
    const listCities: ICity[] = [];
    const tempCities: object = {};
    for (let item of offersArr) {
        if (!tempCities[item.city.name] && listCities.length < 6) {
            listCities.push(Object.assign({}, item.city));
            tempCities[item.city.name] = 1;
        }
        if (listCities.length === 6) break;
    }

    return listCities;
}
const getCity = (nameCity, cities) => {
    for (let city of cities) {
        if (city.name === nameCity) return { ...city }
    }
    return null;
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case `CHANGE_CITY`: return { ...state, city: getCity(action.payload, state.cities) };
        case `GET_OFFERS`: return { ...state, offers: filterOffers(getCity(action.payload, state.cities), state.allOffers) };
        case `SORTING`: return { ...state, sortingOption: action.payload };
        case `HOVER_CARD`: return { ...state, hoverId: action.payload };
        case `LOAD_OFFERS`: return { ...state, allOffers: action.payload };
        case `LOAD_CITIES`: return { ...state, cities: getCities(action.payload) };
        case ActionTypes.AUTHORIZATION: return { ...state, isAuthorizationRequired: action.payload };
        case ActionTypes.LOGIN: return { ...state, user: action.payload };
        case ActionTypes.SEND_COMMENT: return { ...state };
        case ActionTypes.LOAD_REVIEWS: return { ...state, reviews: action.payload };
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
    },
    isAuthorization: () => (dispatch, _, api) => {
        return api.get(`/login`)
            .then((response) => {
                if (response.status === 200) {
                    dispatch(ActionCreator.isAuthorization(false));
                }
            })
            .catch(() => {
                dispatch(ActionCreator.isAuthorization(true));
            })
    },
    login: (form) => (dispatch, _, api) => {
        return api.post(`/login`, {
            email: form.target.querySelector(`[name=email]`).value,
            password: form.target.querySelector(`[name=password]`).value,
        })
            .then((response) => {
                dispatch(ActionCreator.login(response.data));
                dispatch(ActionCreator.isAuthorization(false));
            })
    },
    sendComment: (form, offerId) => (dispatch, _, api) => {
        return api.post(`/comments/${offerId}`, {
                rating: form.target.querySelector('input[type=radio]:checked').value,
                comment: form.target.querySelector(`#review`).value,
            })
            .then((response) => {
                dispatch(ActionCreator.loadReviews(response.data));
            })
    },
    loadReviews: (offerId) => (dispatch, _, api) => {
        return api.get(`/comments/${offerId}`)
            .then((response) => {                
                dispatch(ActionCreator.loadReviews(response.data));
            })
    },
}

export {
    ActionCreator,
    reducer,
    Operation,
}