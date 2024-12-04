import React, { useEffect, useState } from 'react'
import { api } from '../api'
import Usercard from '../usercard'

function Users() {
    const [users,setusers]=useState([])

    useEffect(()=>{
        const fetchusers=async()=>{
            try{
                const response=await api.get("/users")
                // console.log(response.data)
                setusers(response.data)
            }catch(error){
                console.log("error",error)

            }
        }
        fetchusers();
    },[])
  return (
    <div>
        <h1 className="text-3xl font-semibold text-center text-gray-800 mt-6 mb-6">Cards</h1>
        <div className="flex flex-wrap justify-center gap-6 p-6">
    
    
         
        {users.map((user)=>(
            
            <Usercard key={user.id} user={user} />
        ))}

    </div>
  
    </div>
  )  
    
}

export default Users