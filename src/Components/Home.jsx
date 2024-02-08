import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <Link to="/create-user">Create user</Link>
        <Link to="/users">See all users</Link>

    </div>
  )
}

export default Home