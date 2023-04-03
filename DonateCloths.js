import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Link, useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

export default function DonateCloths() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);




  const viewClothes = ()=>{
    Navigate(`/Clothes`)
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
 
      axios.post(`http://localhost:5000/api/cloth/add-cloth`,state).then(response=>{
      
        console.log("response====>",response);
        
        Navigate('/')

       
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
    <div>
          <div className='book'>
        <img src="https://d3mnyo7e05c2kb.cloudfront.net/blog-content/uploads/2019/04/where-to-donate-clothing-header.jpg" class="img-fluiddd" alt="..."></img>
        <h3 className='book11'><b></b></h3>
        <p className='book22'><b>Donate Clothes Supply Program</b></p><br/>
        <p className='book33'><b>Fashion And Wearing</b> Clothes is a<br/>Daily Routine For Everybody.what<br/>Better Way To Spread The Word <br/>Of Giving Back And Philanthropic<br/> Ways  Of LifeThan To Wear  <br/>Something that Gives Back to <b>Charity?</b></p>
        <br/>
        <div className='space'> 
        <button class="booksss" onClick={viewClothes} >👕View Clothes</button>
        <button class="booked" onClick={handleOpen}>👕Donate Now</button>
        </div>
       
        </div>
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
                <label><b>Gender:</b></label>
                <input type="text" name='gender' onChange={setRegister} placeholder=''/>
          </div>
            </div><br/>
            <div className="form_wrap">
              <div className="form_item">
                <label><b>Type:</b></label>
                <input type="text" name='type' onChange={setRegister} placeholder=''/>
              </div>
            </div><br/>
            <div className="form_wrap">
              <div className="form_item">
                <label><b>Quantity:</b></label>
                <input type="text" name='quantity' onChange={setRegister} placeholder=''/>
              </div>
            </div><br/>
            <div className="btn">
              <input type="submit" onClick={Register} defaultValue="Get Started"  />
            </div>
            </form>
          </Typography>
        </Box>
      </Modal>

    </div>
  )
}
