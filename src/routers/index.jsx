import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Detail from "../detail";
import Users from "../users";
import Post from "../post";
import Todo from "../todos";

const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Users />} />
                <Route path="/users/:id" element={<Detail />} />
                <Route path="/posts/:id" element={<Post/>}/>
                <Route path="/todo/:id" element={<Todo/>}/>

                
                
                
            </Routes>
        </Router>
    );
};

export default AppRouter;
