import React from 'react';
import BarLoader from 'react-spinners/BarLoader';
import { Container } from '../styles/styledComponents/loader';

interface LoaderProps {}

export const Loader: React.FC<LoaderProps> = ({}) => {
  return (
    <Container>
      <BarLoader loading color="#000000" />
    </Container>
  );
};
