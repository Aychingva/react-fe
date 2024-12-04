import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { api } from '../api';
import { Link } from 'react-router';

function Detail() {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await api.get(`users/${id}`);
        setUser(response.data);
      } catch (error) {
        console.error("Error fetching user details:", error);
      }
    };

    fetchUser();
  }, [id]);

  return (
    <div className="max-w-lg mx-auto mt-8 p-6  bg-blue-50 shadow-lg rounded-xl">
      <h1 className="text-3xl font-semibold text-gray-900 mb-4">{user.name}</h1>
      <p className="text-lg text-gray-600 mb-6">{user.email}</p>
      <div className="flex space-x-6">
        <Link 
          to={`/posts/${id}`} 
          className="bg-purple-500 text-white py-2 px-4 rounded-lg hover:bg-purple-600 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Posts
        </Link>
        <Link 
          to={`/todo/${id}`} 
          className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300 ease-in-out transform hover:scale-105"
        >
          Todo
        </Link>
      </div>
    </div>
  );
}

export default Detail;
