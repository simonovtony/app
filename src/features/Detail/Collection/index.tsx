import Box from "@/components/Box";
import Button from "@/components/Button";
import Modal from "@/components/Modal";
import Text from "@/components/Text";
import { emptyCallback } from "@/utilities";
import { FC, useState, useEffect, useCallback, ChangeEvent } from 'react';

export interface CollectionsProps {
  isOpen?: boolean;
  collections?: string[];
  onSave?: (newCollections: string[]) => void;
}

const items = [
  'Alternatives',
  'Berlin Essentials',
  'Development',
  'Movies',
  'Series',
  'Wild Stuff',
  'Zappier Hacks',
  'Test',
  'Detailed',
  'Dance',
  'Design',
  'UX',
];

export const Collection: FC<CollectionsProps> = ({
  isOpen = false,
  collections = [],
  onSave = emptyCallback,
}) => {
  const [values, setValues] = useState<string[]>([]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }
    setValues([...collections]);
  }, [isOpen, collections])

  const handleButtonSaveClick = useCallback(() => {
    onSave(values);
  }, [values, onSave]);

  console.log(values);

  const handleCollectionClick = useCallback((selectedValue: string) => () => {
    const index = values.findIndex(item => selectedValue === item);
    console.log(index);
    if (index !== -1) {
      const newValues: string[] = values.filter((_, i) => i !== index);
      setValues(newValues);
      return;
    } else {
      const newValues = [...values, selectedValue];
      setValues(newValues);
    }
  }, [values]);

  return (
    <Modal 
      isOpen={isOpen} 
      borderRadius="0"
      height="100%"
      width="100%"
      opacity='0.5'
      isMobileFullScreen
      isMobileOpacity
    >
      <Box 
        position="relative" 
        height="100%"
        flexDirection="column"
        padding="120px 0 0 0"
      >
        <Box flex="1" justifyContent="center" margin="0 0 6px 0">
          <Text
            fontSize="32px"
            lineHeight="37.5px"
            opacity="0.5"
          >
            Collections
          </Text>
        </Box>
        <Box flex="2" justifyContent="center"  overflow="hidden auto" margin="0 0 150px 0">
          <Box width="auto" flexDirection="column">
            {items.map(item => (
              <Box key={item} justifyContent="center">
                <Button
                  margin="0 0 10px 0"
                  width="auto"
                  padding="24px"
                  height="35px"
                  justifyContent="center"
                  alignItems="center"
                  background={values.some(value => value === item) ? '#D9D9D91A' : 'transparent'}
                  borderRadius="25px"
                  onClick={handleCollectionClick(item)}
                >
                  <Text>
                    {item}
                  </Text>
                </Button>
              </Box>
            ))}
          </Box>
        </Box>
        <Box 
          position="absolute"
          bottom="50px"
          justifyContent="center"
          gap="17px"
        >
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