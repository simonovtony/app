import Box from "@/components/Box"
import Text from '@/components/Text'
import { DefaultProps } from "@/types/interfaces";
import { emptyCallback } from "@/utilities";
import { FC } from "react"

export interface TagProps extends DefaultProps {
  isAddShown?: boolean;
  isRemoveShown?: boolean;
  onAddClick?: () => void;
  onRemoveClick?: () => void;
}

const Tag: FC<TagProps> = ({
  children,
  isAddShown = true,
  isRemoveShown = true,
  onAddClick = emptyCallback,
  onRemoveClick = emptyCallback,
}) => {
  return (
    <Box 
      height="35px"
      borderRadius="32px"
      alignItems="center"
      padding="0 16px 0 13px"
      width="auto"
      background="rgba(42, 42, 42, 1)"
      boxShadow="0px 4px 10px 0px rgba(0, 0, 0, 0.1)"
    >
      <Box margin="0 6px 0 0">
        <Text
          fontFamily="Helvetica Neue"
          fontWeight="500"
          lineHeight="17.09px"
          whiteSpace="nowrap"
        >
          {children}
        </Text>
      </Box>
      {isAddShown && (
        <Box>
          <Text color="rgba(0, 255, 133, 1)">
            +
          </Text>
        </Box>
      )}
      {isAddShown && isRemoveShown && (
        <Box width="1px" height="13px" background="rgba(255, 255, 255, 0.1)" margin="0 9px" />
      )}
      {isRemoveShown && (
        <Box>
          <Text color="rgba(185, 185, 185, 1)">
            -
          </Text>
        </Box>
      )}
    </Box>
  )
};

export default Tag;