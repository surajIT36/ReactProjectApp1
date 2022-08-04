// import Card from "react-bootstrap/Card";
import React, { useState } from "react";
import axios from "axios";
import ApiCard from "./ApiCard";


const FetchAPIData = () => {
const [teams, setteams] = useState([]);
const baseURL = "https://jsonplaceholder.typicode.com/posts";
axios.get(baseURL).then((response) => {
  setteams(response.data); 
});


return(
  <>
  
    {
      teams.map((value) =>{
        return(
          <React.Fragment>
            <ApiCard ti={value.title}  _id={value.id} bo={value.body}/>    
          </React.Fragment>
             
        );
      }) 
    }

  </> 
)
  }
  
export default FetchAPIData;