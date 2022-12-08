import React, { useEffect, useState } from "react";
import Review from "../components/Review"

function Home() {

    const [data, setData] = useState([]);

    useEffect(() => {
      // auto-login
      fetch("/coffees").then((res) => {
        if (res.ok) {
          res.json().then((data) => setData(data))
        }
      });
    }, [])
    console.log(data)

    return (
        <>
       <div className="projects">
           <div className="title">
               <h2 className="projo">Welcome to Coffee-cafe</h2>
           </div>
        {data.map((data) =>{
            return(
                <div className="box">
               <div className="card">
                   <img className="avatar" src={data.coffee_image} alt="coffee"></img>
                   <div className="container">
                       <h4><b>{data.coffee_name}</b></h4>
                       <p>{data.description}</p>
                       <p className="price">{data.price}</p>
                       {/* <p>{data.category}</p> */}
                       <button className="btn1" id="btn1">Add to Cart</button>
                   </div>
               </div>
           </div>
            )
        })}
           
       </div>
       < Review />
       </>

       
    )
}



export default Home;