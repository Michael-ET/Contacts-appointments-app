import React from 'react'
import {useState, useEffect} from "react";
import style from './style.css'
import {ContactForm} from '../../components/contactForm/ContactForm'
import TileList from '../../components/tileList/TileList'

export const ContactsPage = (props) => {
  const contacts = props.contacts;
  const addContact = props.addContact;

  const  [name,  setName] = useState('')
  const  [phone, setPhone] = useState('')
  const  [email, setEmail] = useState('')
  const  [duplicateName, setDuplicateName] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(duplicateName === false){
      addContact(name, phone, email)
      setName('')
      setPhone('')
      setEmail('')
    }else{
      alert('Duplicate name')   
    }
  };

  useEffect(()=>{
      for(const contact of contacts){
         if(name === contact.name){
          setDuplicateName(true)  
        }
        return       
      }
    }, [name, contacts])

  return (
    <div style={style}>
      <section>
        <h2 style={style}>Add Contact</h2> 
        <ContactForm
          setName={setName}
          setEmail={setEmail}
          setPhone={setPhone}
          name={name}
          phone={phone}
          email={email}
          handleSubmit={handleSubmit}
          />
      </section>
      <hr />
      <section>
        <h2 stlye={style}>Contacts</h2>
        <TileList objArr={props.contacts} />
      </section>
    </div>
  );
};



