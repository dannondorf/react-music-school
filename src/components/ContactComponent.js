import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import bgimage3 from '../images/contactBG.jpg';


function Contact(props) {
    return (
        <div style={{backgroundImage: `url(${bgimage3})`, backgroundSize: 'cover'}} >
            <SignupForm />
        </div>
    );
}


const SignupForm = () => {
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      phone: '',
      email: '',

    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),
      address: Yup.string()
        .max(50, 'Must be 50 characters or less')
        .required('Required'),
      city: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      state: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      zip: Yup.string()
        .max(9, 'Must be 9 characters or less')
        .required('Required'),
      phone: Yup.string()
        .max(10, 'Must be 10 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Container className="d-md-flex flex-column justify-content-center pt-5">
        <h1 id="contactFormHeader" className=" d-none d-md-block display-3 text-center m-5">Get started on your musical journey today!</h1>
        <Form id="contactForm" className="mt-5 mt-md-3 p-5" onSubmit={formik.handleSubmit} >
          <Form.Row>
              <Form.Group as={Col} className="col-md-6" controlId="firstName">
                  <Form.Label className="formLabel" htmlFor="firstName">First Name</Form.Label>
                  <Form.Control
                    // id="firstName"
                    name="firstName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.firstName}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? (
                    <div>{formik.errors.firstName}</div>
                  ) : null}
              </Form.Group>
        
              <Form.Group as={Col} className="col-md-6" controlId="lastName">
                  <Form.Label className="formLabel" htmlFor="lastName">Last Name</Form.Label>
                  <Form.Control
                    // id="lastName"
                    name="lastName"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.lastName}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? (
                    <div>{formik.errors.lastName}</div>
                  ) : null}
              </Form.Group>
          </Form.Row>

          <Form.Row>
                <Form.Group as={Col} className="col-md-12" controlId="address">
                    <Form.Label className="formLabel" htmlFor="address">Address</Form.Label>
                    <Form.Control
                        // id="address"
                        name="address"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.address}
                    />
                    {formik.touched.address && formik.errors.address ? (
                        <div>{formik.errors.address}</div>
                    ) : null}
              </Form.Group>
          </Form.Row>
            <Form.Row>
                <Form.Group as={Col} className="col-md-5" controlId="city">
                    <Form.Label className="formLabel" htmlFor="city">City</Form.Label>
                    <Form.Control
                        // id="city"
                        name="city"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.city}
                    />
                    {formik.touched.city && formik.errors.city ? (
                        <div>{formik.errors.city}</div>
                    ) : null}
                </Form.Group>
                <Form.Group as={Col} className="col-md-5" controlId="state">
                    <Form.Label className="formLabel" htmlFor="state">State</Form.Label>
                    <Form.Control
                        // id="state"
                        name="state"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.state}
                    />
                    {formik.touched.state && formik.errors.state ? (
                        <div>{formik.errors.state}</div>
                    ) : null}
                </Form.Group>
                <Form.Group as={Col} className="col-md-2" controlId="zip">
                  <Form.Label className="formLabel" htmlFor="zip">Zip</Form.Label>
                  <Form.Control
                    // id="zip"
                    name="zip"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.zip}
                  />
                  {formik.touched.zip && formik.errors.zip ? (
                    <div>{formik.errors.zip}</div>
                  ) : null}
              </Form.Group>
            </Form.Row>
             <Form.Row>
             <Form.Group as={Col} className="col-md-6" controlId="phone">
                  <Form.Label className="formLabel" htmlFor="phone">Phone</Form.Label>
                  <Form.Control
                    // id="zip"
                    name="phone"
                    type="text"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.phone}
                  />
                  {formik.touched.phone && formik.errors.phone ? (
                    <div>{formik.errors.phone}</div>
                  ) : null}
              </Form.Group>
                <Form.Group as={Col} className="col-md-6" controlId="email">
                    <Form.Label className="formLabel" htmlFor="email">Email</Form.Label>
                    <Form.Control
                        // id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div>{formik.errors.email}</div>
                    ) : null}
              </Form.Group>
          </Form.Row>
          <button type="submit">Submit</button>
        </Form>
    </Container>
  );
};





export default Contact;   
