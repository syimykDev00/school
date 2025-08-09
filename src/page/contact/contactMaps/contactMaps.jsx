import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/header/header";

const ContactMapsId = styled.section`
    padding: 0 0 100px 0;
`;

const ContactGoogleMaps = styled.iframe`
    @media (max-width: 450px) {
        height: 450px;
    }
    @media (max-width: 375px) {
        height: 440px;
    }
`;

const ContactMaps = () => {
    return (
        <ContactMapsId id="contactMaps">
            <Container className="container">
                <div className="contactMaps">
                    <ContactGoogleMaps
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1417156.6289413406!2d69.36826050415542!3d39.90706451956155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ba114eaf6b8355%3A0x29cc56cd421622bf!2z0JHQsNGC0LrQtdC90YHQutCw0Y8g0L7QsdC70LDRgdGC0Yw!5e0!3m2!1sru!2skg!4v1754502765235!5m2!1sru!2skg"
                        width="100%" height="567px" style={{border: "0"}} allowFullScreen="" loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade">
                    </ContactGoogleMaps>
                </div>
            </Container>
        </ContactMapsId>
    );
};

export default ContactMaps;