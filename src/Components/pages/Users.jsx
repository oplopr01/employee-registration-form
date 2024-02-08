import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Users = () => {
    let [runUseEffect, setrunUseEffect] = useState(0)
    let [users, setUsers] = useState([])
    useEffect(()=>{
        console.log(runUseEffect);
        axios.get("http://localhost:4502/employees")
        .then((e)=>{
            setUsers(e.data);
        })
        setrunUseEffect(1)
    },[runUseEffect])

    let deleteUser=(e)=>{
        axios.delete(`http://localhost:4502/employees/${e}`)
        .then(() => {
            setrunUseEffect(Date.now())})

    }
    
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
                <button><Link to={`/edit-user/${ID}`}>Edit</Link></button>
                <button onClick={()=>{deleteUser(e.id)}} >Delete</button>
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