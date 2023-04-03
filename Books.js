import React, { useEffect, useState } from 'react';
import "./Books.css";
import DonationNavbar from "./DonationNavbar";
import axios from "axios";
export default function Books() {
 
  const [state,setState]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:5000/api/book/view-book').then (response=>{
    console.log("response====>",response);
    setState(response.data)
  })
  },[])

  return (
   <div className='back1'>
     <DonationNavbar/>
      <section>
        <div className="container">
          <div className="carousel1">
            <input type="radio" name="slides" defaultChecked="checked" id="slide-1" />
            <input type="radio" name="slides" id="slide-2" />
            <input type="radio" name="slides" id="slide-3" />
            <input type="radio" name="slides" id="slide-4" />
            <input type="radio" name="slides" id="slide-5" />
            <input type="radio" name="slides" id="slide-6" />
            <ul className="carousel__slides">
              <li className="carousel__slide">
                <figure>
                  <div>
                    <img src="https://www.kidsworldfun.com/blog/wp-content/uploads/2016/11/Young-Children-Reading-Books-1.jpg" alt="" />
                  </div>
                  <figcaption>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <span className="credit">Photo: Tim Marshall</span>
                  </figcaption>
                </figure>
              </li>
              <li className="carousel__slide">
                <figure>
                  <div>
                    <img src="https://www.sevenhills.org/hubfs/WSU-Book-donation-2021.jpg" alt="" />
                  </div>
                  <figcaption>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <span className="credit">Photo: Christian Joudrey</span>                            
                  </figcaption>
                </figure>
              </li>
              <li className="carousel__slide">
                <figure>
                  <div>
                    <img src="http://blogs.library.duke.edu/wp-content/uploads/2022/12/Book-Harvest-Kids-600x360-1.jpg" alt="" />
                  </div>
                  <figcaption>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <span className="credit">Photo: Steve Carter</span>                            
                  </figcaption>
                </figure>
              </li>
              <li className="carousel__slide">
                <figure>
                  <div>
                    <img src="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/09/08/Pictures/_2b9e0c8c-75cc-11e6-9bc1-888b3aba2d1d.jpg" alt="" />
                  </div>
                  <figcaption>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <span className="credit">Photo: Aleksandra Boguslawska</span>                            
                  </figcaption>
                </figure>
              </li>
              <li className="carousel__slide">
                <figure>
                  <div>
                    <img src="https://www.globalgiving.org/pfil/7790/20180103_at_6.27.32_PM_Large.jpg" alt="" />
                  </div>
                  <figcaption>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <span className="credit">Photo: Rosan Harmens</span>                            
                  </figcaption>
                </figure>
              </li>
              <li className="carousel__slide">
                <figure>
                  <div>
                    <img src="https://singaporemotherhood.com/articles/wp-content/uploads/2020/10/Dignity-Mama.jpg" alt="" />
                  </div>
                  <figcaption>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <span className="credit"></span>                            
                  </figcaption>
                </figure>
              </li>
            </ul>    
            <ul className="carousel__thumbnails">
              <li>
                <label htmlFor="slide-1"><img src="https://www.kidsworldfun.com/blog/wp-content/uploads/2016/11/Young-Children-Reading-Books-1.jpg" alt="" /></label>
              </li>
              <li>
                <label htmlFor="slide-2"><img src="https://www.sevenhills.org/hubfs/WSU-Book-donation-2021.jpg" alt="" /></label>
              </li>
              <li>
                <label htmlFor="slide-3"><img src="http://blogs.library.duke.edu/wp-content/uploads/2022/12/Book-Harvest-Kids-600x360-1.jpg" alt="" /></label>
              </li>
              <li>
                <label htmlFor="slide-4"><img src="https://images.hindustantimes.com/rf/image_size_640x362/HT/p2/2016/09/08/Pictures/_2b9e0c8c-75cc-11e6-9bc1-888b3aba2d1d.jpg" alt="" /></label>
              </li>
              <li>
                <label htmlFor="slide-5"><img src="https://www.globalgiving.org/pfil/7790/20180103_at_6.27.32_PM_Large.jpg" alt="" /></label>
              </li>
              <li>
                <label htmlFor="slide-6"><img src="https://singaporemotherhood.com/articles/wp-content/uploads/2020/10/Dignity-Mama.jpg" alt="" /></label>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
