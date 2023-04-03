import React from 'react';
import "./Register.css";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  {useState} from 'react';
import DonationNavbar from './DonationNavbar';

export default function Register() {
  const [state,setInputs]=useState(
    {

  
    }
  );
  const setRegister=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setInputs({...state,[name]:value});
    console.log(state);
  }
const Register=(e)=>{
  e.preventDefault();
    console.log(state)
    axios.post(`http://localhost:5000/api/register`,state).then(response=>{
      console.log("response====>",response.data.message);

      toast.success(response.data.message, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });

    })
  }
  return (
    <div>
      <DonationNavbar/>
      <div className="wrapper">
        <div className="form_container">
          <form name="form">
            <div>
              <h2>Registion Form</h2>
              </div>
            <div className="form_wrap">
              <div className="form_item">
                <label>Username</label>
                <input type="text" name='username' onChange={setRegister} />
                <div className="error" id="username" />  
              </div>
              <div className="form_item">
                <label>Password</label>
                <input type="text" name='password' onChange={setRegister} />
                <div className="error" id="password" />  
              </div>
            </div>
            <div className="form_wrap">
              <div className="form_item">
                <label>Name</label>
                <input type="text" name='name' onChange={setRegister} />
                <div className="error" id="name" />  
              </div>
            </div>
            <div className="form_wrap">
              <div className="form_item">
                <label>Address</label>
                <input type="text" name='address' onChange={setRegister} />
                <div className="error" id="address" />  
              </div>
            </div>
            <div className="form_wrap">
              <div className="form_item">
                <label>Phone</label>
                <input type="text" name='phone' onChange={setRegister} />
                <div className="error" id="phone" />  
              </div>
            </div>
            
            <div className="btn">
              <input type="submit" defaultValue="Get Started" onClick={Register} />
            </div>
          </form>
        </div>
        <ToastContainer/>
      </div>

    </div>
  )
}
