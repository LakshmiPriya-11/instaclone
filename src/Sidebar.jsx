import React from 'react'

const Sidebar = () => {
  return (


    
    <div className='m-3 position-fixed'>
    <div className='d-flex flex-column gap-3 fs-5'>
        <img className='logo-text' src="/src/assets/instatext.png" alt=""/>

        <div className="home"><i className="bi bi-house-door"></i> Home</div>
        <div className="search"><i className="bi bi-search"></i> Search</div>
        <div className="explore"><i className="bi bi-compass"></i>Explore</div>
        <div className="reels"><i className="bi bi-camera-video"></i> Reels</div>
        <div className="mess"><i className="bi bi-search"></i> Messages</div>
        <div className="noti"><i className="bi bi-heart"></i> Notifications</div>
        <div className="create"><i className="bi bi-plus-square"></i> Create</div>
        <div className="pro"><i className="bi bi-person-circle"></i>Profile</div>
      </div>

      <div className='d-flex flex-column gap-3 position-fixed bottom-0 mb-3'>
        <div className="thre"><i className="bi bi-threads"></i> Threads</div>
        <div className="more"><i className="bi bi-list"></i>More</div>
      </div>
    </div>
    
  )
}

export default Sidebar