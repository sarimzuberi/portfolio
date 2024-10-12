import React, { useState } from 'react';
import './Contact.css';
import axios from 'axios';
import { FaUser, FaEnvelope, FaPaperPlane, FaFacebook, FaInstagram, FaLinkedin, FaBriefcase } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const { name, email, message } = formData;

  const validateName = (value) => {
    const nameRegex = /^[A-Za-z\s]+$/;
    if (!nameRegex.test(value)) {
      return 'Invalid Name';
    }
    return '';
  };

  const validateEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      return 'Invalid Email';
    }
    return '';
  };

  const validateMessage = (value) => {
    if (value.length < 1) {
      return '    Message should not be blank';
    }
    return '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    let error = '';

    if (name === 'name') error = validateName(value);
    else if (name === 'email') error = validateEmail(value);
    else if (name === 'message') error = validateMessage(value);

    setErrors({ ...errors, [name]: error });
    setFormData({ ...formData, [name]: value });
  };

  const isFormValid = () => {
    return !errors.name && !errors.email && !errors.message && name && email && message;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFormValid()) {
      axios.post('/api/contact', formData)
        .then(response => {
          alert('Message sent successfully!');
          setFormData({ name: '', email: '', message: '' });
          setErrors({ name: '', email: '', message: '' });
        })
        .catch(error => {
          alert('Failed to send message.');
        });
    } else {
      alert('Please fix the errors before submitting.');
    }
  };

  return (
    <section id="contact" className="contact">
      console.log("Checking if Contacts is rendered");
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="input-container">
          <FaUser />
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Your Name"
            required
          />
          {errors.name && <small className="error">{errors.name}</small>}
        </div>
        <div className="input-container">
          <FaEnvelope />
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Your Email"
            required
          />
          {errors.email && <small className="error">{errors.email}</small>}
        </div>
        <div className="input-container">
          <FaPaperPlane />
          <textarea
            name="message"
            value={message}
            onChange={handleChange}
            placeholder="Your Message"
            required
          ></textarea>
          {errors.message && <small className="error">{errors.message}</small>}
        </div>
        <button type="submit" className="btn" disabled={!isFormValid()}>
          {isFormValid() ? 'Send Message' : 'Locked'}
        </button>
      </form>

      <div className="social-links">
        <a href="https://www.facebook.com/sarim.zuberi.9?mibextid=LQQJ4d" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
        <a href="https://www.instagram.com/sarimzuberi12/profilecard/?igsh=MTM3empzMTU3aWE1" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
        <a href="https://www.linkedin.com/in/sarim-zuberi-0ab498228" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://www.upwork.com/freelancers/~01abc4a313ed274310?companyReference=1423951801238282241&mp_source=share" target="_blank" rel="noopener noreferrer"><FaBriefcase /></a>
      </div>
    </section>
  );
};

export default Contact;
