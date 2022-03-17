import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import plants from "../images/g10.png";
import { close } from "../store/modalSlide";
import { useDispatch } from "react-redux";


const WrapperModal=styled.section`
    position: fixed;
    top: 0px;
    height: 100vh;
    width: 100vw;
    background-color: #FFFFFF52;
    z-index: 10;
    display: grid;
    place-items: center;
    background-image: url(${plants});
    background-size: 100% 100%;
    backdrop-filter: blur(10px);
`;

const Modal=styled.article`
    position: relative;
    width: 60vmin;
    min-height: 30vmin;
    background-color: white;
    border-radius: 1em;
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
const Title = styled.h1`
    justify-self: center;
    width: 100%;
    text-align: center;
    margin-block-end: 1em;
    font-weight: 100;
    font-size: 2em;
    color: #336b4a;
`;

const Form=styled.form`
    display: flex;
    flex-direction: column;
    gap: 2em;
    width: 80%;
`
const Input=styled.input`
    font-size: 1em;
    line-height: 1.4em;
    vertical-align: middle;
    outline: none;
    border: none;
    box-shadow: 0px 1px 0px 0px #95c9a857;
    width: 100%;
    &:focus{
    box-shadow: 0px 1px 0px 0px #95c9a8;
    }
`;
const Button = styled.button`
    cursor: pointer;
    margin-block-end: 1em;  
    border: none;
    outline: none;
    height: 1.6em;
    font-size: 1em;
    background-color: transparent;
    box-shadow: 0px 0px 0px 1px #95c9a857;
    border-radius: 0.2em;
    font-weight: 100;
    color: #336b4a;
    &:hover{
      box-shadow: 0px 0px 0px 1px #95c9a8;
    }
`; 

const ButtonClose = styled.button`
    border: none;
    cursor: pointer;
    background-color: transparent;
    position: absolute;
    right: 1em;
    font-size: 1em;
    opacity: 0.4;
`;

export const ModalRegister=() => {
  const dispatch = useDispatch();

  return(
    ReactDOM.createPortal(
      <WrapperModal>
        <Modal>
          <ButtonClose onClick={() => dispatch(close())}>
            X
          </ButtonClose>
          <Title>Register</Title>
          <Form>
            <Input type="text" placeholder="Username"/>
            <Input type="email" placeholder="Email"/>
            <Input type="password" placeholder="Password"/>
            <Input type="password" placeholder="Validate Password"/>
            <Button type="submit">
              Register
            </Button>
          </Form>
        </Modal>
      </WrapperModal>,
      document.getElementById("modal")
    )
  );
}
