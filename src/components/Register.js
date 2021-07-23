import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { register } from "../api/auth";
import routes from "../constants/routes";
import AppForm from "./Partial/AppForm";
import {
  getGrades,
  getMajors,
  getCities,
  getSupporters,
} from "../api/BasicInfo";

export default function Register(props) {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [gradeId, setGradeId] = useState(0);
  const [majorId, setMajorId] = useState(0);
  const [userName, setUserName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [hasSupporter, sethasSupporter] = useState(true);
  const [suppporterId, setSuppporterId] = useState(0);

  const [cities, setCities] = useState([]);
  const [grades, setGrades] = useState([]);
  const [majors, setMajors] = useState([]);
  const [supporters, setSupporters] = useState([]);

  useEffect(() => {
    getCities().then(c => setCities(c));
    getGrades().then(g => setGrades(g));
    getMajors().then(m => setMajors(m));
    getSupporters().then(s => setSupporters(s));
  },[]);

  let history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    let err = register({
      name,
      lastName,
      gradeId,
      majorId,
      userName,
      phoneNumber,
      password,
      passwordConfirm,
      hasSupporter,
      suppporterId,
    });
    if(err) alert(err);
    else history.push(routes.PROFILE);
  };

  return (
    <div>
      <AppForm
        title="ثبت نام"
        annotation="فیلد های آبی ضروری هستند"
        onSubmit={handleSubmit}
        inputs={[
          {
            icon: "user",
            type: "text",
            name: "name",
            placeholder: "نام",
            onChange: (e) => setName(e.target.value),
            required: true,
          },
          {
            icon: "user",
            type: "text",
            name: "lastname",
            placeholder: "نام خانوادگی",
            onChange: (e) => setLastName(e.target.value),
            required: true,
          },
          {
            icon: "city",
            type: "select",
            choices: cities,
            name: "city",
            placeholder: "شهر",
            onChange: (e) => setGradeId(e.target.value),
            required: true,
          },
          {
            icon: "book-reader",
            type: "select",
            choices: grades,
            name: "grade",
            placeholder: "پایه",
            onChange: (e) => setGradeId(e.target.value),
            required: true,
          },
          {
            icon: "book-reader",
            type: "select",
            choices: majors,
            name: "major",
            placeholder: "رشته",
            onChange: (e) => setMajorId(e.target.value),
            required: true,
          },
          {
            icon: "user",
            type: "text",
            name: "username",
            placeholder: "نام کاربری",
            onChange: (e) => setUserName(e.target.value),
          },
          {
            icon: "phone",
            type: "tel",
            name: "phonenumber",
            placeholder: "شماره ی همراه",
            onChange: (e) => setPhoneNumber(e.target.value),
            required: true,
          },
          {
            icon: "lock",
            type: "password",
            name: "password",
            placeholder: "کلمه ی عبور",
            onChange: (e) => setPassword(e.target.value),
            required: true,
          },
          {
            icon: "lock",
            type: "password",
            name: "confirmPassword",
            placeholder: "تکرار کلمه ی عبور",
            onChange: (e) => setPasswordConfirm(e.target.value),
            required: true,
          },
          {
            type: "check",
            name: "hasSupporter",
            placeholder: "از دانش آموزان الورتبه هستی؟",
            onChange: (e) => sethasSupporter(e.target.value),
          },
          {
            icon: "user",
            type: "select",
            choices: supporters,
            name: "supporter",
            placeholder: "نام مشاور",
            onChange: (e) => setSuppporterId(e.target.value),
            required: true,
          },
        ]}
      />

      <Link to={routes.LOGIN}>
        <p>حساب کاربری دارید؟</p>
      </Link>
    </div>
  );
}
