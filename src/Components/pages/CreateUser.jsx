import React, { useState } from 'react'
import style from "../home.module.css"

const CreateUser = () => {
    let [name, setName] = useState("")
    let [salary, setSalary] = useState(0)
    let [company, setCompany] = useState("")

    let formHandler= (e)=>{
        e.preventDefault()
        console.log(name, salary, company);
    }

  return (
    <div>
    
        <div id={style.formContainer}>
      <form action="">
        <div>
        <label htmlFor="">Name: </label>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} />
        <br />
        </div>
        <div> <label htmlFor="">Salary: </label>
        <input type="text" value={salary} onChange={(e)=>setSalary(e.target.value)} />
        <br />
       </div>
        <div> <label htmlFor="">Company:   </label>
        <input type="text" value={company} onChange={(e)=>setCompany(e.target.value)} />
        </div>
        <br />
          <button onClick={formHandler}>SUBMIT</button>
      </form>
    </div>
    
    </div>
  )
}

export default CreateUser