// import React from 'react';

import About from "./About";
import ContactSection from "./Contact";;
import Expertise from "./Expertise";
import Herohome from "./Herohome";
import MekongSwiper from "./MekongSwiper";
import Portfolios from "./Portfolios";


function Routhome() {
    return (
        <>
            <Herohome />
            <About />         
            <Expertise />
            <MekongSwiper />
            <Portfolios />
            <ContactSection />
        </>
    )
}

export default Routhome;
