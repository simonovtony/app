import { FC, useState, useCallback, ChangeEvent, KeyboardEvent, useContext, useEffect } from 'react';
import { DefaultProps } from "@/types/interfaces";
import Box from '@/components/Box';
import Modal from '@/components/Modal';
import DetailImage from '@/features/Detail/DetailImage';
import Text from '@/components/Text';
import Tag from '@/components/Tag';
import Image from 'next/image';
import Button from '@/components/Button';
import { Store } from '@/contexts';
import { Steps } from '@/types/enums';
import { styled } from 'styled-components';
import { useIsMobile } from '@/hooks';
import { Description } from './Description';
import { Collection } from './Collection';
import axios from 'axios';

export interface DetailProps extends DefaultProps {
  isOpen?: boolean;
}

const DetailImageWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 42px 0 39px 0;
`;

const TitleWrapper = styled.div`
  display: flex;
  width: 608px;
  height: auto;
  overflow: hidden;
  justify-content: center;
  
  @media all and (max-width: 768px) {
    width: 276px;
  }
`;

const CollectionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 0 62px 0 64px;
  justify-content: center;

  @media all and (max-width: 768px) {
    padding: 0 27px;
  }
`;

const CollectionWrapper = styled.div`
  display: inline-flex;
  margin: 0 0 36px 0;

  @media all and (max-width: 768px) {
    margin: 0 0 10px 0;
  }
`;

const DescriptionWrapper = styled.div`
  display: flex;

  width: 487px;
  height: auto;
  
  @media all and (max-width: 768px) {
    width: 290px;
  }
`;

const AddToCollectionWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin: 0;

  @media all and (max-width: 768px) {
    margin: 58px 0 0 0;
  }
`;

const ActionsWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 21px 0 0 0;
  padding: 0 33px 0 0;
  width: 100%;

  @media all and (max-width: 768px) {
    justify-content: center;
    margin: 46px 0 0 0;
    padding: 0;
    width: 100%;
  }
`;

const AddGleanWrapper = styled.div`
  display: flex;
  padding: 0;

  @media all and (max-width: 768px) {
    padding: 0 0 50px 0;
  }
`;

const Detail: FC<DetailProps> = ({
  isOpen,
}) => {
  const {
    setStep,
  } = useContext(Store);

  const [isDescriptionOpen, setisDescriptionOpen] = useState<boolean>(false);
  const [description, setDescription] = useState<string>('');
  const [isCollection, setisCollection] = useState<boolean>(false);
  const [collections, setCollections] = useState<string[]>([]);

  useEffect(() => {
    const handler = async () => {
      const response = await axios.get('/api/data');
      const {
        data: {
          description: newDescription,
          collections: newCollections,
        }
      } = response;
      setDescription(newDescription);
      setCollections(newCollections);
    };
    handler();
  }, []);

  const handleButtonBackClick = useCallback(() => {
    setStep(Steps.Content);
  }, [setStep]);

  const handleButtonNextClick = useCallback(() => {
    setStep(Steps.Done);
  }, [setStep]);

  const handleDescriptionClick = useCallback(() => {
    setisDescriptionOpen(true);
  }, []);

  const handleDescriptionSave = useCallback((newDescription: string) => {
    setDescription(newDescription);
    setisDescriptionOpen(false);
  }, []);

  const handleDescriptionBack = useCallback(() => {
    setisDescriptionOpen(false);
  }, []);

  const handleCollectionSave = useCallback((newCollections: string[]) => {
    setCollections(newCollections);
    setisCollection(false);
  }, []);

  const handleAddToCollectionClick = useCallback(() => {
    setisCollection(true);
  }, []);

  return (
    <>
      <Modal 
        isOpen={isOpen} 
        width="670px" 
        height='674px' 
        borderRadius="40px"
        isMobileOpacity
        isMobileFullScreen
      >
        <Box 
          flexDirection='column' 
          width="100%"
          overflow="hidden auto"
        >
          <DetailImageWrapper>
            <DetailImage />
          </DetailImageWrapper>
          <Box 
            width="100%" 
            justifyContent='center'
            margin="0 0 32px 0"
          >
            <TitleWrapper>
              <Text
                fontFamily='Helvetica Neue'
                fontWeight="500"
                fontSize="32px"
                lineHeight="39.07px"
                color="rgba(255, 255, 255, 1)"
              >
                Very very long title or collection name
              </Text>
            </TitleWrapper>
          </Box>
          <Box
            width="100%" 
            justifyContent='center'
            margin="0 0 44px 0"
          >
            <DescriptionWrapper onClick={handleDescriptionClick}>
              <Text 
                fontFamily='Helvetica Neue'
                fontSize='14px'
                fontWeight="400"
                lineHeight='16.7px'
                textAlign='center' 
                backgroundClip='text' 
                textFillColor='transparent'
                background="linear-gradient(rgba(185, 185, 185, 1), rgba(185, 185, 185, 0))"
              >
                {description}
              </Text>
            </DescriptionWrapper>
          </Box>
          <CollectionsWrapper>
            {collections.map((collection, index) => (
              <CollectionWrapper key={collection}>              
                <Tag isAddShown={index !== 0}>
                  {collection}
                </Tag>
              </CollectionWrapper>

            ))}
          </CollectionsWrapper>
          <AddToCollectionWrapper>
            <Box width="auto" alignItems='center' onClick={handleAddToCollectionClick}>
              <Box width="auto" margin="0 5px 0 0">
                <Text
                  fontFamily='Helvetica Neue'
                  color='rgba(185, 185, 185, 1)' 
                >
                  Add to collection
                </Text>
              </Box>
              <Box width="auto">
                <Image 
                  src="/icons/add-to-collection.png" 
                  alt="Add to collection" 
                  width="12" 
                  height="10" 
                />
              </Box>
            </Box>
          </AddToCollectionWrapper>
          <ActionsWrapper>
            <Box width="auto" margin="0 17px 0 0">
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
            <AddGleanWrapper>
              <Button
                data-cy="add_glean"
                height="46px"
                borderRadius="43px"
                background="rgba(217, 217, 217, 1)"
                padding="0 17px"
                alignItems='center'
                onClick={handleButtonNextClick}
              >
                <Text
                  fontWeight="500"
                  fontSize='16px'
                  color="rgba(0, 0, 0, 1)"
                  lineHeight='18.75px'
                >
                  Add Glean
                </Text>
              </Button>
            </AddGleanWrapper>
          </ActionsWrapper>
        </Box>
      </Modal>
      <Description 
        isOpen={isDescriptionOpen} 
        description={description} 
        onSave={handleDescriptionSave} 
        onBack={handleDescriptionBack} 
      />
      <Collection 
        isOpen={isCollection}
        collections={collections}
        onSave={handleCollectionSave}
      />
    </>
  );
};

export default Detail;