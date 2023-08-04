import Box from "@/components/Box";
import Modal from "@/components/Modal";
import Text from "@/components/Text";
import { styled } from "styled-components";
import Animation from './Animation';

const Button = styled.button`
  display: inline-flex;
  width: 107px;
  height: 46px;
  position: relative;
  bottom: auto;
  border-radius: 43px;
  background: #00FF85;
  justify-content: center;
  align-items: center;
`;

export interface DoneProps {
  isOpen?: boolean;
}

export const Done = ({
  isOpen = false
}) => {
  return (
    <Modal 
      isOpen={isOpen} 
      width="100%"
      isMobileFullScreen
      isMobileOpacity
      height='200px' 
    >
      <Box 
        position="relative" 
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        height="100%" 
        zIndex="1000"
        top="0px"
      >
        <Box justifyContent="center">
          <Animation />
        </Box>
        <Box justifyContent="center" margin="200px 0 0 0">
          <Button>
            <Text
              fontWeight="500"
              fontSize="16px"
              lineHeight="18.75px"
            >
              Done
            </Text>
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}