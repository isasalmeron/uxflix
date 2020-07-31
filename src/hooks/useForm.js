import { useState } from 'react';

function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  const setValue = (field, value) => {
    setValues({
      ...values,
      [field]: value,
    });
  };

  const handleOnChange = ({ target }) => {
    setValue(target.getAttribute('name'), target.value);
  };

  const clearForm = () => {
    setValues(initialValues);
  };

  return {
    values,
    handleOnChange,
    clearForm,
  };
}

export default useForm;
