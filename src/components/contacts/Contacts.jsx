import React from './contacts.scss';
import { useState } from 'react';

export default function Contacts() {

  const [message,setMessage] = useState(false)

  const handleSubmit = (e)=>{
    e.preventDefault();
    setMessage(true);
  }
  return (
    <div className='contacts' id="contacts">
      <div className="left">
        <img src="assets/mail_send.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder='email' />
          <textarea placeholder='message'></textarea>
          <button type="submit">Send</button>
          {message && <span> Thanks, I'll reply very soon.</span>}
        </form>
      </div>
    </div>
  );
}
