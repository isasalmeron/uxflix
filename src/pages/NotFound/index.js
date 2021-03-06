import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { PrimaryButton } from '../../components/Buttons';
import PageDefault from '../../components/PageDefault';
import Banner from '../../components/Banner';
import NotFoundImg from '../../assets/images/NotFound.png';

const ButtonWrapper = styled.div`
  text-align: center;
  padding: 16px;

  @media (max-width: 800px) {
    margin-bottom: 0px;
  }
`;

function NotFound() {
  return (
    <PageDefault>
      <Banner
        image={NotFoundImg}
        title="Você se perdeu?"
        description="Infelizmente não localizamos essa página. Você pode encontrar muitos outros títulos na página inicial."
      />
      <ButtonWrapper>
        <PrimaryButton as={Link} to="/">
          Voltar para a página inicial
        </PrimaryButton>
      </ButtonWrapper>
    </PageDefault>
  );
}

export default NotFound;
