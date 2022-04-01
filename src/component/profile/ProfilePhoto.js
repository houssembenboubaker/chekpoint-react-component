import React from 'react'
import pic from '../../pic.jpg'
import "./Profile.css"

function ProfilePhoto() {
  return (
    <div>
<img src={pic} className='houssem' alt='profile'/>
    </div>
  )
}

export default ProfilePhoto