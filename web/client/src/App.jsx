import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./pages/Home";
import MainLayout from "./layouts/MainLayout";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import AuthLayout from "./layouts/AuthLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <MainLayout>
                <Home />
              </MainLayout>
            }
          />
          <Route
            path="/auth/login"
            element={
              <AuthLayout>
                <Login />
              </AuthLayout>
            }
          />
          <Route
            path="/auth/signup"
            element={
              <AuthLayout>
                <SignUp />
              </AuthLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
