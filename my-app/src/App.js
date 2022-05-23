import React from 'react';
import Footer from './Layout/Footer';
import Header from './Layout/Header';
import Main from './Layout/Main';
import "./App.css"

function App(props) {
  return (
    <>
      <Header />
      <Main/>
      <Footer />
    </>
  );
}

export default App;