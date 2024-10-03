import React from 'react';
import Home from './home/Home';
import Contact from './contact/Contact';
import Portfolio from './portfolio/Portfolio';
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
const MainPage = () => {

    return (
        <>
            <header>
                <Header></Header>
            </header>
            <main>
                <Home></Home>
                <Portfolio></Portfolio>
                <Contact></Contact>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </>
    );
};

export default MainPage;