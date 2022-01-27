import React, {useState} from "react";

function MakeReservation({reservations, setReservations, restaurants}) {


const [newReservation, setNewReservation] = useState({
                                                name: "",
                                                party_size: 0,
                                                restaurant_id: 0,
                                                time: "",
                                                date: ""
                                            })

const times = ["12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM", "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM", "4:00 PM", "4:30 PM", "5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM", "10:30 PM", "11:00 PM"]

const dates = ["2022-01-28", "2022-01-29", "2022-01-30","2022-01-31", "2022-02-01", "2022-02-02", "2022-02-03", "2022-02-04", "2022-02-05", "2022-02-06", "2022-02-07", "2022-02-08", "2022-02-09", "2022-02-10", "2022-02-11", "2022-02-12", "2022-02-13", "2022-02-14", "2022-02-15", "2022-02-16", "2022-02-17", "2022-02-18", "2022-02-19", "2022-02-20", "2022-02-21", "2022-02-22", "2022-02-23", "2022-02-24", "2022-02-25", "2022-02-26", "2022-02-27", "2022-02-28", "2022-03-01", "2022-03-02", "2022-03-03", "2022-03-04", "2022-03-05", "2022-03-06", "2022-03-07", "2022-03-08", "2022-03-09", "2022-03-10", "2022-03-11", "2022-03-12", "2022-03-13", "2022-03-14", "2022-03-15", "2022-03-16", "2022-03-17", "2022-03-18", "2022-03-19", "2022-03-20", "2022-03-21", "2022-03-22", "2022-03-23", "2022-03-24", "2022-03-25", "2022-03-26", "2022-03-27", "2022-03-28", "2022-03-29", "2022-03-30", "2022-03-31"]

function handleChange(event) {
    setNewReservation({
              ...newReservation,
              [event.target.name]: event.target.value
          })

}

function handleButtonClick() {
    if(newReservation.name === "" || newReservation.party_size === 0) {
        alert("Please Enter a Valid Name or Party Size")
    }
    else{
        fetch(`http://localhost:9292/reservations` , {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(newReservation)
    })
    .then((response) => response.json())
    .then((madeReservation) => {
      
      setReservations([madeReservation, ...reservations])
      alert(`Thank you for making a reservation at ${madeReservation.restaurant.restaurant_name} for ${madeReservation.time} on ${madeReservation.date}!`)
      setNewReservation({
        name: "",
        party_size: 0,
        restaurant_id: 0,
        time: "",
        date: ""
    })

    })
    }
}

return(
    <div>
<div className = "make-res">
    <select
      name = "restaurant_id"
      onChange={handleChange}
      >
        <option>Select Restaurant</option>
        {restaurants.map((restaurant) => 
          <option key={restaurant.restaurant_name} value={restaurant.id}>{restaurant.restaurant_name}</option>
        )}
      </select>
    <label>
        Name: 
        <input
          type="text"
          name="name"
          value={newReservation.name}
          onChange={handleChange}
        />
    </label>
    
    <label>
        Party Size: 
        <input
          type="number"
          name="party_size"
          value={newReservation.party_size}
          onChange={handleChange}
        />
    </label>

    <select
      name="date"
      onChange={handleChange}
      >
        <option>Select Date</option>
        {dates.map((date) => 
          <option key={date} value={date.id}>{date}</option>
        )}
      </select>

      <select
      name="time"
      onChange={handleChange}
      >
        <option>Select Time</option>
        {times.map((time) => 
          <option key={time} value={time.id}>{time}</option>
        )}
      </select>

    <button className="res-button"
        onClick={() => handleButtonClick()}
    >
      Make Reservation
      </button>
    </div>
    

    </div>

    )
}

export default MakeReservation