import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Users = () => {

    let [users, setUsers] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:4502/employees")
        .then((e)=>{
            setUsers(e.data);
        })
    },[])

  return (
    <div>
    {
        users.map((e)=>{
            return (
                <div>
                <h1>Name: {e.name}</h1>
                <h1>Salaray: {e.salary} </h1>
                <h1>Company: {e.company} </h1>
            </div>
            )
        })
    }
    </div>
   
  )
}

export default Users