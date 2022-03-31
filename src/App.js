import React from 'react';
import Particles from "react-tsparticles";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import './App.css';
import particlesOptions from "./particles.json";
import Navbar from './components/Navbar'
import Header from './components/Header'

// komponent


function App() {
    return (
        <>
            <Particles options={particlesOptions}/>
         <Navbar />
         <Header />
        </>

    );
}

export default App;
