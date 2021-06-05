import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bgimage from '../images/violin.jpg';

function Lessons(props) {
    return(
        <div>
            <LessonsJumbotron />
            <Programs />
        </div>
    );
}

function LessonsJumbotron(props) {
    return(
        <div>
            <Jumbotron style={{backgroundImage: `url(${bgimage})`}} fluid>   
                <Container > 
                    <h1 className="display-2 pt-5 pb-2">Music Lasts a Lifetime</h1>
                    <h3 className="d-none d-sm-block display-4">The lesson lasts and hour</h3>
                    <h4 className="d-none d-md-block pl-2">(or half hour if you prefer)</h4>
                </Container>
            </Jumbotron>
        </div>
    );
}

const Programs = () => {
    return(
        <Container>
            <Row>
                <Col class="py-5 border-bottom">
                    <h1 class="text-center display-4">Our Programs</h1>
                </Col>
            </Row>
            <Row>
                <Col class=" border-bottom">
                    <div class="media my-5">
                        <img class="d-none d-md-block col-4 img-fluid align-self-center mr-4" src="/assets/drumsMD.jpg"
                            alt="Generic placeholder image" />
                        <div class="align-self-center media-body">
                            <h3 class="mt-0">Music Option 1</h3>
                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                                condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                            <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo.
                                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col class="border-bottom">
                    <div class="media my-5">
                        <div class="media-body align-self-center">
                            <h3 class="mt-0 mb-1">Music Option 2</h3>
                            Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                            Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc
                            ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                        </div>
                        <img class="d-none d-md-block col-4 ml-4 align-self-center" src="/assets/LiveGuitar.jpg"
                            alt="Generic placeholder image"/>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div class="media my-5">
                        <img class="d-none d-md-block col-4 align-self-center mr-4" src="/assets/newViolin.jpg"
                            alt="Generic placeholder image" />
                        <div class="media-body align-self-center">
                            <h3 class="mt-0">Music Option 3</h3>
                            <p>Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante
                                sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce
                                condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
                            </p>
                            <p class="mb-0">Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu leo.
                                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                            </p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Lessons;