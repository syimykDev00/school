import React from 'react';
import ContactHero from "./contactHero/contactHero";
import ContactFeedback from "./contactFeedback/contactFeedback";
import ContactMaps from "./contactMaps/contactMaps";

const Contact = () => {
    return (
        <>
            <ContactHero/>
            <ContactFeedback/>
            <ContactMaps/>
        </>
    );
};

export default Contact;