import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import FormWrapper from '../../../components/FormWrapper';
import PageDefault from '../../../components/PageDefault';
import Field from '../../../components/Field';

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

  return (
    <PageDefault>
      <FormWrapper>
        <h1>Nova categoria</h1>
        <form onSubmit={handleSubmitForm}>
          <Field
            label="Nome:"
            type="text"
            name="name"
            value={category.name}
            onChange={handleOnChange}
          />
          <Field
            label="Descrição:"
            type="text"
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
          <button>
            Cadastrar
          </button>
        </form>
        <ul>
          {categories.map((category, index) => {
            return (
              <li key={index}>
                {category.name}
              </li>
            );
          })}
        </ul>
        <Link to="/">
          Ir para home
        </Link>
      </FormWrapper>
    </PageDefault>
  )
}

export default RegisterCategory;
