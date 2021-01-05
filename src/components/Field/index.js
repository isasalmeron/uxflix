import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Label, Input } from './styles';

function Field({
  label, type, name, value, onChange, suggestions,
}) {
  const fieldId = `id_${name}`;
  const isTextArea = type === 'textarea';
  const hasSuggestions = Boolean(suggestions.length);

  return (
    <Wrapper>
      <Label htmlFor={fieldId}>
        <Input
          as={isTextArea ? type : 'input'}
          id={fieldId}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          autoComplete={hasSuggestions ? 'off' : 'on'}
          list={hasSuggestions ? `suggestionFor_${fieldId}` : undefined}
          isRequired
        />
        <Label.Text>
          {label}
        </Label.Text>
        {hasSuggestions && (
          <datalist id={`suggestionFor_${fieldId}`}>
            {suggestions.map((suggestion) => (
              <option value={suggestion} key={`suggestionFor_${fieldId}_option${suggestion}`}>
                {suggestion}
              </option>
            ))}
          </datalist>
        )}
      </Label>
    </Wrapper>
  );
}

Field.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
  suggestions: [],
};

Field.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
  suggestions: PropTypes.arrayOf(PropTypes.string),
};

export default Field;
