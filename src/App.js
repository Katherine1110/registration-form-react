import './App.css';
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import RegistrationForm from './components/RegistrationForm/RegistrationForm';

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <RegistrationForm />
      </div>
      <Footer />
    </>
  );
}

export default App;
