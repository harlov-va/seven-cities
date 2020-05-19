interface IUser {
    id: number,
    name: string,
    is_pro: boolean,
    avatar_url: string
}
interface ILocation {
    latitude: number,
    longitude: number,
    zoom: number
}
interface ICity {
    name: string,
    location: ILocation,
}
interface IOffer {
    id: number,
    city: ICity,
    preview_image: string,
    images: string[],
    title: string,
    is_favorite: boolean,
    is_premium: boolean,
    rating: number,
    type: string,
    bedrooms: number,
    max_adults: number,
    price: number,
    goods: string[],
    host: IUser,
    description: string,
    location: ILocation,
}
interface IReview {
    id: number,
    user: IUser,
    rating: number,
    comment: string,
    date: string,
}

export {    
    IUser,
    ILocation,
    ICity,
    IOffer,
    IReview,    
}