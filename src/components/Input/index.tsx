import { styled } from "styled-components";
import { HTMLProps } from 'react';

export interface InputProps extends HTMLProps<HTMLInputElement> {

}

const Input = styled.input<InputProps>`
  display: inline-flex;
  align-items: center;
  width: 333px;
  height: 59px;
  border-radius: 25px;
  border: none;
  outline: none;
  background: rgba(217, 217, 217, 0.1);
  padding: 0 0 0 43px;
  color: rgba(255, 255, 255, 0.5);
  font-family: Roboto;
  line-height: 16.41px;
  font-weight: 400;
  transition: .3s box-shadow;

  &:focus {
    box-shadow: 0 0 5px white;
  }
`;

export default Input;