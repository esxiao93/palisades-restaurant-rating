import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Restaurants from "./components/Restaurants/Restaurants"
import Restaurant from "./components/Restaurant/Restaurant"
// import { ChakraProvider } from '@chakra-ui/react';
// import NavBar from './components/NavBar';
// import RestaurantPage from './components/RestaurantPage';

function App() {

  return(
    <>
      <Routes>
        <Route exact path="/" element={<Restaurants />} />
        <Route exact path="/restaurants/:slug" element={<Restaurant />} />
      </Routes>
    </>
  )
}

export default App;


// <ChakraProvider>
// <NavBar />
// <Routes>
//   <Route exact path='/' element={<RestaurantPage restaurants={restaurants} />} />
//   <Route path=''/>
// </Routes>
// </ChakraProvider>