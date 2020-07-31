import React, { useState, useEffect } from 'react';

import useForm from '../../../hooks/useForm';
import FormWrapper from '../../../components/FormWrapper';
import PageDefault from '../../../components/PageDefault';
import Field from '../../../components/Field';
import { PrimaryButton } from '../../../components/Button';

function RegisterCategory() {
  const initialCategory = {
    name: '',
    description: '',
    color: '',
  };
  const { values, handleOnChange, clearForm } = useForm(initialCategory);
  const [categories, setCategories] = useState([]);

  const handleSubmitForm = (event) => {
    event.preventDefault();
    setCategories([...categories, values]);
    clearForm();
  };

  useEffect(() => {
    const SERVER_URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categories'
      : 'https://uxflix.herokuapp.com/categories';

    fetch(SERVER_URL).then(async (response) => {
      const formattedResponse = await response.json();
      setCategories([...formattedResponse]);
    });
  }, []);

  return (
    <PageDefault>
      <FormWrapper>
        <h1>Nova categoria</h1>
        <form onSubmit={handleSubmitForm}>
          <Field
            label="Nome da categoria"
            name="name"
            value={values.name}
            onChange={handleOnChange}
          />
          <Field
            label="Descrição"
            type="textarea"
            name="description"
            value={values.description}
            onChange={handleOnChange}
          />
          <Field
            label="Cor:"
            type="color"
            name="color"
            value={values.color}
            onChange={handleOnChange}
          />
          <PrimaryButton type="submit">
            Cadastrar
          </PrimaryButton>
        </form>
        {categories.length === 0 ? (
          <div>
            Loading...
          </div>
        ) : (
          <ul>
            {categories.map((actualCategory) => (
              <li key={actualCategory.name}>
                {actualCategory.name}
              </li>
            ))}
          </ul>
        )}
      </FormWrapper>
    </PageDefault>
  );
}

export default RegisterCategory;
