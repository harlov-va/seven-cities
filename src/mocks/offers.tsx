// import {IOffer} from '../../types';

const offers: object[] = [
  {
    id: 1,
    city: `Paris`,
    status: `Premium`,
    price: 120,
    description: `Beautiful & luxurious apartment at great location`,
    rating: 90,
    type: `Apartment`,
    img: `img/apartment-01.jpg`,
    cords: [52.3909553943508, 4.85309666406198],
    features: [`Entire place`, `3 Bedrooms`, `Max 4 adults`],
    inside: [`Wi-Fi`,`Washing machine`,`Towels`,`Heating`,`Coffee machine`,`Baby seat`,`Kitchen`,`Dishwasher`,`Cabel TV`,`Fridge`,]
  },
  {
    id: 2,
    city: `Paris`,
    status: ``,
    price: 120,
    description: `Beautiful & luxurious apartment at great location`,
    rating: 90,
    type: `Apartment`,
    img: `img/apartment-01.jpg`,
    cords: [52.369553943508, 4.85309666406198],
    features: [`Entire place`, `3 Bedrooms`, `Max 4 adults`],
    inside: [`Wi-Fi`,`Washing machine`,`Towels`,`Heating`,`Coffee machine`,`Baby seat`,`Kitchen`,`Dishwasher`,`Cabel TV`,`Fridge`,]
  },
  {
    id: 3,
    city: `Paris`,
    status: ``,
    price: 80,
    description: `Wood and stone place`,
    rating: 80,
    type: `Private room`,
    img: `img/apartment-02.jpg`,
    cords: [52.3909553943508, 4.929309666406198],
    features: [`Entire place`, `3 Bedrooms`, `Max 4 adults`],
    inside: [`Wi-Fi`,`Washing machine`,`Towels`,`Heating`,`Coffee machine`,`Baby seat`,`Kitchen`,`Dishwasher`,`Cabel TV`,`Fridge`,]
  },
  {
    id: 4,
    city: `Paris`,
    status: ``,
    price: 132,
    description: `Canal View Prinsengracht`,
    rating: 80,
    type: `Apartment`,
    img: `img/apartment-03.jpg`,
    cords: [52.3809553943508, 4.939309666406198],
    features: [`Entire place`, `3 Bedrooms`, `Max 4 adults`],
    inside: [`Wi-Fi`,`Washing machine`,`Towels`,`Heating`,`Coffee machine`,`Baby seat`,`Kitchen`,`Dishwasher`,`Cabel TV`,`Fridge`,]
  },
  {
    id: 5,
    city: `Paris`,
    status: `Premium`,
    price: 180,
    description: `Nice, cozy, warm big bed apartment`,
    rating: 100,
    type: `Apartment`,
    img: `img/room.jpg`,
    cords: [52.3909553943508, 4.909309666406198],
    features: [`Entire place`, `3 Bedrooms`, `Max 4 adults`],
    inside: [`Wi-Fi`,`Washing machine`,`Towels`,`Heating`,`Coffee machine`,`Baby seat`,`Kitchen`,`Dishwasher`,`Cabel TV`,`Fridge`,]
  },
  {
    id: 6,
    city: `Cologne`,
    status: ``,
    price: 120,
    description: `Beautiful & luxurious apartment at great location`,
    rating: 90,
    type: `Apartment`,
    img: `img/apartment-01.jpg`,
    cords: [52.3909553943508, 4.85309666406198],
    features: [`Entire place`, `3 Bedrooms`, `Max 4 adults`],
    inside: [`Wi-Fi`,`Washing machine`,`Towels`,`Heating`,`Coffee machine`,`Baby seat`,`Kitchen`,`Dishwasher`,`Cabel TV`,`Fridge`,]
  },
  {
    id: 7,
    city: `Cologne`,
    status: ``,
    price: 120,
    description: `Beautiful & luxurious apartment at great location`,
    rating: 90,
    type: `Apartment`,
    img: `img/apartment-01.jpg`,
    cords: [52.369553943508, 4.85309666406198],
    features: [`Entire place`, `3 Bedrooms`, `Max 4 adults`],
    inside: [`Wi-Fi`,`Washing machine`,`Towels`,`Heating`,`Coffee machine`,`Baby seat`,`Kitchen`,`Dishwasher`,`Cabel TV`,`Fridge`,]
  },
  {
    id: 8,
    city: `Cologne`,
    status: ``,
    price: 80,
    description: `Wood and stone place`,
    rating: 80,
    type: `Private room`,
    img: `img/apartment-02.jpg`,
    cords: [52.3909553943508, 4.929309666406198],
    features: [`Entire place`, `3 Bedrooms`, `Max 4 adults`],
    inside: [`Wi-Fi`,`Washing machine`,`Towels`,`Heating`,`Coffee machine`,`Baby seat`,`Kitchen`,`Dishwasher`,`Cabel TV`,`Fridge`,]
  },
  {
    id: 9,
    city: `Cologne`,
    status: ``,
    price: 132,
    description: `Canal View Prinsengracht`,
    rating: 80,
    type: `Apartment`,
    img: `img/apartment-03.jpg`,
    cords: [52.3809553943508, 4.939309666406198],
    features: [`Entire place`, `3 Bedrooms`, `Max 4 adults`],
    inside: [`Wi-Fi`,`Washing machine`,`Towels`,`Heating`,`Coffee machine`,`Baby seat`,`Kitchen`,`Dishwasher`,`Cabel TV`,`Fridge`,]
  },
  {
    id: 10,
    city: `Cologne`,
    status: ``,
    price: 180,
    description: `Nice, cozy, warm big bed apartment`,
    rating: 100,
    type: `Apartment`,
    img: `img/room.jpg`,
    cords: [52.3909553943508, 4.909309666406198],
    features: [`Entire place`, `3 Bedrooms`, `Max 4 adults`],
    inside: [`Wi-Fi`,`Washing machine`,`Towels`,`Heating`,`Coffee machine`,`Baby seat`,`Kitchen`,`Dishwasher`,`Cabel TV`,`Fridge`,]
  },
  {
    id: 11,
    city: `Brussels`,
    status: ``,
    price: 120,
    description: `Beautiful & luxurious apartment at great location`,
    rating: 90,
    type: `Apartment`,
    img: `img/apartment-01.jpg`,
    cords: [52.3909553943508, 4.85309666406198],
    features: [`Entire place`, `3 Bedrooms`, `Max 4 adults`],
    inside: [`Wi-Fi`,`Washing machine`,`Towels`,`Heating`,`Coffee machine`,`Baby seat`,`Kitchen`,`Dishwasher`,`Cabel TV`,`Fridge`,]
  },
  {
    id: 12,
    city: `Brussels`,
    status: ``,
    price: 120,
    description: `Beautiful & luxurious apartment at great location`,
    rating: 90,
    type: `Apartment`,
    img: `img/apartment-01.jpg`,
    cords: [52.369553943508, 4.85309666406198],
    features: [`Entire place`, `3 Bedrooms`, `Max 4 adults`],
    inside: [`Wi-Fi`,`Washing machine`,`Towels`,`Heating`,`Coffee machine`,`Baby seat`,`Kitchen`,`Dishwasher`,`Cabel TV`,`Fridge`,]
  },
  {
    id: 13,
    city: `Brussels`,
    status: ``,
    price: 80,
    description: `Wood and stone place`,
    rating: 80,
    type: `Private room`,
    img: `img/apartment-02.jpg`,
    cords: [52.3909553943508, 4.929309666406198],
    features: [`Entire place`, `3 Bedrooms`, `Max 4 adults`],
    inside: [`Wi-Fi`,`Washing machine`,`Towels`,`Heating`,`Coffee machine`,`Baby seat`,`Kitchen`,`Dishwasher`,`Cabel TV`,`Fridge`,]
  },
  {
    id: 14,
    city: `Brussels`,
    status: ``,
    price: 132,
    description: `Canal View Prinsengracht`,
    rating: 80,
    type: `Apartment`,
    img: `img/apartment-03.jpg`,
    cords: [52.3809553943508, 4.939309666406198],
    features: [`Entire place`, `3 Bedrooms`, `Max 4 adults`],
    inside: [`Wi-Fi`,`Washing machine`,`Towels`,`Heating`,`Coffee machine`,`Baby seat`,`Kitchen`,`Dishwasher`,`Cabel TV`,`Fridge`,]
  },
  {
    id: 15,
    city: `Brussels`,
    status: ``,
    price: 180,
    description: `Nice, cozy, warm big bed apartment`,
    rating: 100,
    type: `Apartment`,
    img: `img/room.jpg`,
    cords: [52.3909553943508, 4.909309666406198],
    features: [`Entire place`, `3 Bedrooms`, `Max 4 adults`],
    inside: [`Wi-Fi`,`Washing machine`,`Towels`,`Heating`,`Coffee machine`,`Baby seat`,`Kitchen`,`Dishwasher`,`Cabel TV`,`Fridge`,]
  },
  {
    id: 16,
    city: `Amsterdam`,
    status: ``,
    price: 120,
    description: `Beautiful & luxurious apartment at great location`,
    rating: 90,
    type: `Apartment`,
    img: `img/apartment-01.jpg`,
    cords: [52.3909553943508, 4.85309666406198],
    features: [`Entire place`, `3 Bedrooms`, `Max 4 adults`],
    inside: [`Wi-Fi`,`Washing machine`,`Towels`,`Heating`,`Coffee machine`,`Baby seat`,`Kitchen`,`Dishwasher`,`Cabel TV`,`Fridge`,]
  },
  {
    id: 17,
    city: `Amsterdam`,
    status: ``,
    price: 120,
    description: `Beautiful & luxurious apartment at great location`,
    rating: 90,
    type: `Apartment`,
    img: `img/apartment-01.jpg`,
    cords: [52.369553943508, 4.85309666406198],
    features: [`Entire place`, `3 Bedrooms`, `Max 4 adults`],
    inside: [`Wi-Fi`,`Washing machine`,`Towels`,`Heating`,`Coffee machine`,`Baby seat`,`Kitchen`,`Dishwasher`,`Cabel TV`,`Fridge`,]
  },
  {
    id: 18,
    city: `Amsterdam`,
    status: ``,
    price: 80,
    description: `Wood and stone place`,
    rating: 80,
    type: `Private room`,
    img: `img/apartment-02.jpg`,
    cords: [52.3909553943508, 4.929309666406198],
    features: [`Entire place`, `3 Bedrooms`, `Max 4 adults`],
    inside: [`Wi-Fi`,`Washing machine`,`Towels`,`Heating`,`Coffee machine`,`Baby seat`,`Kitchen`,`Dishwasher`,`Cabel TV`,`Fridge`,]
  },
  {
    id: 19,
    city: `Amsterdam`,
    status: ``,
    price: 132,
    description: `Canal View Prinsengracht`,
    rating: 80,
    type: `Apartment`,
    img: `img/apartment-03.jpg`,
    cords: [52.3809553943508, 4.939309666406198],
    features: [`Entire place`, `3 Bedrooms`, `Max 4 adults`],
    inside: [`Wi-Fi`,`Washing machine`,`Towels`,`Heating`,`Coffee machine`,`Baby seat`,`Kitchen`,`Dishwasher`,`Cabel TV`,`Fridge`,]
  },
  {
    id: 20,
    city: `Amsterdam`,
    status: ``,
    price: 180,
    description: `Nice, cozy, warm big bed apartment`,
    rating: 100,
    type: `Apartment`,
    img: `img/room.jpg`,
    cords: [52.3909553943508, 4.909309666406198],
    features: [`Entire place`, `3 Bedrooms`, `Max 4 adults`],
    inside: [`Wi-Fi`,`Washing machine`,`Towels`,`Heating`,`Coffee machine`,`Baby seat`,`Kitchen`,`Dishwasher`,`Cabel TV`,`Fridge`,]
  },
  {
    id: 21,
    city: `Hamburg`,
    status: ``,
    price: 120,
    description: `Beautiful & luxurious apartment at great location`,
    rating: 90,
    type: `Apartment`,
    img: `img/apartment-01.jpg`,
    cords: [52.3909553943508, 4.85309666406198],
    features: [`Entire place`, `3 Bedrooms`, `Max 4 adults`],
    inside: [`Wi-Fi`,`Washing machine`,`Towels`,`Heating`,`Coffee machine`,`Baby seat`,`Kitchen`,`Dishwasher`,`Cabel TV`,`Fridge`,]
  },
  {
    id: 22,
    city: `Hamburg`,
    status: ``,
    price: 120,
    description: `Beautiful & luxurious apartment at great location`,
    rating: 90,
    type: `Apartment`,
    img: `img/apartment-01.jpg`,
    cords: [52.369553943508, 4.85309666406198],
    features: [`Entire place`, `3 Bedrooms`, `Max 4 adults`],
    inside: [`Wi-Fi`,`Washing machine`,`Towels`,`Heating`,`Coffee machine`,`Baby seat`,`Kitchen`,`Dishwasher`,`Cabel TV`,`Fridge`,]
  },
  {
    id: 23,
    city: `Hamburg`,
    status: ``,
    price: 80,
    description: `Wood and stone place`,
    rating: 80,
    type: `Private room`,
    img: `img/apartment-02.jpg`,
    cords: [52.3909553943508, 4.929309666406198],
    features: [`Entire place`, `3 Bedrooms`, `Max 4 adults`],
    inside: [`Wi-Fi`,`Washing machine`,`Towels`,`Heating`,`Coffee machine`,`Baby seat`,`Kitchen`,`Dishwasher`,`Cabel TV`,`Fridge`,]
  },
  {
    id: 24,
    city: `Hamburg`,
    status: ``,
    price: 132,
    description: `Canal View Prinsengracht`,
    rating: 80,
    type: `Apartment`,
    img: `img/apartment-03.jpg`,
    cords: [52.3809553943508, 4.939309666406198],
    features: [`Entire place`, `3 Bedrooms`, `Max 4 adults`],
    inside: [`Wi-Fi`,`Washing machine`,`Towels`,`Heating`,`Coffee machine`,`Baby seat`,`Kitchen`,`Dishwasher`,`Cabel TV`,`Fridge`,]
  },
  {
    id: 25,
    city: `Hamburg`,
    status: ``,
    price: 180,
    description: `Nice, cozy, warm big bed apartment`,
    rating: 100,
    type: `Apartment`,
    img: `img/room.jpg`,
    cords: [52.3909553943508, 4.909309666406198],
    features: [`Entire place`, `3 Bedrooms`, `Max 4 adults`],
    inside: [`Wi-Fi`,`Washing machine`,`Towels`,`Heating`,`Coffee machine`,`Baby seat`,`Kitchen`,`Dishwasher`,`Cabel TV`,`Fridge`,]
  },
  {
    id: 26,
    city: `Dusseldorf`,
    status: ``,
    price: 120,
    description: `Beautiful & luxurious apartment at great location`,
    rating: 90,
    type: `Apartment`,
    img: `img/apartment-01.jpg`,
    cords: [52.3909553943508, 4.85309666406198],
    features: [`Entire place`, `3 Bedrooms`, `Max 4 adults`],
    inside: [`Wi-Fi`,`Washing machine`,`Towels`,`Heating`,`Coffee machine`,`Baby seat`,`Kitchen`,`Dishwasher`,`Cabel TV`,`Fridge`,]
  },
  {
    id: 27,
    city: `Dusseldorf`,
    status: ``,
    price: 120,
    description: `Beautiful & luxurious apartment at great location`,
    rating: 90,
    type: `Apartment`,
    img: `img/apartment-01.jpg`,
    cords: [52.369553943508, 4.85309666406198],
    features: [`Entire place`, `3 Bedrooms`, `Max 4 adults`],
    inside: [`Wi-Fi`,`Washing machine`,`Towels`,`Heating`,`Coffee machine`,`Baby seat`,`Kitchen`,`Dishwasher`,`Cabel TV`,`Fridge`,]
  },
  {
    id: 28,
    city: `Dusseldorf`,
    status: ``,
    price: 80,
    description: `Wood and stone place`,
    rating: 80,
    type: `Private room`,
    img: `img/apartment-02.jpg`,
    cords: [52.3909553943508, 4.929309666406198],
    features: [`Entire place`, `3 Bedrooms`, `Max 4 adults`],
    inside: [`Wi-Fi`,`Washing machine`,`Towels`,`Heating`,`Coffee machine`,`Baby seat`,`Kitchen`,`Dishwasher`,`Cabel TV`,`Fridge`,]
  },
  {
    id: 29,
    city: `Dusseldorf`,
    status: ``,
    price: 132,
    description: `Canal View Prinsengracht`,
    rating: 80,
    type: `Apartment`,
    img: `img/apartment-03.jpg`,
    cords: [52.3809553943508, 4.939309666406198],
    features: [`Entire place`, `3 Bedrooms`, `Max 4 adults`],
    inside: [`Wi-Fi`,`Washing machine`,`Towels`,`Heating`,`Coffee machine`,`Baby seat`,`Kitchen`,`Dishwasher`,`Cabel TV`,`Fridge`,]
  },
  {
    id: 30,
    city: `Dusseldorf`,
    status: ``,
    price: 180,
    description: `Nice, cozy, warm big bed apartment`,
    rating: 100,
    type: `Apartment`,
    img: `img/room.jpg`,
    cords: [52.3909553943508, 4.909309666406198],
    features: [`Entire place`, `3 Bedrooms`, `Max 4 adults`],
    inside: [`Wi-Fi`,`Washing machine`,`Towels`,`Heating`,`Coffee machine`,`Baby seat`,`Kitchen`,`Dishwasher`,`Cabel TV`,`Fridge`,]
  },
];

export default offers;