import {useState} from 'react';

function Course(props){

  //let purchased =false;
  const [purchased,setpurchased]=useState(false);
   function  BuyCourse(){
       console.log("purchased");
       setpurchased(true);
   }
    return(
        <div className="card">
            <img src={props.image} alt=""/>
            <h3>{props.name}</h3>
            <p> {props.price}</p>
            <button onClick={BuyCourse}>Buy Now </button>
            <button onClick={()=>props.delete(props.id)}>Delete</button>
            <p>{purchased ? "Already purchased ": "Get It Now"}</p>

        </div>
    );
  
  
   
}


export default Course