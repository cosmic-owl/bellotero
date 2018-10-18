import React from "react";
import {Image, Button, Grid, Row, Col   } from "react-bootstrap";
import './Panel1.scss';


class Panel1 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className="panel1">
                <Grid>
                    <Row>
                        <Col className="panel1-text" xl={5}>
                            <div className="bold-text">Digitize your invoices</div>
                            <text className="normal-text">
                                And create your own <br/>
                                shopping cart
                            </text>
                        </Col>
                        <Col xl={7}>
                            <Image src="assets/hero-mockup.png" className="panel1-image" responsive></Image>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

Panel1.propTypes = {};

export default Panel1;