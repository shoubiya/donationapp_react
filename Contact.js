import React from 'react'
import "./Contact.css"
import DonationNavbar from './DonationNavbar'
export default function Contact() {
  return (
    <div className='nil'>
       
       <div>
       <DonationNavbar/>
        <div className="container">
          <div className="front side">
            {/* <div className="content">
              <h1>Hakkam Abdullah</h1>
              <p>I am a graphic designer and art director. I am as well specialised in front end web design, user experience and creating identities. Throughout my career, I have worked with companies of all shapes and sizes that enriched my experience
              </p>
            </div> */}
             <div className="content">
              <h1>Contact Me</h1>
              <form>
                <label>Your Name :</label>
                <input type="text" placeholder="Omar Khattab" /><br/>
                <label>Your E-mail :</label>
                <input type="text" placeholder="Example@mail.com" /><br/>
                <label>Your message :</label>
                <textarea placeholder="The Subject" defaultValue={""} />
                <br/><br/>
                <div className='sub'>
                <input type="submit"   defaultValue="Done" /></div>
              </form>
            </div>
          </div>
          <div className="back side">
            <div className="content">
              <h1>Contact Me</h1>
              <form>
                <label>Your Name :</label>
                <input type="text" placeholder="Omar Khattab" /><br/>
                <label>Your E-mail :</label>
                <input type="text" placeholder="Example@mail.com" /><br/>
                <label>Your message :</label>
                <textarea placeholder="The Subject" defaultValue={""} />
                <br/><br/>
                <div className='sub'>
                <input type="submit"   defaultValue="Done" /></div>
              </form>
            </div>
          </div>
        </div>
        {/* <a target="_blank" href="http://codepen.io/Moslim/" className="white-mode">OTHER PENS</a> */}
      </div>
    </div>
  )
}
