import React from 'react';
import { DashLayout } from '../../components/dashboard/DashLayout';
import { DashContentContainer } from '../../styles/styledComponents/dashboard';
import { H3 } from '../../styles/styledComponents/titles';

interface WhiteboardProps {}

const Whiteboard: React.FC<WhiteboardProps> = ({}) => {
  return (
    <DashLayout>
      <DashContentContainer>
        <H3>Whiteboard</H3>
      </DashContentContainer>
    </DashLayout>
  );
};

export default Whiteboard;
