import { HTMLProps } from 'react';
import { styled } from 'styled-components';

export interface TextProps extends HTMLProps<HTMLSpanElement> {
  display?: string;
  margin?: string;
  padding?: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string | number;
  color?: string;
  lineHeight?: string;
  opacity?: string | number;
  textAlign?: string;
  cursor?: string;
  background?: string;
  backgroundClip?: string;
  textFillColor?: string;
  whiteSpace?: string;
}

const Text = styled.span<TextProps>`
  display: ${({ display }) => display ?? 'inline-flex'};
  margin: ${({ margin }) => margin ?? '0'};
  padding: ${({ padding }) => padding ?? '0'};
  font-family: ${({ fontFamily }) => fontFamily ?? 'Roboto'};
  font-size: ${({ fontSize }) => fontSize ?? '14px'};
  font-weight: ${({ fontWeight }) => fontWeight ?? 400};
  line-height: ${({ lineHeight }) => lineHeight ?? '16.41px'};
  color: ${({ color }) => color ?? '#ffffff'};
  opacity: ${({ opacity }) => opacity ?? 1};
  text-align: ${({ textAlign }) => textAlign ?? 'start'};
  cursor: ${({ cursor }) => cursor ?? 'auto'};
  background: ${({ background }) => background ?? 'none'};
  background-clip: ${({ backgroundClip }) => backgroundClip ?? 'border-box'} ;
  -webkit-background-clip: ${({ backgroundClip }) => backgroundClip ?? 'border-box'} ;
  -webkit-text-fill-color: ${({ textFillColor }) => textFillColor ?? 'inherit'};
  white-space: ${({ whiteSpace }) => whiteSpace ?? 'normal'};
`;

export default Text;