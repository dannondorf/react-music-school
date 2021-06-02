import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Accordion from 'react-bootstrap/Accordion';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

function ControlledCarousel() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/assets/benchGuitarMD.jpg"
                alt="First slide"
                />
                <Carousel.Caption>
                    <h1>First slide label</h1>
                    <h3 className="d-none d-sm-block">Nulla vitae elit libero, a pharetra augue mollis interdum.</h3>
                    <Button className="carouselBtn" size="lg" variant="outline-light">Get Started</Button>{' '}
                </Carousel.Caption>
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/assets/drumsMD.jpg"
                alt="Second slide"
                />

                <Carousel.Caption>
                    <h1>Second slide label</h1>
                    <h3 className="d-none d-sm-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
                    <Button className="carouselBtn" size="lg" variant="outline-light">Get Started</Button>{' '}
                </Carousel.Caption>
                
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100"
                src="/assets/newViolin.jpg"
                alt="Third slide"
                />

                <Carousel.Caption>
                    <h1>Third slide label</h1>
                    <h3 className="d-none d-sm-block">Praesent commodo cursus magna, vel scelerisque nisl consectetur.</h3>
                    <Button className="carouselBtn" size="lg" variant="outline-light">Get Started</Button>{' '}
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

function Home(props) {
    return(
        <div>
            <ControlledCarousel />
            <Row>
                <Col>
                    <h1 className="display-4 px-3 m-sm-5 px-sm-5 ">Does your musical journey begin today?</h1>
                    <p className="px-3 mx-sm-5 px-sm-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, recusandae
                        repudiandae? Nesciunt inventore, eligendi aut libero reiciendis labore fugit repudiandae, aperiam natus illo aliquam a
                        dicta earum atque quisquam molestiae eum rem repellendus corporis cum similique. Dolores dolore
                        excepturi nemo!</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h2 className="text-center mt-5 mb-4">A Few Reasons Choose Us</h2>
                </Col>
            </Row>
            <AdvantageAccordion />
            <TestimonialSlider />
            
        </div>    
    )
}

function AdvantageAccordion(props) {
    return(
        <Accordion defaultActiveKey="0">
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                Competitive Advantage #1
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                    <Card.Body>
                        <Card.Img variant="top" src="/assets/drumsMD.jpg" style={{ height: '25rem' }} alt="" />
                        <div className="p-5">
                            <Card.Title >Competitive Advantage #1</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione qui cumque odio quod dolor
                                exercitationem tenetur explicabo maiores est aut, alias adipisci cum voluptas sapiente,
                                possimus distinctio ex repellendus eligendi vitae, in inventore. Quae id distinctio in eaque
                                mollitia! Iusto aperiam dolore tempora necessitatibus in accusamus voluptatum eos est
                                molestias?
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                Competitive Advantage #2
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                    <Card.Body>
                        <Card.Img variant="top" src="/assets/LiveGuitar.jpg" style={{ height: '25rem' }} alt="" />
                        <div className="p-5">
                            <Card.Title >Competitive Advantage #2</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione qui cumque odio quod dolor
                                exercitationem tenetur explicabo maiores est aut, alias adipisci cum voluptas sapiente,
                                possimus distinctio ex repellendus eligendi vitae, in inventore. Quae id distinctio in eaque
                                mollitia! Iusto aperiam dolore tempora necessitatibus in accusamus voluptatum eos est
                                molestias?
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                Competitive Advantage #3
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                    <Card.Body>
                        <Card.Img variant="top" src="/assets/violin.jpg" style={{ height: '25rem' }} alt="" />
                        <div className="p-5">
                            <Card.Title >Competitive Advantage #3</Card.Title>
                            <Card.Text>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione qui cumque odio quod dolor
                                exercitationem tenetur explicabo maiores est aut, alias adipisci cum voluptas sapiente,
                                possimus distinctio ex repellendus eligendi vitae, in inventore. Quae id distinctio in eaque
                                mollitia! Iusto aperiam dolore tempora necessitatibus in accusamus voluptatum eos est
                                molestias?
                            </Card.Text>
                        </div>
                    </Card.Body>
                </Accordion.Collapse>
            </Card>
        </Accordion>
    );
}

function TestimonialSlider(props) {
    return(
        <Container>
            <Carousel className="py-3 d-block w-100" fade>
                <Carousel.Item>
                    <Row>
                        <Col sm={3} className="d-none d-sm-block">
                            <Image src="/assets/testimonial1.jpg" thumbnail />
                        </Col>
                        <Col sm={8}>
                            <Card>
                                <Card.Header>She Loves This Music School!</Card.Header>
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                        <p>I really love it here!  My family is learning so much!</p>
                                        <footer className="blockquote-footer">Rockstar Customer #1</footer>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col sm={3} className="d-none d-sm-block">
                            <Image src="/assets/testimonial2.jpg" thumbnail />
                        </Col>
                        <Col sm={8}>
                            <Card>
                                <Card.Header>The Best Music Instruction Around!</Card.Header>
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                        <p>My family and I buy everything they put out.  We love this business so much!  Our lives wouldn't be the same without them!</p>
                                        <footer class="blockquote-footer">Rockstar Customer #2</footer>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                    <Row>
                        <Col sm={3} className="d-none d-sm-block">
                            <Image src="/assets/testimonial3.jpg" thumbnail />
                        </Col>
                        <Col sm={8}>
                            <Card>
                                <Card.Header>I Didn't Know I Was Musical Until I Attended Here!</Card.Header>
                                <Card.Body>
                                    <blockquote className="blockquote mb-0">
                                        <p>This has made all my wildest musical dreams come true!  These people are truly miracle workers!</p>
                                        <footer class="blockquote-footer">Rockstar Customer #3</footer>
                                    </blockquote>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default Home;