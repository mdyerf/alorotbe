import React from "react";
import FormInput from "./FormInput";
import Select from "./Select";

function AppForm({ onSubmit, title, inputs, annotation }) {
  return (
    <div>
      <form className="sign-in-form" method="POST" onSubmit={onSubmit}>
        <h2 className="title">{title}</h2>
        {annotation && <p>{annotation}</p>}
        {inputs.map((input, index) => {
          if (input.type === "select")
            return (
              <Select
                key={index}
                name={input.name}
                onChange={input.onChange}
                values={input.choices}
              />
            );
          else if (input.type === "check")
            return (
              <>
                <input
                  key={index}
                  type="checkbox"
                  name={input.name}
                  onChange={input.onChange}
                />
                <p>{input.placeholder}</p>
              </>
            );
          else
            return (
              <FormInput
                key={index}
                icon={input.icon}
                type={input.type}
                name={input.name}
                style={input.required ? { color: "#339af0" } : {}}
                placeholder={input.placeholder}
                onChange={input.onChange}
              />
            );
        })}
        <input type="submit" value={title} className="btn solid" />
      </form>
    </div>
  );
}

export default AppForm;
