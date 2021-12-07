import React from "react";
import {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

export function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  const [contacts, setContacts] = useState([])
  const [appointments, setAppointments] = useState([])
  
  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */

const addContact = (name, phone, email) => {
  setContacts((prev)=>{
    
      return [...prev, { name, email, phone } ]    
   })
};

const addAppointment = (title, contact, date, time) =>{
  setAppointments((prev)=>{
    return [...prev, {title, contact, date, time}]
  })
}

  return (
    <>
      <nav class='mainBox'>
        <NavLink to={ROUTES.CONTACTS} id='title' activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} id='title' activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
             {/* Add props to ContactsPage */}
            <ContactsPage contacts={contacts} addContact={addContact}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage appointments={appointments} contacts={contacts} addAppointment={addAppointment}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
