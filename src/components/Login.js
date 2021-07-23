import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { login } from "../api/auth";
import routes from "../constants/routes";
import AppForm from "./Partial/AppForm";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    let err = login({userName, password});
    if(err)
      console.log(err);
    else
      history.push(routes.PROFILE);
  }
  return (
    <div>
      <AppForm
        onSubmit={handleSubmit}
        title="ورود"
        inputs={[
          {
            icon: "user",
            type: "text",
            name: "username",
            placeholder: "نام کاربری",
            onChange: (e) => setUserName(e.target.value),
          },
          {
            icon: "lock",
            type: "password",
            name: "password",
            placeholder: "کلمه ی عبور",
            onChange: (e) => setPassword(e.target.value),
          },
        ]}
      />

      <Link to={routes.REGISTER}>
          <p>حساب کاربری ندارید؟</p>
      </Link>
    </div>
  );
}

export default Login;
