import React from "react";
import './Panel3.scss';
import {Image, Button, Grid, Row, Col, FormControl, FormGroup } from "react-bootstrap";

class Panel3 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message1: 'Bellotero.io is the digital solution that gives you fast, accurate, automated accounts payable and smart, business-transforming insights',
            message2: 'Get the full picture. In half the time.',
            message3: "Threads keep all your conversations clearly separated by topic so replies won't get buried in an endless stream of group chat.",
            message4: "Learn more"
        };

    }

    render() {
        return (
            <div className="panel3">
                <Grid fluid>
                    <Row className="panel3-row">
                        <Col lg={6} className="panel3-txt">
                            <p className="panel3-msg1">Bellotero.io is the digital solution that <br/>gives you fast, accurate, automated accounts payable and smart, <br/>business-transforming insights </p>
                            <p className="panel3-msg2">{this.state.message2}<br/></p>
                            <p className="panel3-msg3">{this.state.message3}</p>
                            <p className="panel3-msg4">{this.state.message4}<Image src="assets/Panel3/arrow-right.png" className="arrow" /></p>
                        </Col>
                        <Col lg={6} className="panel3-img">
                            <Image src="assets/Panel3/intro-img-1.jpg "></Image>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

Panel3.propTypes = {};

export default Panel3;