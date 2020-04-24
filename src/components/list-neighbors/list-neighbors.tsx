import { PureComponent } from "react";
import React = require("react");
import {IProps} from '../app/app';
import { CardNeighbor } from "../card-neighbor/card-neighbor";
export class ListNeighbors extends PureComponent<IProps>{
    constructor(props) {
        super(props);
        this.state = {
            currentCard: null
        };
    }
    render() {
        const offers = this.props[`offers`];
        return <div className="near-places__list places__list">
            {offers.map((offer) => {                
                return <CardNeighbor key={`neighbor-${offer.id}`} offer={offer} onCardFocus={() => {
                    this.setState(() => {
                        return {
                            currentCard: offer,
                        }
                    })                   
                }
                
                
            } />
                })}
        </div>;
    }
}