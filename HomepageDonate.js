import React, { useEffect, useState } from 'react';
import "./HomepageDonate.css";
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import DonationNavbar from "./DonationNavbar";
import DonateCloths from "./DonateCloths";
import DonateFoods from './DonateFoods';

import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Token } from '@mui/icons-material';
// import About from './About';
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
export default function HomepageDonate() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
  const viewBooks = ()=>{
    Navigate(`/Books`)
    // console.log(id);
  }
  const Navigate=useNavigate();
  const [state,setInputs]=useState(

      {
        
        
      }
    );
    const setRegister=(event)=>{
      const Name=event.target.name;
      const Value=event.target.value;
     setInputs({...state,[Name]:Value});
      console.log(state);
    }
  const Register=(e)=>{
    e.preventDefault();
 console.log(state);



const tokenvalue=JSON.parse(localStorage.getItem("logdata"))
const token=tokenvalue.token
 axios.post(`http://localhost:5000/api/book/add-book`,state,
      {
        headers:{
          "Authorization":token
        }
      } ).then(response=>{
      console.log(response);
       })
    .catch((err)=>{
      console.log(err)
      if(err)
      {  toast.success(err.response.data, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        });}
    })
  
  }
 
  return (
    
    <div className='donate'>
         <DonationNavbar/>
      <img src="https://cdn.pixabay.com/photo/2017/07/22/20/40/girl-2529907__480.jpg" class="img-fluid" alt="..."></img>
      <div class="contentt">
            <h1 className='donh1'><b>The Best Way To Find<br/>Yourself Is To Lose Yourself<br/>In The Service Of Others!!!</b></h1>
              
            <button class="donatee" >🤍Make A Donation</button>
        </div> <br/><br/><br/>
        <div className='books'>
        <img src="https://media.istockphoto.com/id/458093335/photo/donation-box-for-school-supplies.jpg?s=612x612&w=0&k=20&c=isdzpk0lMEJItEqiJTF1Uu3afeAL1qGMgqqan5-Q1nk=" class="img-fluidd" alt="..."></img>
        <h3 className='book1'><b>UPCOMING PROGRAMS</b></h3>
        <p className='book2'><b>Donate Books Supply Program</b></p>
        <p className='book3'><b>Gift of Learning</b> Helps Underprevileged<br/> Recycling Helps the Environment Inculcates <br/>Good Values in Those Around You Makes<br/> You Feel Happy Geniunely Content Cleanses <br/>Your Space May Support Your Local Librairy<br/> System Can Give Peaople a Livelihood.</p>
        <br/>
        <button class="bookss" onClick={viewBooks}>📚View Books</button>
        <button class="booked" onClick={handleOpen}>📚Donate Now</button>
        </div><br/><br/>
        <DonateCloths/>
        <DonateFoods/>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Text in a modal
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <form>
          <div className="form_wrap">
           <div className="form_item">
                <label><b>Category:</b></label>
              <select name="Category" onChange={setRegister} >
                  <option>Novel</option>
                   <option>Note Books</option>
                  <option>Text Books</option>
                  <option></option>
               </select>
               
             </div>
            </div><br/>
            <div className="form_wrap">
              <div className="form_item">
                <label><b>Language:</b></label>
                <input type="text" name='Language' onChange={setRegister} placeholder='English'/>
              </div>
            </div><br/>
            <div className="btn" >
              <input type="submit" onClick={Register} defaultValue="Get Started" />
            </div>
            </form>
          </Typography>
        </Box>
      </Modal>

 
        
    </div>
  )
}

