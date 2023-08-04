import Box from '@/components/Box';
import Image from 'next/image';
import { FC, useRef, useEffect, useState } from 'react';
import { keyframes, styled } from 'styled-components';

const showAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const hideAnimation = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;

const Icon = styled<any>(Image)`
  animation-name: ${({ isShown }) => isShown ? showAnimation : hideAnimation};
  animation-duration: 1s;
  animation-fill-mode: forwards;
`;

const defaultShownStateOfGleans = Array(3).fill(false);

export const GleanIcon: FC = () => {
  const timer = useRef<any>();
  const [shownStateOfGleans, setShownStateOfGleans] = useState(defaultShownStateOfGleans)

  useEffect(() => {
    const handler = () => {
      const newShownStateOfCollections = defaultShownStateOfGleans.map(() => Math.random() > 0.5);
      setShownStateOfGleans(newShownStateOfCollections);
      timer.current = setTimeout(handler, 1000);
    };
    handler();
    return () => clearTimeout(timer.current);
  }, []);

  return (
    <Box position="relative" width="124px" height="97px">
      <Box position="absolute" zIndex="4" left="0px" top="0px">
        <Icon
          isShown={shownStateOfGleans[0]}
          src="/icons/glean-1.svg"
          alt=""
          width="87"
          height="83"
        />
      </Box>
      <Box position="absolute" zIndex="3" left="91px" top="0px">
        <Icon
          isShown={shownStateOfGleans[1]}
          src="/icons/glean-2.svg"
          alt=""
          width="26"
          height="43"
        />
      </Box>
      <Box position="absolute" zIndex="1"  left="49px" top="50px">
        <Icon
          isShown={shownStateOfGleans[2]}
          src="/icons/glean-3.svg"
          alt=""
          width="75"
          height="47"
        />
      </Box>
      <Box position="absolute" zIndex="2" left="69px" top="55px">
        <Icon
          isShown={shownStateOfGleans[2]}
          src="/icons/glean-4.svg"
          alt=""
          width="37"
          height="37"
        />
      </Box>
    </Box>
  );
}