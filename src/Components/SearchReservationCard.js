import React from "react";

function SearchReservationCard({reservation, handleCancel}) {
    return(
        <li className="card">
        <h3>{reservation.name}</h3>
        <h4>{reservation.restaurant.restaurant_name}</h4>
        <p> {reservation.restaurant.address} <br /> {reservation.restaurant.number} </p>
        <p>{reservation.date} <br />  {reservation.time}<br/> Party Size: {reservation.party_size}</p>
        <button onClick={() => handleCancel(reservation.id, reservation.name, reservation.restaurant.restaurant_name, reservation.date, reservation.time)} > Cancel Reservation </button>
      </li>
    )
}

export default SearchReservationCard