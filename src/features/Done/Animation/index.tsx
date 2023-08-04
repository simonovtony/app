import { FC } from 'react';
import { css, keyframes, styled } from 'styled-components';

const red = '#F73F52';
const orange = '#FF9000';
const yellow = '#FBD400';
const green = '#9ED763';
const blue = '#6730EC';
const purple = '#815A8F';
const white = '#FFFFFF';
const rebeccapurple = '#663399';

interface AnimationKeyFrame {
  from: string;
  to: string;
}

const animationKeyFrame = ({ from, to }: AnimationKeyFrame) => keyframes<AnimationKeyFrame>`
  0% {
    transform: rotate(${from});
  }
  30%,
  70% {
    transform: rotate(${to});
  }
  90%,
  10% {
    transform: rotate(${from});
  }
`;

const Block = styled.div<any>`
  width: 70px;
  height: 225px;
  position: absolute;
  top: 0px;
  border-radius: 5px;
  border-top: solid 2px rgba(0, 0, 0, .2);
  border-left: solid 3px rgba(255, 255, 255, .2);
  border-bottom: solid 3px rgba(0, 0, 0, .2);
  text-align: center;
  box-sizing: border-box;
  transform-origin: center 90%;
  display: inline-block;
  backface-visibility: hidden;
  margin-left: -35px;
  transform: rotate(0deg);

  background: ${({ background }) => background};
  animation: ${({ animation }) => animationKeyFrame(animation)} 5s cubic-bezier(0.4, 0.0, 0.2, 1) infinite;

  div:before {
    width: 16px;
    height: 16px;
    content: "";
    background-color: ${white};
    display: inline-block;
    border-radius: 8px;
    bottom: 10px;
    position: absolute;
    margin-left: -8px;
  }
`;

const Swatch = styled.div`
  display: block;
  text-align: center;
  position: relative;
  margin: 100px;
`;

const Animation: FC = () => {
  return (
    <>
      <Swatch>
        <Block background={red} animation={{
          from: '0deg',
          to: '65deg',
        }}/>
        <Block background={orange} animation={{
          from: '0deg',
          to: '40deg',
        }}/>
        <Block background={yellow} animation={{
          from: '0deg',
          to: '15deg',
        }}/>
        <Block background={green} animation={{
          from: '0deg',
          to: '-15deg',
        }}/>
        <Block background={blue} animation={{
          from: '0deg',
          to: '-40deg',
        }}/>
        <Block background={purple} animation={{
          from: '0deg',
          to: '-65deg',
        }}/>
      </Swatch>
    </>
  );
};

export default Animation;