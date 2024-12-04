

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import {getTodo } from '../services/post'

function Todo() {
    const {id}=useParams()
    const [todo,settodo]=useState({})
    useEffect(()=>{
        getTodo(id)
        .then(data=>settodo(data))
        .catch(err=>console.log(err))

    
    },[id])


    if (!todo) {
        return <div>Loading...</div>;
    }
    return (
        <div className="max-w-3xl  mt-8 mx-auto p-6  bg-purple-500 rounded-lg shadow-md">
          <div className="mb-6 ">
          <h2>Title:{todo.title}</h2>
          <p>Completed:{todo.completed ? "True" : "False"}</p>
          </div>
        </div>
      );
}

export default Todo
