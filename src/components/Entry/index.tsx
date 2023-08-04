import { styled } from "styled-components"
import { FC, ChangeEvent } from 'react';

const TextArea = styled.textarea`
  display: flex;
  width: 333px;
  height: 132px;
  border-radius: 25px;
  background-color: #D9D9D91A;
  font-family: Helvetica Neue;
  font-weight: 400;
  font-size: 14px;
  line-height: 16.7px;
  color: #B9B9B9;
  padding: 32px 22px;
  resize: none;

  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export interface EntryProps {
  value?: string;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const Entry: FC<EntryProps> = ({
  value,
  onChange,
}) => {
  return (
    <TextArea
      value={value}
      onChange={onChange}
    />
  )
};

export default Entry;