import React from "react";
import {Image, Grid, Row, Col, Carousel, CarouselItem} from "react-bootstrap";
import "./Panel6.scss";

class Panel6 extends React.Component {
    constructor(props) {
        super(props);

        this.handleSelect = this.handleSelect.bind(this);

        this.state = {
            index: 0,
            direction: null,
            slide1: {
                heading: "Our customers love us",
                content: "It's funny what memory does, isn't it? My favorite holiday tradition might not have happened more than once or twice. But because it is such a good memory, so encapsulating of everything I love about the holidays, in my mind it happened every year. Without fail. ",
                author: {
                    name: "Molly O’Keefe",
                    ocupation: "American Author"
                }
            },
                slide2: {
                    content: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad aliquid at aut, cupiditate dolor eaque earum, eius eligendi error id iure libero magnam minus nihil quaerat reprehenderit sint tenetur.",
                    author: {
                        name: "Hannibal Barca",
                        heading: "Our customers love us",
                        ocupation: "Carthaginian General"
                }
            },
            slide3: {
                heading: "Our customers love us",
                content: "Numquam se minus otiosum esse, quam cum otiosus; nec minus solum, quam cum solus esset",
                author: {
                    name: "Publius Scipio Africanus",
                    ocupation: "Roman General"
                }
            },
        };
    }

    handleSelect(selectedIndex, e) {
        this.setState({
            index: selectedIndex,
            direction: e.direction
        });
    }

    render() {
        const {index, direction } = this.state;
        return (
            <div className="panel6">
                <Grid fluid>
                    <Row className="panel6-row">
                        <Col>
                            <Carousel
                                activeIndex={index}
                                direction={direction}
                                onSelect={this.handleSelect}
                                indicators={true}
                            >
                                <CarouselItem>
                                    <div className="pnl6-slide">
                                        <img alt="1280x475" src="assets/slide1.png"/>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="pnl6-slide">
                                        <img alt="1280x475" src="assets/slide2.png"/>
                                    </div>
                                </CarouselItem>
                                <CarouselItem>
                                    <div className="pnl6-slide">
                                        <img alt="1280x475" src="assets/slide3.png"/>
                                    </div>
                                </CarouselItem>
                            </Carousel>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

Panel6.propTypes = {};

export default Panel6;