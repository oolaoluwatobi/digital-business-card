import React from 'react'

function Info() {
  return (
    <div className='info' >
      <img className='my-img' src="/my-img.png" alt="mypicture" />
      <h2 className='my-name' >Olaoluwa Oladipo</h2>
      <h4 className='job-description' >Frontend Developer</h4>
      <div className='buttons' >
        <a href="mailto:oolaoluwatobi@hotmail.com" target='_blank'>
          <button className='email' ><img src='/mail.png' />Email</button>
        </a>
        <a href="https://www.linkedin.com/in/olaoluwa-oladipo-242422124?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BxhosuGW3QMqocLpN85rWoA%3D%3D" target='_blank'>
          <button className='linkedin' ><img src='/linkedin.png' />LinkedIn</button>
        </a>
      </div>
    </div>
  )
}

export default Info