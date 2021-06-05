import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import bgimage2 from '../images/drumsMD.jpg';

function About(props) {
    return (
        <div>
            <AboutJumbotron />
            <AboutBody />
        </div>
    );
}

function AboutJumbotron(props) {
    return(
        <div>
            <Jumbotron style={{backgroundImage: `url(${bgimage2})`, backgroundSize: 'cover'}} fluid>   
                <Container > 
                    <h1 class="display-2 mt-5 pt-5 mb-3">The Story So Far...</h1>
                    <h4 class="lead ml-3">What sets us apart and why</h4>
                </Container>
            </Jumbotron>
        </div>
    );
}

function AboutBody(props) {
    return (
        <Container>
            <Row>
                <Col className="px-5">
                    <h1 class="display-4">Sit down, and listen to a tale...</h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis ipsam repellendus, minus
                        cupiditate, ex repellat incidunt vel voluptatem modi quod tenetur et possimus nulla labore culpa
                        eaque! Nulla exercitationem temporibus vel quae obcaecati assumenda alias iusto velit suscipit
                        quibusdam, facere saepe ipsum excepturi. Vitae temporibus, distinctio minus nisi dolorum
                        praesentium molestiae placeat dicta laborum assumenda, dolorem minima pariatur quidem vero
                        suscipit velit quo doloremque, amet in perferendis? Neque repudiandae labore, nulla enim
                        voluptatem quasi beatae nemo est sequi mollitia doloribus, possimus rem dolores odio? Eum
                        consectetur iusto est quam exercitationem dolores velit, maiores nulla placeat, culpa a
                        doloremque necessitatibus! Praesentium?</p>
                </Col>
            </Row>
            <Row>
                <div class="d-none d-md-block col-md-4">
                    <img class="img-thumbnail m-3" src="/assets/benchGuitarMD.jpg" alt="" />
                </div>
                <div class="d-none d-md-block col-md-4">
                    <img class="img-thumbnail m-3" src="/assets/newViolin.jpg" alt="" />
                </div>
                <div class="d-none d-md-block col-md-4">
                    <img class="img-thumbnail m-3" src="/assets/drumsMD.jpg" alt="" />
                </div>
            </Row>
            <Row>
                <Col class="px-5 py-4">
                    <h2>Conflict!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero labore sint laborum
                        temporibus
                        quis similique, accusantium culpa non recusandae pariatur sapiente ab distinctio doloremque.
                        Quam, ipsum asperiores eligendi rerum autem temporibus ut neque ex debitis ea! Tempore
                        officia
                        rem enim.</p>
                </Col>
            </Row>
            <Row>
                <Col class="col px-5 py-4">
                    <h2>Resolution, and Where We are Today...</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, magni? Et ipsam veritatis
                        laborum animi nam accusamus sit dolor delectus porro quam. Inventore, voluptatum beatae rerum,
                        recusandae aspernatur, maiores asperiores quaerat totam rem nam soluta at laboriosam aliquam.
                        Veniam in voluptatem, distinctio necessitatibus aliquam sequi! Ex, commodi debitis? Odit,
                        impedit.</p>
                </Col>
            </Row>
     </Container>
    );
};


export default About;