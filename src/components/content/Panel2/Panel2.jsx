import React from "react";
import {Image, Button, Grid, Row, Col, FormControl, FormGroup } from "react-bootstrap";
import './Panel2.scss'

class Panel2 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className="panel2">
                <Grid fluid>
                    <Row className="image-row">
                        <Col lg={2}>
                            <Image src="assets/logos/logo-1.png" className="randomLogos logo-1" responsive></Image>
                        </Col>
                        <Col lg={2}>
                            <Image src="assets/logos/logo-2.jpg" className="randomLogos logo-2" responsive></Image>
                        </Col>
                        <Col lg={2}>
                            <Image src="assets/logos/logo-3.jpg" className="randomLogos logo-3" responsive></Image>
                        </Col>
                        <Col lg={2}>
                            <Image src="assets/logos/logo-4.jpg" className="randomLogos logo-4" responsive></Image>
                        </Col>
                        <Col lg={2}>
                            <Image src="assets/logos/logo-5.jpg" className="randomLogos logo-5" responsive></Image>
                        </Col>
                        <Col lg={2}>
                            <Image src="assets/logos/logo-6.jpg" className="randomLogos logo-6" responsive></Image>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

Panel2.propTypes = {};

export default Panel2;