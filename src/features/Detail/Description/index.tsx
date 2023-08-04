import Box from "@/components/Box";
import Button from "@/components/Button";
import Entry from "@/components/Entry";
import Modal from "@/components/Modal";
import Text from "@/components/Text";
import { emptyCallback } from "@/utilities";
import { FC, useState, useEffect, useCallback, ChangeEvent } from 'react';

export interface DescriptionProps {
  isOpen?: boolean;
  description?: string;
  onSave?: (_newDescription: string) => void;
  onBack?: () => void;
}

export const Description: FC<DescriptionProps> = ({
  isOpen = false,
  description = '',
  onSave = emptyCallback,
  onBack = emptyCallback,
}) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    setValue(description);
  }, [description]);

  const handleChange = useCallback((event: ChangeEvent<HTMLTextAreaElement>) => {
    const { target: { value: newValue } } = event;
    setValue(newValue);
  }, []);

  const handleButtonBackClick = useCallback(() => {
    onBack();
  }, [onBack]);

  const handleButtonSaveClick = useCallback(() => {
    onSave(value);
  }, [value, onSave]);

  return (
    <Modal 
      isOpen={isOpen} 
      borderRadius="0"
      height="100%"
      width="100%"
      isMobileFullScreen
      isMobileOpacity
      isBackground
    >
      <Box 
        position="relative" 
        justifyContent="center" 
        alignItems="center" 
        height="100%"
        flexDirection="column"
      >
        <Box justifyContent="center" margin="0 0 6px 0">
          <Text
            fontSize="32px"
            lineHeight="37.5px"
            opacity="0.5"
          >
            Description
          </Text>
        </Box>
        <Box justifyContent="center" margin="0 0 18px 0">
          <Text
            lineHeight="16.7px"
            color="#B9B9B9"
          >
            Leave the description empty to create a direct link
          </Text>
        </Box>
        <Box justifyContent="center" margin="0">
          <Entry
            value={value}
            onChange={handleChange}
          />
        </Box>
        <Box 
          position="absolute"
          bottom="48px"
          justifyContent="center"
          gap="17px"
        >
          <Box width="auto">
            <Button
              height="46px"
              borderRadius="43px"
              background="rgba(42, 42, 42, 1)"
              padding="0 17px"
              alignItems='center'
              onClick={handleButtonBackClick}
            >
              <Text
                fontWeight="500"
                fontSize='16px'
                color="rgba(98, 98, 98, 1)"
                lineHeight='18.75px'
              >
                Back
              </Text>
            </Button>
          </Box>
          <Box width="auto">
            <Button
              height="46px"
              borderRadius="43px"
              background="rgba(217, 217, 217, 1)"
              padding="0 17px"
              alignItems='center'
              onClick={handleButtonSaveClick}
            >
              <Text
                fontWeight="500"
                fontSize='16px'
                color="rgba(0, 0, 0, 1)"
                lineHeight='18.75px'
              >
                Save
              </Text>
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}