import { useState } from "react";
import React from "react";
 const User=({name})=>{
    const[count,setcount]=useState(0);
    const [count2]=useState(1);

    return (
        <div className="userclass">
            <h1>count={count}</h1>
            <h1>count2= {count}</h1>
            <h2>Name: {name}</h2>
            <h3>location: Mumbai</h3>
            <h4>Contact: rujula.yadav22@gmail.com</h4>
        </div>
    );
 };
 export default User;