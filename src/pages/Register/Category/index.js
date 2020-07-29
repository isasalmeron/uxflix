import React from 'react';
import { Link } from 'react-router-dom';

import FormWrapper from '../../../components/FormWrapper';
import PageDefault from '../../../components/PageDefault';

function RegisterCategory() {
  return (
    <PageDefault>
      <FormWrapper>
        <h1>Cadastro de Categoria</h1>

        <Link to="/">
          Ir para home
        </Link>
      </FormWrapper>
    </PageDefault>
  )
}

export default RegisterCategory;
