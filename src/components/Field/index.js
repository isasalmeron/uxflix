import React from 'react';

function Field({ label, type, name, value, onChange }) {
  return (
    <div>
      <label>
        {label}
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

export default Field;
