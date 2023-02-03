import React, { PropsWithChildren } from 'react';
import { SafeEnvironmentContainer } from './SafeEnvironment.styles';
import { Container } from '@mui/material';

const SafeEnvironment: React.FC = () => {
  return (
    <SafeEnvironmentContainer>
      <Container>
        Ambiente 100% Seguro <i className={'twf-lock'} />
      </Container>
    </SafeEnvironmentContainer>
  );
};

export default SafeEnvironment;
