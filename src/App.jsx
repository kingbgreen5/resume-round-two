import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Link, Outlet, useLocation} from 'react-router-dom';
import Nav from './components/Nav';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <>

    <Header />
      <Nav />
      <Outlet />
      <br />
      <br />
      <hr />
      <Footer />

    </>

  );
}

export default App;





