import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Users = () => {
    let [name, setName] = useState("")
    let [salary, setSalary] = useState(0)
    let [company, setCompany] = useState("")

    // useEffect(
    //     ()=>{
    //     axios.get("http://localhost:4502/employees")
    //     .then((e)=>{
    //         setName(e.data.name)
    //         setSalary(e.data.salary)

        
    //     })
        
    //     }
    //     ,[]
    // )

  return (
    <div>
        <h1>Name: </h1>
        <h1>Salaray: </h1>
        <h1>Company: </h1>
    </div>
  )
}

export default Users