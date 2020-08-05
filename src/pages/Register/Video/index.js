import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Box } from '@material-ui/core';

import useForm from '../../../hooks/useForm';
import FormWrapper from '../../../components/FormWrapper';
import PageDefault from '../../../components/PageDefault';
import Field from '../../../components/Field';
import { PrimaryButton } from '../../../components/Button';
import videosApi from '../../../api/videos';
import categoriesApi from '../../../api/categories';

function RegisterVideo() {
  const history = useHistory();

  const initialVideo = {
    title: '',
    url: '',
    category: '',
  };
  const { values, handleOnChange } = useForm(initialVideo);
  const [categories, setCategories] = useState([]);
  const categoriesTitle = categories.map(({ name }) => name);
  const handleSubmitForm = (event) => {
    event.preventDefault();

    const actualCategory = categories.find((category) => (
      category.name === values.category
    ));

    videosApi.addVideo({
      title: values.title,
      url: values.url,
      categoryId: actualCategory.id,
    }).then(() => {
      history.push('/');
    });
  };

  useEffect(() => {
    categoriesApi.getAll().then((allCategories) => {
      setCategories(allCategories);
    });
  }, []);

  return (
    <PageDefault>
      <FormWrapper>
        <h1>Novo vídeo</h1>
        <form onSubmit={handleSubmitForm}>
          <Field
            label="Título"
            name="title"
            value={values.title}
            onChange={handleOnChange}
          />
          <Field
            label="URL"
            name="url"
            value={values.url}
            onChange={handleOnChange}
          />
          <Field
            label="Categoria"
            name="category"
            value={values.category}
            onChange={handleOnChange}
            suggestions={categoriesTitle}
          />
          <Box p={2}>
            <PrimaryButton type="submit">
              Cadastrar
            </PrimaryButton>
          </Box>
        </form>
        <Link to="/">
          Ir para home
        </Link>
      </FormWrapper>
    </PageDefault>
  );
}

export default RegisterVideo;
