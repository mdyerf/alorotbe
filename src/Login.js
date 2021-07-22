import React,{useState} from 'react';
import "./css/stylenew.css";
import 'boxicons';
import 'bootstrap/dist/css/bootstrap.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import "./Fontawesome/LoginFont";
function Login(){   
  const[isSignUpOn,setIsSignUpOn]=useState(true);
  //signup
  const[name,setName]=useState("");
  const [lastName,setLastName]=useState("");
  const [gradeId,setGradeId]=useState(0);
  const [majorId,setMajorId]=useState(0);
  const [userName,setUserName]=useState("");
  const [phoneNumber,setPhoneNumber]=useState("");
  const [password,setPassword]=useState("");
  const [hasSupporter,sethasSupporter]=useState(true);
  const [suppporterId,setSuppporterId]=useState(0);
  function signUp(){
    console.log(name,lastName,gradeId,majorId,userName,phoneNumber,password.hasSupporter,suppporterId);
  }
return(

    <div className={isSignUpOn? "sign-up-mode container":"container"}>
    <div className="forms-container">
      <div className="signin-signup">
        <form name="form" className="sign-in-form" methoD="post" onsubmit="login()" >
          <h2 className="title">ورود</h2>
          <div className="input-field">
          <FontAwesomeIcon icon="user"  className="font-awsome" />
            <input type="text" name="user" placeholder="  شماره موبایل/ نام کاربری" />
          </div>
          <div className="input-field">
                      
                      <FontAwesomeIcon icon="lock"  className="font-awsome"/>
            <input type="password" name="password" placeholder="رمز عبور"  />
          </div>
          <input type="submit" value="ورود" className="btn solid" />
        </form>
        <form name="myform" className="sign-up-form" method="post" onsubmit="return validateform()" >
          <h2 className="title " id="signuptitle">ثبت نام</h2>
          <p>فیلد های آبی لزوما پر شوند</p>
          <div className="input-field">
          <FontAwesomeIcon icon="user" style={{color: "#339af0"}}  className="font-awsome" />
            <input type="text" name=" name" value={name} placeholder="نام " onChange={(e)=>setName(e.target.value)}/>
          </div>
          <div className="input-field">
          <FontAwesomeIcon icon="user" style={{color: "#339af0"}}  className="font-awsome" />
            <input type="text" name=" name" value={lastName} placeholder=" نام خانوادگی" onChange={(e)=>setLastName(e.target.value)} />
          </div>

         
          <div className="input-field">
          <FontAwesomeIcon icon="book-reader" style={{color: "#339af0"}} className="font-awsome"  />
            <select className="custom-select select-custom" value={gradeId} onChange={(e)=>setGradeId(e.target.value)}>
              <option value={0}>پایه</option>
              <option value={1}>دهم</option>
              <option value={1}>یازدهم</option>
              <option value={2}>دوازدهم</option>
            </select>
          </div>
          <div className="input-field">
          <FontAwesomeIcon icon="book-reader" style={{color: "#339af0"}}  className="font-awsome" />
            <select className="custom-select select-custom" value={majorId} onChange={(e)=>setMajorId(e.target.value)}>
              <option value={0}>رشته</option>
              <option value={1}>ریاضی</option>
              <option value={2}>تجربی</option>
              <option value={3}>انسانی</option>
            </select>
          </div>
       
          <div className="input-field">
          <FontAwesomeIcon icon="user"   className="font-awsome" />
            <input type="text" name="user" placeholder="نام کاربری ( دلخواه )" value={userName} onChange={(e)=>setUserName(e.target.value)}/>
          </div>
          <div className="input-field">
          <FontAwesomeIcon icon="lock" style={{color: "#339af0"}}  className="font-awsome" />
            <input type="text" name="phone" placeholder="تلفن" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
          </div>
  
          
          <div className="input-field">
          <FontAwesomeIcon icon="lock"  style={{color: "#339af0"}}  className="font-awsome" />
            <input type="password" name="password" placeholder="رمزعبور" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <div className="input-field">
          <FontAwesomeIcon icon="lock"  style={{color: "#339af0"}}  className="font-awsome" />
            <input type="password" name="password" placeholder=" تکرار رمزعبور" />
          </div>
          <div style={{display: "flex",  direction: "rtl"}}> 
            <p>از دانش اموزان الورتبه هستی؟</p>
          <div className="form-check form-check-inline">
            

            <input className="form-check-input" type="radio"  name="inlineRadioOptions" id="inlineRadio1" value="true" checked={hasSupporter==="true"} onChange={(e)=>sethasSupporter(e.target.value)} />
            <label className="form-check-label" for="inlineRadio1" >   بله   </label>
          </div>
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="false" checked={hasSupporter==="false"} onChange={(e)=>sethasSupporter(e.target.value)} />
            <label className="form-check-label" for="inlineRadio2">   خیر   </label>
          </div>
          </div>
          <div className={hasSupporter==="true"? "input-field":"notAlorotbeh"}  id="myfield"  >
            <i className="fas fa-chalkboard-teacher" ></i>
            <select className="custom-select select-custom" value={suppporterId} onChange={(e)=>setSuppporterId(e.target.value)}>
              <option value={0}>انتخاب مشاور</option>
              <option value={1}>اقای تست 1</option>
              <option value={2}>خانم تست 2</option>
            </select>
          </div>
          <input type="submit" className="btn" value="ثبت نام" onClick={signUp} />
        </form>
      </div>
    </div>

    <div className="panels-container">
      <div className="panel left-panel">
        <div className="content">
          <h3>ثبت نام نکردی </h3>

          <button className="btn transparent" id="sign-up-btn" onClick={()=>setIsSignUpOn({isSignUpOn:true})}>
              بخش ثبت نام
          </button>
        </div>
      </div>
      <div className="panel right-panel">
        <div className="content">
          <h3>قبلا ثبت نام کرده ام</h3>

          <button className="btn transparent" id="sign-in-btn" onClick={()=>setIsSignUpOn({isSignUpOn:false})}> 
              ورود به برنامه
          </button>
        </div>
        <img src="img/register.svg" className="image" alt="" />
      </div>
    </div>
  </div>

);
}

export default Login ;

