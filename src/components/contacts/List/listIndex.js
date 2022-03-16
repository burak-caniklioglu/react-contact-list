import React,{useState} from 'react'

function List({people}) {
  const [filterText, setFilterText] = useState("")

  const filtered = people.filter((item)=>{
      return Object.keys(item).some((key)=> item[key].toString().toLowerCase().includes(filterText.toLowerCase()))
  })

console.log(filtered)

  return (
    <div>
        <p>Search contacts & numbers </p>

        <div>
            <input className='w-25' value={filterText} onChange={(e)=> setFilterText(e.target.value)} />
        </div>
        <ul className='mt-5 m-auto w-25 p-0'>
            {filtered.map((person,i)=>{
              return  <li key={i} className="d-flex justify-content-between"><span>{person.fullname}</span> <span>{person.phone_number}</span></li>
            })}
        </ul>
    </div>
  )
}

export default List