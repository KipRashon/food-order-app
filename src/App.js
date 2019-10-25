import React from 'react';
import Header from './components/template/Header';
import Router from './Router';
import Footer from './components/template/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
    <main className="container"> 
      <Router
      />
    </main>
    <Footer/>
    </div>
    
  );
}

export default App;
