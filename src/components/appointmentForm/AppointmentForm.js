import React from "react";
import ContactPicker from '../contactPicker/ContactPicker';

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  // contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {

  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  const handleTitle = (e) => {
    setTitle(e.target.value)
  }
  const handleContact = (e) => {
    setContact(e.target.value)
  }
  const handleDate = (e) => {
    setDate(e.target.value)
  }
  const handleTime = (e) => {
    setTime(e.target.value)
  }

  const min = getTodayString();
  
  return (

    <form onSubmit={handleSubmit}>
      <input 
        type={'text'}
        value={title}
        onChange={handleTitle}
      ></input>
      <ContactPicker
        contacts={contacts}
        
        onChange={handleContact}
      />
      <input 
        type={'date'}
        value={date}
        onChange={handleDate}
        min={min}
      ></input>
      <input 
        type={'time'}
        value={time}
        onChange={handleTime}
      ></input>    
      <button>Submit</button>  
    
    </form>


  );
};
