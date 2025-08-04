import React from 'react';
import AboutSchoolHero from "./aboutSchoolHero";
import SchoolTradition from "./schoolTradition/schoolTradition";
import DirectorsAddress from "./directorsAddress/directorsAddress";
import SchoolFloors from "./schoolFloors/schoolFloors";

const AboutSchool = () => {
    return (
        <>
            <AboutSchoolHero/>
            <SchoolTradition/>
            <DirectorsAddress/>
            <SchoolFloors/>
        </>
    );
};

export default AboutSchool;