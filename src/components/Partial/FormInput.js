import React from "react";

function FormInput({ icon, type, name, placeholder, onChange }) {
  return (
    <div className="input-field">
      {icon && <i className={`fa fa-${icon}`}></i>}
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default FormInput;
