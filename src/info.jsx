
import { useState, useEffect } from "react";
import axios from "axios";
import './info.css'

export function Info (){

    const [data, setData]=useState([])
    const video = `https://www.scorebat.com/video-api/v3/feed/?token=MjA2MzVfMTY3Mzg2Njk1OF8yNzRhY2IyOWI3ZGNjZWY5YmNjMTIwOWI1NzAyNDgxMTlmNDk2MjQ3` 

useEffect(()=>{
    axios({
        method:"GET",
        url: video
    }).then(res=>{
      console.log(res.data);
      setData(res.data.response)
    }).catch(error=>console.log(error))
  
}, [])
    

   
    return(
<div className="Highlights">
    
<h1 className='title'>Football Total</h1>
<h2 className="title"> Highlights</h2>

<div className="container">

{data.map((item)=>(
<div  className="card" key={item.title} onClick={()=>window.open(item.matchviewUrl)}>
  <div className="imgDiv">
  <img src={item.thumbnail ? item.thumbnail : "Donde esta la imagen"} className="" alt="..."  />
  </div>
  <div className="card-body">
  <h4 className="competitionName">{item.competition}</h4>
  <h5 className="match">{item.title}</h5>
   
  </div>
</div>
))}

</div>
</div>


    )
}