import React from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import Lessons from './LessonsComponent';
import { Switch, Route, Redirect } from 'react-router-dom';
import About from './AboutComponent';
import Contact from './ContactComponent';



function Main(props) {

    const HomePage = () => {
        return (
            <Home />
        );
    };

    const LessonsPage = () => {
        return (
            <Lessons />
        );
    };

    const AboutPage = () => {
        return (
            <About />
        );
    };

    const ContactPage = () => {
        return (
            <Contact />
        );
    };

    return(
        <div>
            <Header />
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route path='/lessons' component={LessonsPage} />
                <Route path='/about' component={AboutPage} />
                <Route path='/contact' component={ContactPage} />
            </Switch>
            <Footer />
        </div>
    );
}

export default Main;