import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { getUser, logout } from "../api/auth";
import { getGrades, getMajors } from "../api/BasicInfo";
import { Emojies } from "../constants/enums";
import routes from "../constants/routes";
import RanksListing from "./Partial/RanksListing";
import UserCard from "./Partial/UserCard";

function Profile() {
  let user = getUser();

  const [grade, setGrade]= useState(0);
  const [major, setMajor]= useState(0);

  getMajors().then(m => setMajor(m.find(e => e.id === user.major).value));
  getGrades().then(g => setGrade(g.find(e => e.id === user.grade).value));

  let history = useHistory();

  const handleLogout = (e) => {
    logout();
    history.push(routes.LOGIN);
  };
  return (
    <>
      <div className="flex-row">
        <div className="box-container user">
          <img
            className="tiny-pic"
            width="80px"
            height="80px"
            src={user.picUri}
            alt="user-avatar"
          />
          <h6>{user.name}</h6>
          <h6>{user.username}</h6>
          <div>
            <div className="btn btn-danger" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i>
            </div>
            <Link className="btn btn-warning" to={routes.EDIT_PROF}>
              <i className="fa fa-pencil"></i>
            </Link>
          </div>
        </div>
        <div className="partial-container">
          <RanksListing
            ItemComponent={({ item, index }) => (
              <UserCard key={index} index={index} item={item} />
            )}
            fixGrade={user.grade}
            fixMajor={user.major}
            title={`نفرات برتر ${grade} ${major} | `}
            ListWrapper={({ children }) => (
              <div className="user-container">{children}</div>
            )}
          />
        </div>
      </div>
      <div className="schedule pd-50">
        <div className="icon-item">
          <i className="fa fa-book fa-lg"></i>
          <h5>برنامه ی امروز</h5>
          <Link to={routes.EDIT_SCHE}>
            <i className="fa fa-pencil"></i>
          </Link>
          <p className="btn btn-danger">
            <i className="fa fa-camera"></i>
          </p>
        </div>
        {!user.work ? (
          <h4 className="err-message">
            برنامه ای برای امروز ثبت نشده است.
            <br />
            <Link to={routes.SUBMIT}>ثبت برنامه</Link>
          </h4>
        ) : (
          <div>
            <div className="flex-row">
              <div className="brand" style={{ boxShadow: "0 0 10px 0 blue" }}>
                <h4>
                  {user.work.testCount}
                  <br />
                  تست
                </h4>
              </div>
              <div className="brand" style={{ boxShadow: "0 0 10px 0 red" }}>
                <h4>
                  {user.work.studyTime}
                  <br />
                  مطالعه
                </h4>
              </div>
              <div className="brand" style={{ boxShadow: "0 0 10px 0 yellow" }}>
                <img
                  src={Emojies[user.work.mood]}
                  style={{ height: "50%" }}
                  width="50%"
                  alt=""
                />
              </div>
              <div className="brand" style={{ boxShadow: "0 0 10px 0 green" }}>
                <h4>
                  امتیاز فردی
                  <br />
                  {user.work.selfEstimation}
                </h4>
              </div>
              <div className="brand" style={{ boxShadow: "0 0 10px 0 purple" }}>
                <h4>
                  رتبه در پایه
                  <br />
                  {user.work.rank}
                </h4>
              </div>
              <div className="brand" style={{ boxShadow: "0 0 10px 0 orange" }}>
                <h4>
                  امتیاز
                  <br />
                  {user.work.score}
                </h4>
              </div>
            </div>
            <div className="thead">
              <b>نام درس</b>
              <b>ساعت مطالعه</b>
              <b>تعداد تست</b>
            </div>
            {user.work.courseStudies.map((study) => (
              <div className="table-row">
                <p>{study.courseName}</p>
                <p>{study.studyTime}</p>
                <p>{study.testCount}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default Profile;
