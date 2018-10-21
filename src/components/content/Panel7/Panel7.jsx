import React from "react";
import {Image, Grid, Row, Col, FormControl, FormGroup, Form, ControlLabel} from "react-bootstrap";
import "./Panel7.scss";

function FieldGroup({id, label, help, ...props}) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props}/>
        </FormGroup>
    );
}

class Panel7 extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};

    }

    render() {
        return (
            <div className="panel7">
                <Grid>
                    <Row className="panel7-row1">
                        <Col lg={12}>
                            <div className="pnl7-txt1"><text>See how much you can save <br/>with Bellotero.io</text></div>
                            <div className="pnl7-txt2"><text>With Bellotero.io you save time and money make real-time decisions that boost your business and your bottom line. Get less wrongfully blocked payments, save time on bookkeeping and no need to worry about safety. </text></div>
                        </Col>
                    </Row>
                    <Row className="panel7-row2">
                        <Col lg={6}>
                            <form action="">
                                <FieldGroup id="monthlyIngredientsSpending" type="text" label="Monthly ingredient spending"/>
                                <FieldGroup id="fullTimeEmployees" type="text" label="Full-time employees the process involve"/>
                            </form>
                        </Col>
                        <Col lg={6}>
                            <div className="annual-savings">
                                <text>Your estimated annual savings</text>
                                <div className="result" id="annual-result"></div>
                            </div>
                            <div className="cost-savings">
                                <text>Your estimated food cost savings</text>
                                <div className="result" id="cost-result"></div>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

Panel7.propTypes = {};

export default Panel7;