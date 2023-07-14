import React, { useState ,useRef} from 'react';
import '../Components/ContactUs.css';
import emailjs from 'emailjs-com';
// '; // Import the CSS file for styling

const Audio= () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const form = React.useRef(); 

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();


    // Perform any necessary actions, such as sending the form data to a server
    console.log('Form submitted:', name, email, subject, message);

    // Reset form fields
    setName('');
    setEmail('');
    setSubject('');
    setMessage('');
  
    emailjs.sendForm('service_g3ozi4s', 'template_6fhioy4', e.target, 'NKSClb2t4FpkNdCrc')
    .then((result) => {
      console.log(result.text);
      console.log("send succesfully")
  }, (error) => {
      console.log(error.text);
  });
}

  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} ref={form}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="subject">Subject:</label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={subject}
            onChange={handleSubjectChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            value={message}
            name="message"
            onChange={handleMessageChange}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Audio;