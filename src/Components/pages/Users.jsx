import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Users = () => {
    let [runUseEffect, setrunUseEffect] = useState("")
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
            let ID = e.id;
            return (
                <div>
                <h1>Name: {e.name}</h1>
                <h1>Salaray: {e.salary} </h1>
                <h1>Company: {e.company} </h1>
                <button><Link to={`/edit-user/:${ID}`}>Edit</Link></button>
                <button>Delete</button>
                <br />
                <hr />
            </div>
            )
        })
    }
    </div>
   
  )
}

export default Users