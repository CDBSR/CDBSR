import React, { useState } from 'react'
import '../styles/Contact.css';

const Contact = () => {
  const [formdata, setFromdata] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange =(e) => {
    const { name, value } = e.target;
    setFromdata(prev => ({
      ...prev,
      [name] : value
    }));
  }

  const handleSubmit =(e) => {
    e.preventDefault();
    console.log('Form submitted', formdata);
    setFromdata({
      name: '',
      email: '',
      message: ''
    });
    alert('Thanks for your message! I will get back to you soon');
  }

  return (
    <section id='contact' className='section'>
      <h2 className='section-title'>Get In Touch</h2>
      <p style={{color: '#8892b0', marginBottom: '30px', maxWidth: '600px'}}>I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you! Thank you!</p>
      <form action="" className='contact-form' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor="name" className='form-label'>Name</label>
          <input 
            type="text"
            id='name'
            name='name'
            value={formdata.name}
            onChange={handleChange}
            className='form-input'
            required />
        </div>

        <div className='form-group'>
          <label htmlFor="email" className='form-label'>Email</label>
          <input 
            type="email"
            id='email'
            name='email'
            value={formdata.email}
            onChange={handleChange}
            className='form-input'
            required />
        </div>

        <div className='form-group'>
          <label htmlFor="message" className='form-label'>Message</label>
          <textarea
            id="message"
            name="message"
            value={formdata.message}
            onChange={handleChange}
            className="form-textarea"
            required
          ></textarea>
        </div>

        <button type='submit' className='form-button'>Send Message</button>
      </form>
    </section>
  )
}

export default Contact
