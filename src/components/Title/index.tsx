import { HTMLProps } from 'react';
import { styled } from 'styled-components';

export interface TitleProps extends HTMLProps<HTMLHeadingElement> {
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string | number;
  color?: string;
  lineHeight?: string;
  opacity?: string | number;
}

const Title = styled.h3<TitleProps>`
  font-family: ${({ fontFamily }) => fontFamily ?? 'Roboto'};
  font-size: ${({ fontSize }) => fontSize ?? '32px'};
  font-weight: ${({ fontWeight }) => fontWeight ?? 400};
  line-height: ${({ lineHeight }) => lineHeight ?? '37.5px'};
  color: ${({ color }) => color ?? '#ffffff'};
  opacity: ${({ opacity }) => opacity ?? 1};
`;

export default Title;