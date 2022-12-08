import React, {useState} from 'react'
import Axios from 'axios'; 

function Review() {
  const url = "/reviews"
  const [data, setData] = useState({
    review: ""

  }) 

function submit(e){
    e.preventDefault();
    Axios.post(url,{
        review: data.review,
    })
    .then(res =>{
        console.log(res.data)
    })
}

  
  function handle(e){
    const newdata={...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
    console.log(data)
  }
    return(
        <div>
            <form onSubmit={(e) => submit(e)}>
                <input onChange={(e)=>handle(e)} id="review" defaultvalue={data.review} placeholder="review" type="text"></input>
                <button>submit review</button>
            </form>
        </div>
    )
}

export default Review