 import React, { useEffect, useState } from 'react';
 import axios from "axios";
 import "./Foodview.css";
 import DonationNavbar from "./DonationNavbar";
 import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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

export default function FoodView() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
  const [state,setState]=useState([]);
  const[editfood,setEditFood]=useState({})
  
  useEffect(()=>{
    axios.get('http://localhost:5000/api/item/view-food').then (response=>{
    console.log("response====>",response);
    setState(response.data.data)
  })
  },[])
  const deletefood=(id)=>{
    console.log(id)
    axios.get(`http://localhost:5000/api/item/delete-food/${id}`).then(response=>{
      window.location.reload()
    })
  }
  const EditFood=(id)=>{
    console.log(id)
    axios.get(`http://localhost:5000/api/item/edit/${id}`).then(response=>{
     console.log(response.data.message);
     setEditFood(response.data.message)
    })
  }
  const setRegister=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setEditFood({...editfood,[name]:value});
    console.log(state);
  }
  const UpdateFood=(id)=>{
    console.log(id);
    const foodinfo ={
      food_name:editfood.food_name,
      category:editfood.category,
      date:editfood.date,
      id:editfood._id
    }
    console.log(foodinfo)
    axios.get(`http://localhost:5000/api/item/update-food`,foodinfo).then(response=>{
    })
  
  }
  return (
    <>
    <DonationNavbar/>
   <br/><br/>
     <div>
        <br/>
      
       {state.map((product)=>(
        
       <div class="col-lg-3 card " style={{width: "18rem"}}>
   <img src="https://m.economictimes.com/thumb/msid-89885004,width-1200,height-900,resizemode-4,imgsize-137412/healthy-food_think.jpg" class="card-img-top" alt="..."/>
   <div class="card-body">
   <p class="card-title">Food Name:{product.food_name}</p>
    <p class="card-text">Food Category:{product.food_category}</p>
    <p class="card-text">Quantity:{product.quantity}</p>
    <p class="card-text">Exp Date:{product.exp_date}</p>
     <button onClick={()=>{deletefood(product._id)}} class="btnn">Delete</button>
     <button onClick={()=>{EditFood(product._id);setOpen(true)}}class="btnn">Edit</button>
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
          
          <div className="form_wrap">
           <div className="form_item">
                <label><b>Category:</b></label>
              <select name="category" onChange={setRegister} >
                  <option>Non veg</option>
                   <option>veg</option>
                  
               </select>
               
             </div>
            </div><br/>  
            <div className="form_wrap">
              <div className="form_item">
                <label><b>Foodname:</b></label>
                <input type="text" name='food_name' value={editfood?.food_name||""} onChange={setRegister} placeholder='English'/>
              </div>
            </div><br/>
            <div className="form_wrap">
              <div className="form_item">
                <label><b>Quantity:</b></label>
                <input type="text" name='quantity' value={editfood?.quantity||""} onChange={setRegister} placeholder='English'/>
              </div>
            </div><br/>
            <div className="form_wrap">
              <div className="form_item">
                <label><b>Date:</b></label>
                <input type="text" name='date' value={editfood?.date||""} onChange={setRegister} placeholder='English'/>
              </div>
            </div><br/>
            <div className="btn" >
              <input type="submit" onClick={UpdateFood} defaultValue="Get Started"/>
            </div>
         
          </Typography>
        </Box>
      </Modal>
   </div>
 </div>
 ))}
     </div>
     </>
  )
}
