import React from "react";

import IconItem from "./Partial/IconItem";
import { getCourses, submitWork } from "../api/BasicInfo";
import { getUser } from "../api/auth";
import { Emojies } from "../constants/enums";

class Submit extends React.Component {
  constructor(props) {
    super(props);
    let user = getUser();
    this.state = {
      courseStudies: getCourses(user.grade, user.major).map((course) => ({
        testCount: 0,
        courseId: course.id,
        studyTime: "",
        courseName: course.name,
      })),
      awakeTime: "",
      mood: 0,
      selfEstimation: 0,
    };
    this.stateCopy = this.state;
  }

  render = () => (
    <div className="schedule pd-50">
      <IconItem name="book" size="lg">
        <h5>برنامه ی امروز</h5>
      </IconItem>

      <div>
        <div className="thead">
          <b>نام درس</b>
          <b>ساعت مطالعه</b>
          <b>تعداد تست</b>
        </div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submitWork(this.state);
          }}
        >
          {this.state.courseStudies.map((row, index) => (
            <div className="table-row" key={index}>
              <p>{row.courseName}</p>
              <div style={{ direction: "ltr" }}>
                <input
                  type="number"
                  className="tiny-form-input"
                  value="00"
                  min="0"
                  max="23"
                  onChange={(e) => {
                    this.stateCopy[index].studyTime =
                      e.target.value +
                      ":" +
                      this.stateCopy[index].studyTime.split(":")[1];
                    this.setState(this.stateCopy);
                  }}
                />
                <span> : </span>
                <input
                  type="number"
                  className="tiny-form-input"
                  value="00"
                  max="59"
                  min="0"
                  onChange={(e) => {
                    this.stateCopy[index].studyTime =
                      this.stateCopy[index].studyTime.split(":")[0] +
                      ":" +
                      e.target.value;
                    this.setState(this.stateCopy);
                  }}
                />
              </div>
              <div>
                <input
                  type="number"
                  className="tiny-form-input"
                  value="0"
                  onChange={(e) => {
                    this.stateCopy[index].testCount = e.target.value;
                    this.setState(this.stateCopy);
                  }}
                />
              </div>
            </div>
          ))}

          <div className="flex-row">
            <div id="slider">
              <span>ارزیابی من از عملکرد امروز: </span>
              <span id="slider-number"></span>
              <input
                type="range"
                min="1"
                max="10"
                value="5"
                step="0.1"
                id="range"
                onChange={(e) => {
                  this.stateCopy.selfEstimation = e.target.value;
                  this.setState(this.stateCopy);
                }}
              />
            </div>
            <div id="slider">
              <p>حال امروز شما چگونه است؟</p>
              {Emojies.map((emoji, index) => (
                <img
                key={index}
                onClick={() => {
                  this.stateCopy.mood = index;
                  this.setState(this.stateCopy);
                }}
                alt="emoji"
                width="10%"
                src={emoji}
              />
              ))}
            </div>
          </div>
          <input type="submit" className="btn btn-success" value="ثبت" />
        </form>
      </div>
    </div>
  );
}

export default Submit;
