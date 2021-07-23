import { get } from "./client";

const getSupporters = () =>
  get("Identity/Supporter").then((res) =>
    res.data.map((s) => ({
      id: s.supporterId,
      value: s.name + " " + s.lastName,
    }))
  );
const getCities = () =>
  get("BasicInfo/City").then((res) =>
    res.data.map((s) => ({
      id: s.id,
      value: s.name,
    }))
  );
  
const getMajors = () =>
  get("BasicInfo/Major").then((res) =>
    res.data.map((s) => ({
      id: s.id,
      value: s.name,
    }))
  );

const getGrades = () =>
  get("BasicInfo/Grade").then((res) =>
    res.data.map((s) => ({
      id: s.id,
      value: s.name,
    }))
  );

const getCourses = (grade, major) =>
  get("BasicInfo/Course", { grade, major })
    .then((res) => res.data);

const submitWork = (workModel) => {};

export {
  getSupporters,
  getCities,
  getGrades,
  getMajors,
  submitWork,
  getCourses,
};
