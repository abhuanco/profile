import React from 'react';
import {Route, Routes} from 'react-router-dom'
import './App.scss'
import {Portfolio, AboutMe, ContactMe} from "./pages";
import MainMenu from './components/MainMenu/MainMenu';
import Header from "./components/Header/Header";
import Presentation from "./pages/Presentation/Presentation";
import {Footer} from "./components/Footer/Footer";

function App() {
    return <>
        <section id="sidebar">
            <div className="inner">
                <MainMenu/>
            </div>
        </section>
        <div id="wrapper">
            <Header/>
            <section id="intro" className="wrapper mss-primary fullscreen fade-up">
                <div className="inner">
                    <Routes>
                        <Route index element={<Presentation/>}></Route>
                        <Route path="/" element={<Presentation/>}></Route>
                        <Route path="/portfolio" element={<Portfolio/>}></Route>
                        <Route path="/about-me" element={<AboutMe/>}></Route>
                        <Route path="/contact-me" element={<ContactMe/>}></Route>
                    </Routes>
                </div>
            </section>
        </div>
        <Footer/>
    </>;
}

export default App;
