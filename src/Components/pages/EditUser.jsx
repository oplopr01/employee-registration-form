import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const EditUser = () => {
    let userID = useParams()
    let [name, setName]= useState("")
    let [salary, setSalary] = useState(0)
    let [company, setCompany] = useState("")

    useEffect(()=>{
        axios.get(`http://localhost:4502/employees/${userID.ID}`)
        .then((e)=>{
            setName(e.data.name)
            setSalary(e.data.salary)
            setCompany(e.data.company)
        })
    },[])




  return (

    <div>
        <label htmlFor="">name</label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <label htmlFor="">Salary</label>
        <input type="text" value={salary} onChange={(e)=>setSalary(e.target.value)} />
        <label htmlFor="">company</label>
        <input type="text" value={company} onChange={(e)=>setCompany(e.target.value)} />
        <button>Submit</button>
    
    </div>
  )
}

export default EditUser