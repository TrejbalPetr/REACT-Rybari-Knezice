import React from 'react'
import "./members.css"

const Profile = ({ Member }) => {
  return (
    <div className='Profile'>
        <img src={Member.img} alt={Member.use} />
        <div className='ProfileText'>
          <h2>{Member.name}</h2>
          <h4>{Member.use}</h4>
        </div>
    </div>
  )
}

export default Profile