import React,{useState,Component} from 'react';
import "./css/stylenew.css";
import 'boxicons';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
class Login extends Component {    
    state={
        isSignUpOn:false,
     
    }

render(){
    console.log(this.state.isSignUpOn)
  
return(

    <div className={this.state.isSignUpOn? "sign-up-mode container":"container"}>
    <div className="forms-container">
      <div className="signin-signup">
        <form name="form" className="sign-in-form" methoD="post" onsubmit="login()" >
          <h2 className="title">ورود</h2>
          <div className="input-field">
            <i className="fas fa-user"></i>
            <input type="text" name="user" placeholder="  شماره موبایل/ نام کاربری" />
          </div>
          <div className="input-field">
                      <i className="fas fa-lock"></i>
            <input type="password" name="password" placeholder="رمز عبور" />
          </div>
          <input type="submit" value="ورود" className="btn solid" />
        </form>
        <form name="myform" className="sign-up-form" method="post" onsubmit="return validateform()" >
          <h2 className="title " id="signuptitle">ثبت نام</h2>
          <p>فیلد های آبی لزوما پر شوند</p>
          <div className="input-field">
            <i className="fas fa-user"  style={{color: "#339af0"}} ></i>
            <input type="text" name=" name" placeholder="نام " />
          </div>
          <div className="input-field">
            <i className="fas fa-user"  style={{color: "#339af0"}} ></i>
            <input type="text" name=" name" placeholder=" نام خانوادگی" />
          </div>

         
          <div className="input-field">
            <i className="fas fa-book-reader" style={{color: "#339af0"}}></i>
            <select className="custom-select">
              <option value="select">پایه</option>
              <option value="tehran">دهم</option>
              <option value="esf">یازدهم</option>
              <option value="shiraz">دوازدهم</option>
            </select>
          </div>
          <div className="input-field">
            <i className="fas fa-book-reader" style={{color: "#339af0"}}></i>
            <select className="custom-select">
              <option value="select">رشته</option>
              <option value="math">ریاضی</option>
              <option value="doc">تجربی</option>
              <option value="le">انسانی</option>
            </select>
          </div>
       
          <div className="input-field">
            <i className="fas fa-user"  ></i>
            <input type="text" name="user" placeholder="نام کاربری ( دلخواه )" />
          </div>
          <div className="input-field">
            <i className="fas fa-phone" style={{color: "#339af0"}}></i>
            <input type="text" name="phone" placeholder="تلفن" />
          </div>
  
          
          <div className="input-field">
            <i className="fas fa-lock"  style={{color: "#339af0"}}></i>
            <input type="password" name="password" placeholder="رمزعبور" />
          </div>
          <div className="input-field">
            <i className="fas fa-lock"  style={{color: "#339af0"}}></i>
            <input type="password" name="password" placeholder=" تکرار رمزعبور" />
          </div>
          <div style={{display: "flex",  direction: "rtl"}}> 
            <p>از دانش اموزان الورتبه هستی؟</p>
          <div className="form-check form-check-inline">
            

            <input className="form-check-input" type="radio" checked name="inlineRadioOptions" id="inlineRadio1" value="option1" onclick="show_field(0)" />
            <label className="form-check-label" for="inlineRadio1" >   بله   </label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="option2" onclick="show_field(1)" />
            <label className="form-check-label" for="inlineRadio2">   خیر   </label>
          </div>
          </div>
          <div className="input-field"  id="myfield">
            <i className="fas fa-chalkboard-teacher" ></i>
            <select className="custom-select">
              <option value="1">انتخاب مشاور</option>
              <option value="2">اقای تست 1</option>
              <option value="3">خانم تست 2</option>
            </select>
          </div>
          <input type="submit" className="btn" value="ثبت نام" />
        </form>
      </div>
    </div>

    <div className="panels-container">
      <div className="panel left-panel">
        <div className="content">
          <h3>ثبت نام نکردی </h3>

          <button className="btn transparent" id="sign-up-btn" onClick={()=>this.setState({isSignUpOn:true})}>
              بخش ثبت نام
          </button>
        </div>
      </div>
      <div className="panel right-panel">
        <div className="content">
          <h3>قبلا ثبت نام کرده ام</h3>

          <button className="btn transparent" id="sign-in-btn" onClick={()=>this.setState({isSignUpOn:false})}> 
              ورود به برنامه
          </button>
        </div>
        <img src="img/register.svg" className="image" alt="" />
      </div>
    </div>
  </div>

);
}
}
export default Login ;

