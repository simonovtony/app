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

const defaultShownStateOfCollections = Array(5).fill(false);

export const CollectionIcon: FC = () => {
  const timer = useRef<any>();
  const [shownStateOfCollections, setShownStateOfCollections] = useState(defaultShownStateOfCollections)

  useEffect(() => {
    const handler = () => {
      const newShownStateOfCollections = defaultShownStateOfCollections.map(() => Math.random() > 0.5);
      setShownStateOfCollections(newShownStateOfCollections);
      timer.current = setTimeout(handler, 1000);
    };
    handler();
    return () => clearTimeout(timer.current);
  }, []);

  return (
    <Box width="137px" height="90px">
      <Box margin="0 5px 0 0">
        <Icon
          isShown={shownStateOfCollections[0]}
          src="/icons/collection-1.svg"
          alt=""
          width="90"
          height="90"
        />
      </Box>
      <Box flexDirection='column'>
        <Box margin="0 0 5px 0">
          <Icon 
            isShown={shownStateOfCollections[1]}
            src="/icons/collection-2.svg"
            alt=""
            width="42"
            height="43"
          />
        </Box>
        <Box margin="0 0 3px 0">
          <Box margin="0 4px 0 0">
            <Icon 
              isShown={shownStateOfCollections[2]}
              src="/icons/collection-3.svg"
              alt=""
              width="19"
              height="19"
            />
          </Box>
          <Box>
            <Icon 
              isShown={shownStateOfCollections[3]}
              src="/icons/collection-4.svg"
              alt=""
              width="19"
              height="19"
            />
          </Box>
        </Box>
        <Box margin="0 0 3px 0">
          <Box margin="0 4px 0 0">
            <Icon 
              isShown={shownStateOfCollections[4]}
              src="/icons/collection-5.svg"
              alt=""
              width="19"
              height="19"
            />
          </Box>
          <Box>
            <Icon 
              isShown={shownStateOfCollections[5]}
              src="/icons/collection-6.svg"
              alt=""
              width="19"
              height="19"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}