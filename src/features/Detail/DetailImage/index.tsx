import { DefaultProps } from "@/types/interfaces";
import { FC } from "react";
import Box from "@/components/Box";
import Text from "@/components/Text";
import Image from "next/image";
import { emptyCallback } from "@/utilities";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 240px;
  height: 240px;
  border-radius: 25px;
  background: radial-gradient(rgba(133, 113, 255, 1), rgba(159, 46, 181, 1));
`;

export interface DetailImageProps extends DefaultProps {
  onClick?: () => void;
}

const DetailImage: FC<DetailImageProps> = ({
  onClick = emptyCallback,
}) => {
  return (
    <Container onClick={onClick}>
      <Box 
        width="100%" 
        justifyContent="center" 
        margin="61px 0 15px 0"
      >
        <Text
          fontSize="80px"
          lineHeight="93.75px"
        >
          🕺🏼
        </Text>
      </Box>
      <Box
        width="100%"
        alignItems="stretch"
        padding="0 25px 0 24px"
      >
        <Box 
          width="auto"
          alignItems="center" 
          justifyContent="center" 
          margin="0 15.62px 0 0"
        >
          <Image src="/icons/image.png" width="20" height="18" alt="image" />
        </Box>
        <Box width="auto">
          <Text
            fontFamily="Helvetica Neue"
            fontSize="14px"
            lineHeight="15.13px"
            fontWeight="400"
            color="rgba(255, 255, 255, 0.5)"
          >
            Paste or tap to change into an image or video.
          </Text>
        </Box>
      </Box>
    </Container>
  )
};

export default DetailImage;