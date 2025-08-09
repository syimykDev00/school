import React from 'react';
import styled from "styled-components";
import {Container} from "../../../components/header/header";
import contactFeedbackIconOne from "../../../assets/img/contactFeedbackIconOne.svg";
import contactFeedbackIconTwo from "../../../assets/img/contactFeedbackIconTwo.svg";
import contactFeedbackIconThree from "../../../assets/img/contactFeedbackIconThree.svg";
import contactFeedbackIconFour from "../../../assets/img/contactFeedbackIconFour.svg";
import {NavLink} from "react-router-dom";

const ContactFeedbackId = styled.section`
    padding: 34px 0 60px 0;
`;

const ContactFeedbackTitle = styled.h1`
    font-family: Inter, sans-serif;
    color: #620C2C;
    text-align: center;
    font-weight: 400;
    font-size: 34px;
    @media (max-width: 400px) {
        font-size: 32px;
    }
    @media (max-width: 320px) {
        font-size: 30px;
    }
`;

const ContactFeedbackDescription = styled.p`
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 18px;
    color: #000000;
    padding: 14px 0 60px 0;
    text-align: center;
    @media (max-width: 576px) {
        padding: 14px 0 40px 0;
    }
    @media (max-width: 400px) {
        width: 90%;
        margin: 0 auto;
        font-size: 17px;
        padding: 14px 0 35px 0;
    }
`;

const ContactFeedbackGeneral = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    @media (max-width: 1024px) {
        justify-content: space-evenly;
        flex-wrap: wrap;
    }
    @media (max-width: 576px) {
        flex-direction: column;
        align-items: start;
    }
`;

const ContactFeedbackIcon = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: 1024px) {
        padding: 0 0 10px 0;
    }
    @media (max-width: 576px) {
        padding: 0 0 15px 0;
    }
    @media (max-width: 450px) {
        padding: 0 0 15px 0;
        width: 90%;
    }
`;

const ContactFeedbackLink = styled.a`
    font-family: Inter, sans-serif;
    font-weight: 400;
    font-size: 23px;
    padding: 0 0 0 6px;
    color: #000000;
    transition: .4s;
    &:hover {
        text-decoration: underline;
        color: royalblue;
    }
    @media (max-width: 1200px) {
        font-size: 22px;
    }
    @media (max-width: 400px) {
        font-size: 21px;
    }
    @media (max-width: 320px) {
        font-size: 19px;
    }
`;

const ContactFeedbackIconImage = styled.img`
    @media (max-width: 1200px) {
        width: 60px;
        height: 60px;
    }
    @media (max-width: 450px) {
        width: 54px;
        height: 54px;
    }
    @media (max-width: 400px) {
        width: 50px;
        height: 50px;
    }
    @media (max-width: 375px) {
        width: 48px;
        height: 48px;
    }
    @media (max-width: 320px) {
        width: 44px;
        height: 44px;
    }
`;

const ContactFeedbackIconWhatsapp = styled.img`
   @media (max-width: 1200px) {
       width: 75px;
       height: 75px;
   }
    @media (max-width: 1024px) {
        width: 72px;
        height: 72px;
    }
    @media (max-width: 450px) {
        width: 68px;
        height: 68px;
    }
    @media (max-width: 400px) {
        width: 60px;
        height: 60px;
    }
    @media (max-width: 375px) {
        width: 58px;
        height: 58px;
    }
    @media (max-width: 320px) {
        width: 52px;
        height: 52px;
    }
`;

const ContactFeedback = () => {

    const schoolNumber = +996509914101;

    return (
        <ContactFeedbackId id="contactFeedback">
            <Container className="container">
                <div className="contactFeedback">
                    <ContactFeedbackTitle>Связатся с нами</ContactFeedbackTitle>
                    <ContactFeedbackDescription>Для обратной связи свяжитесь с нами.</ContactFeedbackDescription>
                    <ContactFeedbackGeneral className="contactFeedbackGeneral">
                        <ContactFeedbackIcon className="contactFeedbackIcon">
                            <ContactFeedbackIconWhatsapp src={contactFeedbackIconOne} alt="img"/>
                            <NavLink to={`https://wa.me/${schoolNumber}?text=%20Саламатсызбы%20мен%20мектепке%20жазылайын%20дегем%20`}>
                                <ContactFeedbackLink>+996 509 914 101</ContactFeedbackLink>
                            </NavLink>
                        </ContactFeedbackIcon>
                        <ContactFeedbackIcon className="contactFeedbackIcon">
                            <ContactFeedbackIconImage src={contactFeedbackIconTwo} alt="img"/>
                            <NavLink to={`https://web.telegram.org/k/`}>
                                <ContactFeedbackLink>@IDEV IT mentoring</ContactFeedbackLink>
                            </NavLink>
                        </ContactFeedbackIcon>
                        <ContactFeedbackIcon className="contactFeedbackIcon">
                            <ContactFeedbackIconImage src={contactFeedbackIconThree} alt="img"/>
                            <NavLink to={`https://www.instagram.com/idev.kg/`}>
                                <ContactFeedbackLink>@IDEV.KG</ContactFeedbackLink>
                            </NavLink>
                        </ContactFeedbackIcon>
                        <ContactFeedbackIcon className="contactFeedbackIcon">
                            <ContactFeedbackIconImage src={contactFeedbackIconFour} alt="img"/>
                            <NavLink to={`https://www.facebook.com/?locale=ru_RU`}>
                                <ContactFeedbackLink>@IDEV IT mentoring</ContactFeedbackLink>
                            </NavLink>
                        </ContactFeedbackIcon>
                    </ContactFeedbackGeneral>
                </div>
            </Container>
        </ContactFeedbackId>
    );
};

export default ContactFeedback;