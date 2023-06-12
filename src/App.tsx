import React from 'react';
import {Route, Routes} from 'react-router-dom'
import './App.scss'
import {Portfolio, AboutMe, ContactMe} from "./pages";
import MainMenu from './components/MainMenu/MainMenu';
import Header from "./components/Header/Header";
import Presentation from "./pages/Presentation/Presentation";

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
        <footer id="footer" className="wrapper mss-primary-footer">
            <div className="inner">
                <ul className="menu">
                    <li>© Untitled. All rights reserved.</li>
                    <li>Images: <a href="http://unsplash.com">Unsplash</a></li>
                    <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
                </ul>
            </div>
        </footer>
    </>;
}

export default App;
