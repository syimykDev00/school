import React from 'react';
import Hero from "./hero/hero";
import MoreAboutSchool from "./moreAboutSchool/moreAboutSchool";
import SchoolBanner from "./schoolBanner/schoolBanner";
import InformationEducation from "./informationEducation/informationEducation";

const Home = () => {
    return (
        <>
            <Hero/>
            <MoreAboutSchool/>
            <SchoolBanner/>
            <InformationEducation/>
        </>
    );
};

export default Home;