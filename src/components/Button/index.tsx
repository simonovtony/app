import { HTMLProps } from 'react';
import { styled } from 'styled-components';

export interface ButtonProps extends HTMLProps<HTMLButtonElement> {
  display?: string;
  flexDirection?: string;
  flexWrap?: string;
  justifyContent?: string;
  alignItems?: string;
  margin?: string;
  padding?: string;
  flex?: string;
  position?: string;
  width?: string;
  height?: string;
  left?: string;
  right?: string;
  top?: string;
  bottom?: string;
  zIndex?: string;
  background?: string;
  backgroundSize?: string;
  border?: string;
  borderRadius?: string;
  outline?: string;
  cursor?: string;
}

const Button = styled.button<ButtonProps>`
  display: ${({ display }) => display ?? 'flex'};
  flex-direction: ${({ flexDirection }) => flexDirection ?? 'row'};
  flex-wrap: ${({ flexWrap }) => flexWrap ?? 'nowrap'};
  justify-content: ${({ justifyContent }) => justifyContent ?? 'flex-start'};
  align-items: ${({ alignItems }) => alignItems ?? 'flex-start'};
  flex: ${({ flex }) => flex ?? '0 1 auto'};
  margin: ${({ margin }) => margin ?? '0'};
  padding: ${({ padding }) => padding ?? '0'};
  position: ${({ position }) => position ?? 'static'};
  width: ${({ width }) => width ?? 'auto'};
  height: ${({ height }) => height ?? 'auto'};
  left: ${({ left }) => left ?? 'auto'};
  right: ${({ right }) => right ?? 'auto'};
  top: ${({ top }) => top ?? 'auto'};
  bottom: ${({ bottom }) => bottom ?? 'auto'};
  left: ${({ left }) => left ?? 'auto'};
  z-index: ${({ zIndex }) => zIndex ?? '0'};
  background: ${({ background }) => background ?? 'transparent'};
  background-size: ${({ backgroundSize }) => backgroundSize ?? '100%'};
  border: ${({ background }) => background ?? 'none'};
  outline: ${({ outline }) => outline ?? 'medium'};
  border-radius: ${({ borderRadius }) => borderRadius ?? '0'};
  cursor: ${({ cursor }) => cursor ?? 'auto'};
`;

export default Button;