import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Label, Input } from './styles';

function Field({
  label, type, name, value, onChange,
}) {
  const fileId = `id_${name}`;
  const isTextArea = type === 'textarea';

  return (
    <Wrapper>
      <Label htmlFor={fileId}>
        <Input
          as={isTextArea ? type : 'input'}
          id={fileId}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
        <Label.Text>
          {label}
        </Label.Text>
      </Label>
    </Wrapper>
  );
}

Field.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

Field.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default Field;
