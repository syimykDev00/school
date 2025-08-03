import React from 'react';
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import {Route, Routes} from "react-router-dom";
import Home from "./page/home/home";
import AboutSchool from "./page/aboutSchool/aboutSchool";
import AddmissionRules from "./page/addmissionRules/addmissionRules";
import TeachingStaf from "./page/teachingStaf/teachingStaf";
import AdditionalEducation from "./page/additionalEducation/additionalEducation";
import Contact from "./page/contact/contact";

const App = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route path={'/'} element={<Home/>}/>
                <Route path={'/aboutSchool'} element={<AboutSchool/>}/>
                <Route path={'/admission-rules'} element={<AddmissionRules/>}/>
                <Route path={'/teaching-staff'} element={<TeachingStaf/>}/>
                <Route path={'/additional-education'} element={<AdditionalEducation/>}/>
                <Route path={'/contact'} element={<Contact/>}/>
            </Routes>
            <Footer/>
        </>
    );
};

export default App;