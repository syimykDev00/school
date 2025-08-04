import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderId = styled.header`
  padding: 20px 0;
  position: sticky;
  z-index: 100;
  top: 0;
  background: white;
`;

export const Container = styled.div`
  width: 90%;
  margin: 0 auto;
`;

const HeaderGeneral = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderNavbar = styled.nav`
  @media (max-width: 1024px) {
    display: none;
  }
`;

const HeaderLink = styled.a`
  font-family: Montserrat, sans-serif;
  font-weight: 500;
  font-size: 17px;
  color: #000000;
  padding: 0 20px;
  transition: 0.4s;
  &:hover {
    text-decoration: underline;
    color: royalblue;
  }
`;

const Burger = styled.div`
  display: none;
  cursor: pointer;
  flex-direction: column;
  gap: 5px;

  @media (max-width: 1024px) {
    display: flex;
  }

  div {
    width: 25px;
    height: 3px;
    background-color: #000;
    transition: 0.3s;
  }
`;

const FullscreenMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100vh;
  width: 100%;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 40px;
  z-index: 999;

  // Анимация
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.3s ease-in-out;

  a {
    font-size: 24px;
    font-weight: bold;
    color: black;
    text-decoration: none;
    transition: 0.3s;
  }

  a:hover {
    color: royalblue;
  }
`;

const CloseBtn = styled.div`
  position: absolute;
  top: 30px;
  right: 30px;
  font-size: 35px;
  font-weight: bold;
  cursor: pointer;
`;

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    // Блокируем скролл при открытом меню
    useEffect(() => {
        document.body.style.overflow = menuOpen ? 'hidden' : 'auto';
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [menuOpen]);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <HeaderId id="header">
            <Container>
                <HeaderGeneral>
                    <NavLink to={'/'}>
                        <h1>Logo</h1>
                    </NavLink>

                    <HeaderNavbar>
                        <NavLink to={'/aboutSchool'}> <HeaderLink>О школе</HeaderLink> </NavLink>
                        <NavLink to={'/admission-rules'}> <HeaderLink>Правила приема</HeaderLink> </NavLink>
                        <NavLink to={'/teaching-staff'}> <HeaderLink>Пед.коллектив</HeaderLink> </NavLink>
                        <NavLink to={'/additional-education'}> <HeaderLink>Доп.образование</HeaderLink> </NavLink>
                        <NavLink to={'/contact'}> <HeaderLink>Контакты</HeaderLink> </NavLink>
                    </HeaderNavbar>

                    <Burger onClick={toggleMenu}>
                        <div />
                        <div />
                        <div />
                    </Burger>
                </HeaderGeneral>
            </Container>

            <FullscreenMenu isOpen={menuOpen}>
                <CloseBtn onClick={closeMenu}>&times;</CloseBtn>
                <NavLink to="/aboutSchool" onClick={closeMenu}>О школе</NavLink>
                <NavLink to="/admission-rules" onClick={closeMenu}>Правила приема</NavLink>
                <NavLink to="/teaching-staff" onClick={closeMenu}>Пед.коллектив</NavLink>
                <NavLink to="/additional-education" onClick={closeMenu}>Доп.образование</NavLink>
                <NavLink to="/contact" onClick={closeMenu}>Контакты</NavLink>
            </FullscreenMenu>
        </HeaderId>
    );
};

export default Header;
