import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer(props) {
    return(
        <div className="site-footer">
            <Row>
                <Col className="col-4 col-sm-2 offset-1 mt-1">
                <h5>Links</h5>
                    <ul class="list-unstyled">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#lessons">Lessons</a></li>
                        <li><a href="#pricing">Pricing</a></li>
                        <li><a href="#about">About</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>
                </Col>
                <Col className="col-6 col-sm-5 text-center mt-4">
                <h5>Social</h5>
                    <a className="btn" href="http://instagram.com/"><i
                            className="fa fa-instagram fa-lg"></i></a>
                    <a className="btn" href="http://facebook.com/"><i
                            className="fa fa-facebook fa-lg"></i></a>
                    <a className="btn" href="http://twitter.com/"><i
                            className="fa fa-twitter fa-lg"></i></a>
                    <a className="btn" href="http://youtube.com/"><i
                            className="fa fa-youtube fa-lg"></i></a>
                </Col>
                <Col className="col-sm-4Name text-center mt-4">
                    <a role="button" class="btn btn-link" href="tel:+12065551234">
                        <i className="fa fa-phone fa-lg text-primary"></i></a> 1-206-555-1234<br />
                    <a role="button" class="btn btn-link" href="mailto:campsites@nucamp.co"><i
                            className="fa fa-envelope-o fa-lg text-primary"></i> </a>info@musicschool.co
                </Col>
            </Row>
        </div>
    );
}

export default Footer;