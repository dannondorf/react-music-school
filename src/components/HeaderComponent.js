import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';


function Header(props) {
    const [staffShow, setStaffShow] = useState(false);
    const [studentShow, setStudentShow] = useState(false);
   
    return( 
        <div>
            <Navbar collapseOnSelect fixed="top" expand="md" variant="dark">
                <Navbar.Brand>
                    <NavLink className="nav-link" to="/home">React Music Academy</NavLink>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><NavLink className="nav-link" to="/lessons">Lessons</NavLink></Nav.Link>
                        <Nav.Link><NavLink className="nav-link" to="/about">About</NavLink></Nav.Link>
                        <Nav.Link><NavLink className="nav-link" to="/contact">Contact</NavLink></Nav.Link>
                    </Nav>
                    <Nav>
                        <Button className="btn-sm" variant="outline-light" onClick={() => setStaffShow(true)}>Staff Login</Button>{' '}
                        <Button className="btn-sm" variant="outline-light" onClick={() => setStudentShow(true)}>Staff Login</Button>{' '}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            <Modal show={staffShow} onHide={() => setStaffShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Staff Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group controlId="staffEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="staffPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setStaffShow(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => setStaffShow(false)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>

            <Modal show={studentShow} onHide={() => setStudentShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Student Login</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <Form>
                    <Form.Group controlId="studentEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="studentPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setStudentShow(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => setStudentShow(false)}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}


export default Header;