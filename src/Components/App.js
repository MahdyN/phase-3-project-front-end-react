import React, { useState, useEffect } from 'react';
import '../App.css';
import Header from './Header';
import NavBar from './NavBar';
import MakeReservation from "./MakeReservation";
import SearchReservations from "./SearchReservations";
import About from "./About";
import {Route, Routes} from 'react-router-dom'


function App() {

  const [reservations, setReservations] = useState([])
  const [restaurants, setRestaurants] = useState([])

    useEffect(() => {
        fetch('http://localhost:9292/reservations')
        .then((response) => response.json())
        .then((reservationData) => {
            setReservations(reservationData)
        })

        fetch('http://localhost:9292/restaurants')
        .then((response) => response.json())
        .then((restaurantData) => {
          console.log(restaurantData)
            setRestaurants(restaurantData)
        })


    }, [reservations])

  return (
    <div className="App">
      <Header />
      <NavBar />

      <Routes>
        <Route path='/makereservation' element={<MakeReservation reservations={reservations} setReservations={setReservations} restaurants = {restaurants} />} />
        <Route path='/searchreservation' element={<SearchReservations reservations={reservations} setReservations={setReservations} />} />
        <Route path='/about' element={ <About />} />
      </Routes>
      
    </div>
  );
}

export default App;
