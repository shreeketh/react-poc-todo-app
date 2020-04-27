import React from 'react';
import {
    Link
  } from "react-router-dom";

const Home = ()=>{
    return(
        <div>
              <Link to="/createtodo">Create</Link>
              <br/>
              <Link to="/todolist">List</Link>
        </div>
    )
}

export default Home;
