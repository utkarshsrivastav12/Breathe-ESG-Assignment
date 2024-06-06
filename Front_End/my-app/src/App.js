// App.js
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';

const SignUp = lazy(() => import('./components/SignUP/SignUp.js'));
const Login = lazy(() => import('./components/login/login.js'));
const Home = lazy(() => import('./components/Home/Home.js'));

const NotFound = () => <h2>Page Not Found</h2>;

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
