import React from 'react';
import { Navbar, Header, Squares, About, Numbers, Members, Catches, Contact, Cottage, Actions, Footer } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='foto_bg'>
        <Navbar />
        <Header />
      </div>
      <Squares />
      <About />
      <Numbers />
      <Members />
      <Catches /> 
      <Cottage />
      <Actions />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
