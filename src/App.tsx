import React from 'react';
import {Route, Routes} from 'react-router-dom'
import './styles/App.scss'
import {Home, Portfolio, AboutMe, ContactUs} from "./pages";
import MainMenu from './components/MainMenu/MainMenu';

function App() {
    return <>
        <section id="sidebar">
            <div className="inner">
                <MainMenu/>
            </div>
        </section>
        <div id="wrapper">
            <section id="intro" className="wrapper style1 fullscreen fade-up">
                <div className="inner">
                    <Routes>
                        <Route index element={<Home/>}></Route>
                        <Route path="/" element={<Home/>}></Route>
                        <Route path="/portfolio" element={<Portfolio/>}></Route>
                        <Route path="/about-me" element={<AboutMe/>}></Route>
                        <Route path="/contact-me" element={<ContactUs/>}></Route>
                    </Routes>
                </div>
            </section>
        </div>
        <footer id="footer" className="wrapper style1-alt">
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
