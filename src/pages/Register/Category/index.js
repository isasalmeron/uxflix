import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState(initialCategory);

  const setValue = (field, value) => {
    setCategory({
      ...category,
      [field]: value,
    });
  };

  const handleOnChange = ({ target }) => {
    setValue(target.getAttribute('name'), target.value);
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    setCategories([...categories, category]);
    setCategory(initialCategory);
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
            value={category.name}
            onChange={handleOnChange}
          />
          <Field
            label="Descrição"
            type="textarea"
            name="description"
            value={category.description}
            onChange={handleOnChange}
          />
          <Field
            label="Cor:"
            type="color"
            name="color"
            value={category.color}
            onChange={handleOnChange}
          />
          <PrimaryButton>
            Cadastrar
          </PrimaryButton>
        </form>
        <ul>
          {categories.map((actualCategory) => (
            <li key={actualCategory.name}>
              {actualCategory.name}
            </li>
          ))}
        </ul>
        <Link to="/">
          Ir para home
        </Link>
      </FormWrapper>
    </PageDefault>
  );
}

export default RegisterCategory;
