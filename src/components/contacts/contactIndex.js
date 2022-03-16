import React, {useState, useEffect} from 'react'
import Form from './Form/formIndex'
import List from './List/listIndex'



function Contact() {
  const [contacts, setContacts] = useState([
    {fullname: "Burak", phone_number:"123456789"},
    {fullname: "Nazlı", phone_number:"546789715"}
  ])

  useEffect(() => {
    console.log(contacts)
  },[contacts])

  return (
    <div id='container'>
      <Form addContact ={setContacts} people={contacts}/>
      <List people = {contacts}/>
    </div>
  )
}

export default Contact