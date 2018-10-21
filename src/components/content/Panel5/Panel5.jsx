import React from "react";
import {Image, Grid, Row, Col} from "react-bootstrap";
import "./Panel5.scss";

class Panel5 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
        };

    }

    render() {
        console.log('Hola Mundo');
        return (
            <div className="panel5">
                <div className="pnl5-row">
                    <div className="pnl5-col">
                        <span className="pnl5-img" id="pnl5-img1">
                            <Image src="assets/Panel5/photo-1.png"></Image>
                            <div className="pnl5-txt">
                                <text className="pnl5-value">50</text><text className="pnl5-unit">%</text>
                                <br/><text className="pnl5-msg">SAVED IN BOOKKEEPING COSTS</text>
                            </div>
                        </span>
                        <span className="pnl5-img" id="pnl5-img2">
                            <Image src="assets/Panel5/photo-2.png"></Image>
                            <div className="pnl5-txt">
                                <text className="pnl5-value">100</text><text className="pnl5-unit">%</text>
                                <br/><text className="pnl5-msg">AND MORE SAVED IN BOOKKEEPING TIME</text>
                            </div>
                        </span>
                        <span className="pnl5-img" id="pnl5-img3">
                            <Image src="assets/Panel5/photo-3.png"></Image>
                            <div className="pnl5-txt">
                                <text className="pnl5-value">25</text><text className="pnl5-unit">%</text>
                                <br/><text className="pnl5-msg">DECREASE IN FOOD COSTS</text>
                            </div>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

Panel5.propTypes = {};

export default Panel5;