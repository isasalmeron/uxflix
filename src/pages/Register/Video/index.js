import React from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';
import FormWrapper from '../../../components/FormWrapper';

function RegisterVideo() {
  return (
    <PageDefault>
      <FormWrapper>
        <h1>Cadastro de Vídeo</h1>
        <Link to="/cadastro/categoria">
          Cadastrar Categoria
        </Link>
      </FormWrapper>
    </PageDefault>
  )
}

export default RegisterVideo;
