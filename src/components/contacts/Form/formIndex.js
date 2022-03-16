import React, {useState, useEffect} from 'react'



const initialFormValues =  {fullname:"" ,phone_number :""}

function Form({addContact, people}) {
  const [form,setForm] = useState({fullname: "", phone_number: ""})
  const changeInput = (e) =>{setForm({...form, [e.target.name]: e.target.value})}
  const onSubmit = (e) => {
      e.preventDefault()
      if(form.fullname ==="" || form.phone_number === ""){
          return false
      }

      addContact([...people, form])
      console.log(form)
      
  }

  useEffect(() =>{
    setForm(initialFormValues)
  }, [people])



  return (
    <form onSubmit={onSubmit}>
        <div className='w-25  m-auto' >
            <div>
                <label className='d-flex justify-content-between'>
                    <p>Fullname :</p>
                    <input name="fullname" className='w-50 h-25' value={form.fullname}  onChange={changeInput} />
                </label>
                
                <label className='d-flex justify-content-between'>
                    <p>Phone_number :</p>
                    <input name="phone_number" className='w-50 h-25' value={form.phone_number}  onChange={changeInput} />
                </label>

            </div>
            <button className='mb-5' > Add </button>

        </div>

    </form>
  )
}

export default Form