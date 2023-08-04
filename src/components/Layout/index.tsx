import { DefaultProps } from '@/types/interfaces';
import { FC } from 'react';
import Box from '@/components/Box';

const Layout: FC<DefaultProps> = ({
  children
}) => {
  return (
    <Box flexDirection='column' width="100%" height="100vh" background="url('/images/background.png')" backgroundSize='cover'>
      {children}
    </Box>
  );
};

export default Layout;