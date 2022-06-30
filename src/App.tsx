import React from 'react';
import { Navbar, Header, About, Catches, Contact, Footer } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='foto_bg'>
        <Navbar />
        <Header />
      </div>
      <About />
      <Catches />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
