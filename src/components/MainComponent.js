import React from 'react';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';

function Main(props) {
    return(
        <div>
            <Header />
            <Home />
            <Footer />
        </div>
    );
}

export default Main;