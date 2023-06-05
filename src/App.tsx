import React from 'react';
import {Link, Route, Routes} from 'react-router-dom'
import './Styles/App.scss'
import {Home, Portfolio, AboutMe, ContactUs, Menu} from "./pages";

function App() {
    return <>
        <Menu/>
        <Routes>
            <Route index element={<Home/>}></Route>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/portfolio" element={<Portfolio/>}></Route>
            <Route path="/about-me" element={<AboutMe/>}></Route>
        </Routes>
    </>;
}

export default App;
