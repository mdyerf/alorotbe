import React from "react";

function Select({ values, name, onChange }) {
    if(values.length) 
    {
      return (
        <select name={name} onChange={(e) => onChange(e.target.value)}>
          {values.map((item, index) => (
            <option key={index} value={item.id}>
              {item.value}
            </option>
          ))}
        </select>
      );
    }
    else return <select></select>
}

export default Select;
