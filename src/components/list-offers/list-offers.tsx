import { PureComponent } from "react";
import React = require("react");
import { Card } from "../card/card";
import {IProps} from '../app/app';
export class ListOffers extends PureComponent<IProps>{
    constructor(props) {
        super(props);
        this.state = {
            currentCard: null
        };
    }
    render() {
        const offers = this.props[`offers`];
        return <div className="cities__places-list places__list tabs__content">
            {offers.map((offer, index) => {
                const  description  = offer[`description`];
                return <Card key={description + index} offer={offer} onCardFocus={() => {
                    this.setState((prevState) => {
                        return {
                            ...prevState,
                            currentCard: offer,
                        }
                    })                   
                }
                
                
            } />
                })}
        </div>;
    }
}