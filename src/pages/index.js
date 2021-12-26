import React, {useState} from 'react';

import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { firstSection, secundSection, fourSection } from '../components/InfoSection/Data';
import Navbar from '../components/Navbar';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen)
    };

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
            <Navbar toggle={toggle}></Navbar>
            <HeroSection/>
            <InfoSection {...firstSection}/>
            <InfoSection {...secundSection}/>
            <Services></Services>
            <InfoSection {...fourSection}/>
            
        </>
    )
}

export default Home
