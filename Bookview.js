import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./Bookview.css";
import DonationNavbar from "./DonationNavbar";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useNavigate } from 'react-router-dom';

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

export default function Bookview() {
  const navigate=useNavigate();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
 
  const [state,setState]=useState([]);
  const[editbook,setEditBook]=useState({})
console.log(editbook)
  useEffect(()=>{
    axios.get('http://localhost:5000/api/book/view-book').then (response=>{
    console.log("response====>",response);
    setState(response.data.data)
  })
  },[])
  const deletebook=(id)=>{
    console.log(id)
    axios.get(`http://localhost:5000/api/book/delete-book/${id}`).then(response=>{
      window.location.reload()
    })
  }
  const Editbook=(id)=>{
    console.log(id)
    axios.get(`http://localhost:5000/api/book/edit/${id}`).then(response=>{
     console.log(response.data.message);
     setEditBook(response.data.message)
    })
  }
  const setRegister=(event)=>{
    const Name=event.target.name;
    const Value=event.target.value;
   setEditBook({...editbook,[Name]:Value});
    console.log(editbook);
  }
const updatebook=(id)=>{
  console.log(editbook)
  const bookinfo ={
    category:editbook.category,
    language:editbook.language,
    id:editbook._id
  }
  console.log(bookinfo)
  axios.post(`http://localhost:5000/api/book/update-book`,bookinfo).then(response=>{
  console.log(response);
  })

}
  return (
    <>
    <DonationNavbar/>
    <br/><br/>
    <div>
      
      {state.map((product)=>(
      <div class="col-lg-3 card " style={{width: "18rem"}}>

  <img src="https://images.ctfassets.net/cnu0m8re1exe/4KwrJVfCGeyOKwm8PS2tjI/30026753d97e3b41a50560063126ded8/shutterstock_135114548.jpg?fm=jpg&fl=progressive&w=660&h=433&fit=fill" class="card-img-top" alt="..."/>
  <div class="card-body">
    <p class="card-title">Category:{product?.category}</p>
    <p class="card-text">Language:{product?.language}</p>
    <button onClick={()=>{deletebook(product?._id)}} class="btnn">Delete</button>
    <button onClick={()=>{Editbook(product?._id);setOpen(true)}}class="btnn">Edit</button>
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
                  <option>Novel</option>
                   <option>Note Books</option>
                  <option>Text Books</option>
                  <option>Salar</option>
               </select>
               
             </div>
            </div><br/>  
            <div className="form_wrap">
              <div className="form_item">
                <label><b>Language:</b></label>
                <input type="text" name='language' value={editbook?.language||""} onChange={setRegister} placeholder='English'/>
              </div>
            </div><br/>
            <div className="btn" >
              <input type="submit" onClick={updatebook} defaultValue="Get Started"/>
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
