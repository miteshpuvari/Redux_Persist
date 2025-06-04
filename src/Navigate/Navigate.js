import React from "react";
import { Route, Routes } from "react-router";
import Home from "../Pages/Home/Home";
import LoginPage from "../Pages/Login/Login";

const Navigate = () => {
    return (
        <Routes>
            <Route index element={<LoginPage/>} />
            <Route path="home" element={<Home />} />
        </Routes>

    )
}

export default Navigate;