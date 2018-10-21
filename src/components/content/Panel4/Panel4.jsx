import React from "react";
import {Image, Button, Grid, Row, Col, FormControl, FormGroup } from "react-bootstrap";
import "./Panel4.scss";



class Panel4 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message1: "Timesaving,",
            message2: "moneymaking.",
            message3: "Bellotero.io automatically turns your threaded conversations into a searchable catalog of topics.",
            message4: "Learn more"
        };

    }

    render() {
        return (
            <div className="panel4">
                <Grid fluid>
                    <Row className="panel4-row">
                        <Col lg={6} className="panel4-img">
                            <Image src="assets/Panel4/intro-img-2.jpg"></Image>
                        </Col>
                        <Col lg={6} className="panel4-txt">
                            <p className="panel4-msg1">{this.state.message1}<br/>{this.state.message2}</p>
                            <p className="panel4-msg2">{this.state.message3}</p>
                            <p className="panel4-msg3">{this.state.message4}<Image src="assets/Panel3/arrow-right.png" className="arrow" /></p>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

Panel4.propTypes = {};

export default Panel4;