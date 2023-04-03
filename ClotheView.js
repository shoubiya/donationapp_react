import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./Clotheview.css";
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
export default function ClotheView() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
  const [state,setState]=useState([]);
  const[editcloth,setEditCloth]=useState({})
  
  useEffect(()=>{
    axios.get('http://localhost:5000/api/cloth/view-cloth').then (response=>{
    console.log("response====>",response);
    setState(response.data.data)
  })
  },[])
  const deletecloth=(id)=>{
    console.log(id)
    axios.get(`http://localhost:5000/api/cloth/delete-cloth/${id}`).then(response=>{
      window.location.reload()
    })
  }
  const EditCloth=(id)=>{
    console.log(id)
    axios.get(`http://localhost:5000/api/cloth/edit/${id}`).then(response=>{
     console.log(response.data.message);
     setEditCloth(response.data.message)
    })
  }
  const setRegister=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setEditCloth({...editcloth,[name]:value});
    console.log(state);
  }
  const UpdateCloth=(id)=>{
    console.log(id);
    const clothinfo ={
      quantity:editcloth.quantity,
      gender:editcloth.gender,
      type:editcloth.type,
      id:editcloth._id
    }
    console.log(clothinfo)
    axios.get(`http://localhost:5000/api/cloth/update-cloth`,clothinfo).then(response=>{
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
  <img src="https://thumbs.dreamstime.com/b/pile-folded-clothes-19876949.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-title">Genger:{product.gender}</p>
    <p class="card-text">Type:{product.type}</p>
    <p class="card-text">Quantity:{product.quantity}</p>
    <button onClick={()=>{deletecloth(product._id)}} class="btnn">Delete</button>
    <button onClick={()=>{ EditCloth(product._id);setOpen(true)}}class="btnn">Edit</button>
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
              <select name="gender" onChange={setRegister} >
                  <option>Male</option>
                   <option>Female</option>
                  
               </select>
               
             </div>
            </div><br/>  
            <div className="form_wrap">
              <div className="form_item">
                <label><b>Type:</b></label>
                <input type="text" name='type' value={editcloth.type||""} onChange={setRegister} placeholder=''/>
              </div>
            </div><br/>
            <div className="form_wrap">
              <div className="form_item">
                <label><b>Quantity:</b></label>
                <input type="text" name='quantity'  value={editcloth.quantity||""} onChange={setRegister} placeholder=''/>
              </div>
            </div><br/>
            <div className="btn" >
              <input type="submit" onClick={UpdateCloth} defaultValue="Get Started"  />
            </div>
            </form>
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
