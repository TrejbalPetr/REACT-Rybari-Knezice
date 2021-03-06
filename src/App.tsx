import React from 'react';
import { Navbar, Scroll, Header, Squares, About, Numbers, Members, Catches, Cottage, Events, Footer } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='foto_bg'>
        <Navbar />
        <Header />
        <Scroll />
      </div>
      <Squares />
      <About />
      <Numbers />
      <Members />
      <Events />
      <Catches /> 
      <Cottage />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
}

export default App;
