import Loader from 'react-loader-spinner';
import { Center } from '../styles/styledComponents/align';
import { PrimaryContainer } from '../styles/styledComponents/containers';

interface LoadingProps {}

export const Loading: React.FC<LoadingProps> = ({}) => {
  return (
    <PrimaryContainer>
      <Center>
        <Loader type="TailSpin" color="#000000" height={50} width={50} />
      </Center>
    </PrimaryContainer>
  );
};
