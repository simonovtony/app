import { DefaultProps } from "@/types/interfaces";
import { FC, useEffect, useState, useRef } from 'react';
import { css, keyframes, styled } from "styled-components";

const Container = styled.div<any>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  display: ${({ isOpen }) => isOpen ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  z-index: ${({ zIndex }) => zIndex ?? '1'};
  background: ${({ isBackground }) => isBackground ? "url('/images/background.png')" : 'transparent'};
  background-size: cover;

  @media all and (max-width: 768px) {
   ${({ isMobileBottom }) => isMobileBottom && css`
      align-items: flex-end;
    `}
  }
`;

const animationShow = keyframes`
  from {
    top: 500;
    opacity: 0;
  }
  to {
    top: 0;
    opacity: 1;
  }
`;

const animationHide = keyframes`
  from {
    top: 0;
    opacity: 1;
  }
  to {
    top: 500;
    opacity: 0;
  }
`;

const Dialog = styled.div<any>`
  display: flex;
  position: relative;
  z-index: 1;
  flex-direction: column;
  border-radius: ${({ borderRadius }) => borderRadius ?? '40px'};
  background-color: rgba(24, 24, 24, ${({ isMobileOpacity }) => isMobileOpacity ? '0.5' : '1'});
  position: relative;
  top: 0;
  width: ${({ width }) => width ?? '430px'};
  height: ${({ height }) => height ?? '481px'};
  animation: ${({ isOpen }) => isOpen ? animationShow : animationHide} 2s normal forwards;
  transition: .5s width;
  transition: .5s height;

  top: 500px;

  ${({ isMobileOpacity }) => isMobileOpacity && css`
    opacity: 0.3;
  `}

  ${({ isMobileFullScreen }) => isMobileFullScreen && css`
    height: 100%;
    transition: .5s width;
  `}

  @media all and (max-width: 768px) {
    width: 100%;  
    transition: .5s width;
  }
`;

export interface ModalProps extends DefaultProps {
  isOpen?: boolean;
  width?: string;
  height?: string;
  borderRadius?: string;
  opacity?: string;
  zIndex?: string;
  isMobileBottom?: boolean;
  isMobileOpacity?: boolean;
  isMobileFullScreen?: boolean;
  isBackground?: boolean;
}

const Modal: FC<ModalProps> = ({
  children,
  isOpen = false,
  width = '430px',
  height = '481px',
  borderRadius = '40px',
  opacity = '1',
  zIndex = '1',
  isMobileBottom = false,
  isMobileOpacity = false,
  isMobileFullScreen = false,
  isBackground = false,
}) => {
  const dialogRef = useRef<HTMLDivElement>();
  const [isContainerOpen, setIsContainerOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(true);

  useEffect(() => {
    if (isOpen) {
      setIsContainerOpen(true);
      setIsDialogOpen(true);
    } else {
      setIsDialogOpen(false);
    }

    const dialogElement = dialogRef.current;
    const animationend = () => {
      if (!isOpen) {
        setIsContainerOpen(false);
      }
    };
    dialogElement?.addEventListener('animationend', animationend);
    return () => {
      dialogElement?.removeEventListener('animationend', animationend);
    }
  }, [isOpen]);

  return (
    <Container 
      isOpen={isContainerOpen} 
      zIndex={zIndex} 
      isMobileBottom={isMobileBottom} 
      isBackground={isBackground}
    >
      <Dialog 
        ref={dialogRef} 
        isOpen={isDialogOpen} 
        width={width} 
        height={height}
        borderRadius={borderRadius}
        opacity={opacity}
        isMobileFullScreen={isMobileFullScreen}
        isMobileOpacity={isMobileOpacity}
      >
        {children}
      </Dialog>
    </Container>
  );
};

export default Modal;