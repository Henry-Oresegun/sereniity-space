import React from 'react';
import './App.css';

import Navbar  from './components/Navbar/Navbar'
import Header from './container/Header/Header'
import Gallery from './container/Gallery/Gallery'
import Footer from './container/Footer/Footer'
import Rooms from  './container/Rooms/Rooms'
const App = () => (
  <div>
     <Navbar />
     <Header />
     <Rooms />
     <Gallery />
     <Footer /> 
  </div>
);

export default App;
  