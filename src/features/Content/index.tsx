import { FC, useState, useCallback, ChangeEvent, KeyboardEvent, useContext } from 'react';
import { DefaultProps } from "@/types/interfaces";
import Text from '@/components/Text';
import Title from '@/components/Title';
import Box from '@/components/Box';
import AddLink from '@/features/Content/AddLink';
import Modal from '@/components/Modal';
import { Store } from '@/contexts';
import { Steps } from '@/types/enums';
import { CollectionIcon } from './CollectionIcons';
import { GleanIcon } from './GleanIcons';
import { useIsMobile } from '@/hooks';

export interface ContentProps extends DefaultProps {
  isOpen?: boolean;
}

const Content: FC<ContentProps> = ({
  isOpen,
}) => {
  const {
    setStep,
  } = useContext(Store);

  const handleAddLinkAdd = useCallback((_newLink: string) => {
    setStep(Steps.Detail);
  }, [setStep]);

  return (
    <Modal 
      isOpen={isOpen} 
      isMobileOpacity
      isMobileBottom
    >
      <Box flexDirection='column' width="100%">
        <Box justifyContent='center' width="100%" margin="0 0 40px 0">
          <Title opacity="0.5">
            Add Content
          </Title>
        </Box>
        <Box justifyContent='center' width="100%" margin="0 0 36px 0" gap="47px">
          <Box 
            justifyContent='center' 
            flexDirection='column' 
            width="124px" 
          >
            <Box justifyContent='center' height="97px" margin="0 0 12px 0">
              <GleanIcon/>
            </Box>
            <Box justifyContent='center'  flexDirection="column" width="121px">
              <Box justifyContent='center' width="100%" margin="0 0 10px 0">
                <Text fontWeight={500}>Create a Glean</Text>
              </Box>
              <Box width="100%">
                <Text textAlign='center' opacity=".7">Add content, links & descriptive text</Text>
              </Box>
            </Box>
          </Box>
          <Box 
            flexDirection='column' 
            width="124px" 
          >
            <Box height="97px" margin="0 0 12px 0">
              <CollectionIcon />
            </Box>
            <Box flexDirection="column" width="121px">
              <Box width="100%" justifyContent="center" margin="0 0 10px 0">
                <Text fontWeight={500}>Collection</Text>
              </Box>
              <Box width="100%">
                <Text textAlign='center' opacity=".7">
                  Organise gleans & direct links
                </Text>
              </Box>
            </Box>
          </Box>
        </Box>
        <Box width="100%" justifyContent='center' margin="0 0 17px 0">
          <AddLink onAdd={handleAddLinkAdd} />
        </Box>
        <Box flexDirection='column' alignItems='center'>
          <Box display="block" textAlign="center" width="325px" flexWrap='wrap'>
            <Text
              display="inline"
              fontWeight="700"
              lineHeight='16.41px'
              color="#FFFFFFB2"
            >
              Powered by Gleans Ai ✨ 
            </Text>
            <Text
              display="inline"
              fontWeight="400"
              lineHeight='16.41px'
              color="#FFFFFFB2"
            >
              Create content automatically and make changes if needed.
            </Text>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default Content;