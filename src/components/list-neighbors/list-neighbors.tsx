import { PureComponent } from "react";
import React = require("react");
import {IOffer} from '../app/app';
import { CardNeighbor } from "../card-neighbor/card-neighbor";
interface IProps {
    offers: IOffer[],
    onChoice: (id: number) => void
}

export class ListNeighbors extends PureComponent<IProps>{
    constructor(props) {
        super(props);
        this.state = {
            currentCard: null
        };
    }
    render() {        
        const { offers , onChoice } = this.props;
        return <div className="near-places__list places__list">
            {offers.map((offer) => {                
                return <CardNeighbor key={`neighbor-${offer.id}`} offer={offer} onCardClick={() => {
                    onChoice(offer.id);
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