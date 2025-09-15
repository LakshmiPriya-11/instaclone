import React, { useEffect, useState } from 'react';

const Stories = () => {
  const [stories, setStories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/story')
      .then((res) => res.json())
      .then((data) => setStories(data))
      .catch((err) => console.log(err));
  }, []); 

  return (
    <div className="story d-flex">
      {stories.length > 0 ? (
        stories.map((story) => (
          <div key={story.id} className='mx-3'>
            <div className='gradient-border'>
              <img src={story.user.profile_pic} className='rounded-circle story-dp' alt={story.user?.username || "User"} />
            </div>
            <p className='text-truncate' style={{width:"50px"}}>{story.user.username}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Stories;
