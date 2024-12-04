import React from 'react';
import { Link } from 'react-router-dom';

function Usercard({ user }) {
  return (
    <Link to={`/users/${user.id}`}>
      <div className="flex flex-col border border-gray-300 bg-violet-500 rounded-lg p-4 w-64 shadow-md hover:shadow-lg transition-shadow duration-300">
        <h3 className="text-xl font-semibold  mb-2">{user.name}</h3>
        <p className=" mb-1">{user.email}</p>
        <p>{user.phone}</p>
      </div>
    </Link>
  );
}

export default Usercard;
