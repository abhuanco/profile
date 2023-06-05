import React from 'react';
import {Route, Routes} from 'react-router-dom'
import './styles/App.scss'
import {Home, Portfolio, AboutMe, ContactUs} from "./pages";
import MainMenu from './components/MainMenu/MainMenu';

function App() {
    return <>
        <MainMenu/>
        <Routes>
            <Route index element={<Home/>}></Route>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/portfolio" element={<Portfolio/>}></Route>
            <Route path="/about-me" element={<AboutMe/>}></Route>
            <Route path="/contact-us" element={<ContactUs/>}></Route>
        </Routes>
    </>;
}

export default App;
