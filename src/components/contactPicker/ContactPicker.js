import React from "react";

export const ContactPicker = (props) => {

const onChange = props.onChange;


  return (
    <select onChange={onChange}>
      
     <option >{'select a contact'}</option>



     {props.contacts.map(contact=> <option key={contact.name} value={contact.name}>{contact.name}</option>)}
 
    </select>
    
  );
};

export default ContactPicker;