import React, { useState } from "react";
import styled from "styled-components";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${(props) => (props.show ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 12px;
  width: 400px;
  max-width: 90%;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
`;

const Header = styled.h2`
  margin-top: 0;
`;

const Button = styled.button`
  margin-top: 20px;
  background: #4dc3ff;
  color: white;
  border: none;
  padding: 10px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #0096d6;
  }
`;

const Modal = ({ show, onClose, children }) => {
  return (
    <Overlay show={show} onClick={onClose}>
      <ModalContainer onClick={(e) => e.stopPropagation()}>
        {children}
        {/* <Header>Modal Title</Header>
        <p>Бул жерге модалдын текстин же UI элементтерди койсоң болот.</p>
        <Button onClick={onClose}>Жабуу</Button> */}
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
