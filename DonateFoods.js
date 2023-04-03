import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
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

export default function DonateFoods() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  const viewFoods = ()=>{
    Navigate(`/Foods`)
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
 
      axios.post(`http://localhost:5000/api/item/add-food`,state).then(response=>{
      
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
        <div className='books'>
        <img src="https://bronxnet.org/media/filer_public_thumbnails/filer_public/c9/d1/c9d1ca88-5b7e-49e8-b0c5-3fa04bf0a7c5/prop-food-02.jpg__840x560_q85_crop_subsampling-2_upscale.jpg" class="img-fluidd" alt="..."></img>
        <h3 className='book1'><b></b></h3>
        <p className='book2'><b>Donate Foods Supply Program</b></p><br/>
        <p className='book3'>Instead Of Seeing <b>Organic Food </b>As An <br/>Expence,View It As<b> AN Investment</b> In <br/>Your Health And A <b>Donation</b> Towards A<br/>Safer,Better World For Future<br/> Generation!!</p>
        <br/>
        <button class="bookss" onClick={viewFoods}>🍔View foods</button>
        <button class="booked" onClick={handleOpen} >🍔Donate Now</button>
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
                <label><b>Category:</b></label>
              <select name="Category"  onChange={setRegister}  >
                  <option></option>
                   <option></option>
                  <option></option>
                  <option></option>
               </select>
               </div>
             </div><br/>
            <div className="form_wrap">
              <div className="form_item">
                <label><b>Foods Name:</b></label>
                <input type="text" name='food_name'  onChange={setRegister} placeholder=''/>
              </div>
            </div><br/>
            <div className="form_wrap">
              <div className="form_item">
                <label><b>Quantity:</b></label>
                <input type="text" name='quantity'  onChange={setRegister} placeholder=''/>
              </div>
            </div><br/>
            <div className="form_wrap">
              <div className="form_item">
                <label><b>Date:</b></label>
                <input type="text" name='date'  onChange={setRegister}  placeholder=''/>
              </div>
            </div><br/>
            <div className="btn">
              <input type="submit"  onClick={Register} defaultValue="Get Started"  />
            </div>
            </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}
