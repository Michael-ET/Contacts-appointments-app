import React from "react";

export const ContactForm = ({

  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {


const handleTel = (e) => {
  setPhone(e.target.value)
}
const handleEmail = (e) => {
  setEmail(e.target.value)
}
const handleName = (e) => {
  setName(e.target.value)
}

  return (

    <form onSubmit={handleSubmit}>

      <input 
        type={'text'} 
        value={name} 
        onChange={handleName}
      ></input>
      <input 
        tpye="tel" 
        value={phone} 
        onChange={handleTel} 
        pattern="^(\(?\+?[0-9]*\)?)?[0-9_\- \(\)]*$"
      ></input>
      <input 
        type='email' 
        value={email} 
        onChange={handleEmail}
      ></input>

      <button>Submit</button>
      
      
    </form>
   

  );
};

