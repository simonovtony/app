import { FC, useCallback, useRef, useState, ChangeEvent, KeyboardEvent, useMemo } from "react";
import Box from '@/components/Box';
import Input from '@/components/Input';
import Image from "next/image";
import Text from '@/components/Text';
import { emptyCallback } from "@/utilities";
import { css, keyframes, styled } from "styled-components";

const buttonLoaderAnimation = keyframes`
  from {
    top: -23px;
    height: 0%;
  }
  to {
    top: 0;
    height: 100%;
  }
`;

const ButtonLoader = styled.div<any>`
  position: absolute;
  width: calc(100% + 43px * 2);
  height: 0%;
  left: -43px;
  background-color: #4BC793;

  ${({ isAnimation }) => isAnimation && css`
    animation-name: ${buttonLoaderAnimation};
    animation-duration: 3s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
  `}
`;

const ButtonStatusAnimation = keyframes`
  from {
    width: 200px;
    height: 200px;
  }
  to {
    width: 24px;
    height: 24px;
  }
`;

const ButtonStatus = styled.div<any>`
  display: none;
  width: 200px;
  height: 200px;
  position: absolute;
  background-image: url('/icons/success.svg');
  background-size: 100%;

  ${({ isAnimation }) => isAnimation && css`
    display: inline-flex;
    animation-name: ${ButtonStatusAnimation};
    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    animation-iteration-count: 1;
  `}
`;

const Button = styled.button<any>`
  position: absolute;
  overflow: hidden;
  right: 6px;
  top: 7px;
  width: 70px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(217, 217, 217, 1);
  cursor: pointer;
  border-radius: 43px;
  outline: none;
  border: none;
`;

const ButtonText = styled.span`
  display: inline-flex;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 500;
  color: rgba(0, 0, 0, 1);
  cursor: pointer;
`;

export interface AddLinkProps {
  onAdd: (_newLink: string) => void;
}

const AddLink: FC<AddLinkProps> = ({
  onAdd = emptyCallback,
}) => {
  const buttonStatusRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [inputValue, setInputValue] = useState<string>('');
  const [isButtonStatusShown, setIsButtonStatusShown] = useState<boolean>(false);
  const [isButtonAnimation, setIsButtonAnimation] = useState<boolean>(false);
  const [isPlaceholderShown, setIsPlaceholderShown] = useState<boolean>(true);
  const [isInputDisabled, setisInputDisabled] = useState<boolean>(false);

  const isAddButtonShown = useMemo<boolean>(() => inputValue.length > 0, [inputValue]);

  const handleInputBlur = useCallback(() => {
    if (inputValue.length === 0) {
      setIsPlaceholderShown(true);
    }
  }, [inputValue]);

  const handleInputFocus = useCallback(() => {
    setIsPlaceholderShown(false);
    inputRef.current?.focus();
  }, []);

  const handleInputChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const {
      target: {
        value: newInputValue,
      }
    } = event;
    setInputValue(newInputValue);
  }, []);

  const handleInputKeyUp = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
    const { key } = event;
    if (key === 'Enter') {
      onAdd(inputValue);
      setInputValue('');
    }
  }, [inputValue, onAdd]);

  const handleAddButtonClick = useCallback(() => {
    setisInputDisabled(true);
    const buttonElement = buttonRef.current;
    const buttonHandler = () => {
      setIsButtonStatusShown(true);
      buttonElement?.removeEventListener('animationend', buttonHandler);
    }
    buttonElement?.addEventListener('animationend', buttonHandler);
    const buttonStatusElement = buttonStatusRef.current;
    const buttonStatusHandler = () => {
      setIsButtonStatusShown(true);
      setTimeout(() => {
        onAdd(inputValue);
        setInputValue('');
        setIsPlaceholderShown(true);
        inputRef.current?.blur();
      }, 1000);
      buttonStatusElement?.removeEventListener('animationend', buttonStatusHandler);
    }
    buttonStatusElement?.addEventListener('animationend', buttonStatusHandler);
    setIsButtonAnimation(true);
  }, [inputValue, onAdd]);

  return (
    <Box position="relative" width="333px" height="59px">
      <Box display="inline-flex" position="absolute" left="15px" top="20px" width="auto" height="auto">
        <Image src="/icons/attach.png" alt="attach" width="20" height="20" />
      </Box>
      <Input 
        ref={inputRef} 
        value={inputValue} 
        disabled={isInputDisabled}
        onFocus={handleInputFocus} 
        onBlur={handleInputBlur} 
        onChange={handleInputChange}
        onKeyUp={handleInputKeyUp} 
      />
      {isPlaceholderShown && (
        <Box position="absolute" left="43px" top="21px" cursor="text" onClick={handleInputFocus}>
          <Text
            fontFamily="Helvetica Neue"
            lineHeight="16.7px"
          >
            Add a Link
          </Text>
          <Text
            color="#FFFFFF80"
            margin="0 0 0 4px"
          >
            ,title or collection name
          </Text>
        </Box>
      )}
      {isAddButtonShown && (
        <Button 
          ref={buttonRef} 
          isAnimation={isButtonAnimation} 
          onClick={handleAddButtonClick}
        >
          <ButtonLoader isAnimation={isButtonAnimation} />
          <ButtonStatus ref={buttonStatusRef} isAnimation={isButtonStatusShown} />
          {!isButtonAnimation && (
            <ButtonText>
              Add
            </ButtonText>
          )}
        </Button>
      )}
    </Box>
  )
};

export default AddLink;