import React, { useEffect, useState } from "react";

const Suggestions = () => {
  const [profile, setProfile] = useState(null);
  const [suggestion, setSuggestion] = useState([]);

  useEffect(()=>{
    fetch('http://localhost:3000/profile')
    .then(data=>data.json())
    .then(data=>setProfile(data))
    .catch(err=>console.log(err))
  },[])

    useEffect(()=>{
    fetch('http://localhost:3000/suggestion')
    .then(data=>data.json())
    .then(data=>setSuggestion(data))
    .catch(err=>console.log(err))
  },[])
  return (
    <div>
      <div className="suggestions w-85 m-4">
        {profile ?
      <div className="d-flex">
        <img
          className="dp rounded-circle"
          src={profile.profile_pic}
          alt=""
          
        />
        <h5 className="">{profile.username}</h5>
        <small className="ms-auto text-primary">Switch</small>
      </div> : <p>Loading</p>}


      <div className="d-flex ">
        <p>Suggested for you</p>
        <b className="ms-auto">See All</b>
      </div>


      {
            suggestion.length >0 ?
            (
                <div className=''>
                    {suggestion.map((sugg)=>(
                      <div className='' key={sugg.id}>
                        <div className='d-flex'>
                            <img className='dp rounded-circle' src={sugg.profile_pic} alt="" />
                        <h5 className="">{sugg.username}</h5>
                        <p className="text-primary ms-auto">Follow</p>
                        </div>
                      
                      
                      </div>  
                    ))}
                </div>
            ) :
            (
                <div>Loading </div>
            )
        }
      </div>
      
    </div>
  );
};

export default Suggestions;
//1.17