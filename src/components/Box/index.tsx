import { HTMLProps } from "react";
import { styled } from "styled-components";

export interface BoxProps extends HTMLProps<HTMLDivElement> {
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
  boxShadow?: string;
  background?: string;
  backgroundSize?: string;
  border?: string;
  borderRadius?: string;
  outline?: string;
  cursor?: string;
  overflow?: string;
  gap?: string;
  textAlign?: string;
}

const Box = styled.div<BoxProps>`
  display: ${({ display }) => display ?? 'flex'};
  flex-direction: ${({ flexDirection }) => flexDirection ?? 'row'};
  flex-wrap: ${({ flexWrap }) => flexWrap ?? 'nowrap'};
  justify-content: ${({ justifyContent }) => justifyContent ?? 'flex-start'};
  align-items: ${({ alignItems }) => alignItems ?? 'flex-start'};
  flex: ${({ flex }) => flex ?? '0 1 auto'};
  margin: ${({ margin }) => margin ?? '0'};
  padding: ${({ padding }) => padding ?? '0'};
  position: ${({ position }) => position ?? 'static'};
  width: ${({ width }) => width ?? '100%'};
  height: ${({ height }) => height ?? 'auto'};
  left: ${({ left }) => left ?? 'auto'};
  right: ${({ right }) => right ?? 'auto'};
  top: ${({ top }) => top ?? 'auto'};
  bottom: ${({ bottom }) => bottom ?? 'auto'};
  left: ${({ left }) => left ?? 'auto'};
  z-index: ${({ zIndex }) => zIndex ?? '0'};
  background: ${({ background }) => background ?? 'transparent'};
  background-size: ${({ backgroundSize }) => backgroundSize ?? '100%'};
  border: ${({ border }) => border ?? 'none'};
  outline: ${({ outline }) => outline ?? 'medium'};
  border-radius: ${({ borderRadius }) => borderRadius ?? '0'};
  cursor: ${({ cursor }) => cursor ?? 'auto'};
  overflow: ${({ overflow }) => overflow ?? 'visible'};
  box-shadow: ${({ boxShadow }) => boxShadow ?? 'none'};
  gap: ${({ gap }) => gap ?? '0'};
  text-align: ${({ textAlign }) => textAlign ?? 'left'};
`;

export default Box;