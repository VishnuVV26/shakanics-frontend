import React, { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/homepage";
import LoginPage from "./pages/login";
import SignUpPage from "./pages/signup";
import { ToastContainer } from "react-toastify";

const App: React.FC = () => {
  const [authenticated, setAuthenticated] = useState<boolean | null>(false);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
    }
  }, [authenticated]);

  return (
    <>
      <ToastContainer />
      <Layout>
        <Routes>
          <Route
            path="/login"
            element={
              authenticated === true ? (
                <Navigate to="/" />
              ) : (
                <LoginPage onLoginSuccess={() => setAuthenticated(true)} />
              )
            }
          />

          <Route
            path="/"
            element={authenticated ? <HomePage /> : <Navigate to="/login" />}
          />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
