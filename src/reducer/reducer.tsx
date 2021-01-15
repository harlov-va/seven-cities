import { comments } from '../mocks/comments';
import { hotels } from '../mocks/hotels';
import { IOffer, ICity, IReview } from '../types';

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
    isAuthorizationRequired: true,
    user: {},
    reviews: [],
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
    ADD_FAVORITES: `ADD_FAVORITES`,
    UPDATE_OFFER: `UPDATE_OFFER`,
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
    addFavorites: (favorites) => {
        return {
            type: ActionTypes.ADD_FAVORITES,
            payload: favorites,
        }
    },
    updateOffer: (newOffer) => {
        return {
            type: ActionTypes.UPDATE_OFFER,
            payload: newOffer,
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
        case ActionTypes.SEND_COMMENT: return state;
        case ActionTypes.LOAD_REVIEWS: return { ...state, reviews: action.payload };
        case ActionTypes.ADD_FAVORITES: {
            for (let item of action.payload) {
                for (let elem of state.allOffers) {
                    if (item === elem.id) elem.is_favorite = true;
                }
            }
            return state;
        };
        case ActionTypes.UPDATE_OFFER: {
            const oldOffers = [...state.allOffers];
            for (let i=0; i < oldOffers.length; i++) {
                if (action.payload.id === oldOffers[i].id) {
                    oldOffers[i] = {...action.payload};                    
                    break;
                }
            }
            return { ...state, allOffers: oldOffers };
        }
    }
    return state;
}

const Operation = {
    loadOffers: () => (dispatch, _, api) => { 
        const promise = new Promise((resolve) => { resolve(null); });              
        return promise
                .then((response) => {
                    dispatch(ActionCreator.getCities(hotels));
                    dispatch(ActionCreator.changeCity(hotels[0].city.name));
                    dispatch(ActionCreator.loadOffers(hotels));
                    dispatch(ActionCreator.getOffers(hotels[0].city.name));
                });
        //закоментил
        // return api.get(`/hotels`)
        //     .then((response) => {
        //         dispatch(ActionCreator.getCities(response.data));
        //         dispatch(ActionCreator.changeCity(response.data[0].city.name));
        //         dispatch(ActionCreator.loadOffers(response.data));
        //         dispatch(ActionCreator.getOffers(response.data[0].city.name));
        //     });
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
        function validateEmail(email) {
            const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(email).toLowerCase());
        }
        const promise = new Promise((resolve, reject) => {
            const email = form.target.querySelector(`[name=email]`).value;
            const pass = form.target.querySelector(`[name=password]`).value;
            if (validateEmail(email) && pass) resolve({
                "id": 1,
                "email": email,
                "name": email.split('@')[0],
                "avatar_url": `/static/avatar/${Math.floor(Math.random() * 10) + 1}.jpg`,
                "is_pro": false
            }); else {
                reject({
                    "error": "child \"email\" fails because [\"email\" must be a valid email]"
                });
            } 
            
        });              
        return promise
                .then((response) => {
                    dispatch(ActionCreator.login(response));
                    dispatch(ActionCreator.isAuthorization(false));
                });
        // закоментил
        // return api.post(`/login`, {
        //     email: form.target.querySelector(`[name=email]`).value,
        //     password: form.target.querySelector(`[name=password]`).value,
        // })
        //     .then((response) => {
        //         dispatch(ActionCreator.login(response.data));
        //         dispatch(ActionCreator.isAuthorization(false));
        //     })
    },
    sendComment: (payload, offerId) => (dispatch, _, api) => { 
        // закоментил       
        // return api.post(`/comments/${offerId}`, payload)
        //     .then((response) => {
        //         dispatch(ActionCreator.loadReviews(response.data));
        //     })
    },
    loadReviews: (offerId) => (dispatch, _, api) => {
        dispatch(ActionCreator.loadReviews(comments));
        // закоментил
        // return api.get(`/comments/${offerId}`)
        //     .then((response) => {
        //         dispatch(ActionCreator.loadReviews(response.data));
        //     })
    },
    loadFavorites: (offerId) => (dispatch, _, api) => {
        return api.get(`/favorite`)
            .then((response) => {
                dispatch(ActionCreator.addFavorites(response.data));
            })
            .catch(() => {

            });
    },
    changeOfferFavoriteStatus: (offerId, status) => (dispatch, getState, api) => {
        dispatch(ActionCreator.updateOffer({...hotels.find((h) => h.id === offerId), is_favorite:status >>> 0}));
        // return api.post(`/favorite/${offerId}/${(status >>> 0)}`)
        //     .then((response) => {
        //         dispatch(ActionCreator.updateOffer(response.data));
        //     });
    },
}

export {
    ActionCreator,
    reducer,
    Operation,
}