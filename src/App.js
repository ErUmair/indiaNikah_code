import React, { useState } from 'react';
import './App.css';
import Header from './components/layout/Header';
import Guidelines from './components/main/Guidelines';
import { BrowserRouter, Route, Routes, Redirect } from 'react-router-dom'
import './style/app.scss'
import ProfileCreation from './components/main/profile_creation/ProfileCreation';
// import AllForms from './components/main/AllForms'
import Setps from './components/ant/Steps';
// import LoginForm from './components/login/Login';
import LoginScreen from './components/profile_creation/LoginScreen';

function App() {


  const [data, setData] = useState({
    phone: null,
    submitFormData: () => {},
    OTPKey:''
  });

  console.log(data);


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/guidelines" element={<Guidelines />} />
          <Route path="/profile_creation" element={<ProfileCreation />} />
          <Route path="/" element={<Setps setData={setData} />} />
          <Route path="/login" element={<LoginScreen data={data} />} />
          {/* <Route render={() => <Redirect to="/" />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;
