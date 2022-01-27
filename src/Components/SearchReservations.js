import React, {useState} from "react";
import SearchReservationCard from "./SearchReservationCard";

function SearchReservations({reservations, setReservations}) {

    const [search, setSearch] = useState("")
    const [count, setCount] = useState(0)

    function handleChange(event) {
        setSearch(event.target.value)
    }

    function handleCancel(id, name, restaurant, date, time) {
      if(count < 1) {
        alert(`${name}, you are about to cancel your reservation at ${restaurant} for ${time} on ${date}, confirm this is your intent by clicking the button again, availability of this reservation again is not guaranteed `)
        setCount(count+1)
      }
      else{
      alert(`${name}, you have successfully cancelled your reservation at ${restaurant} for ${time} on ${date}`)
      fetch(`http://localhost:9292/reservations/${id}` , {
        method: "DELETE"
        })
        .then((response) => response.json())
        .then(() => {
        const updatedReservationList = reservations.filter((reservation) =>{return reservation.id !== id})
        setReservations(updatedReservationList)
        setCount(0)
      }
    )}
  }

    const matchingReservations = reservations.filter((reservation) => {
        if(search.length === 0) {
          return false
        }
        else {return reservation.name.toLowerCase().includes(search.toLowerCase())}
      })

    return(
    <div className="search">
    <form>
        <label>
            Search For Reservation By Name:
                <input 
                type="text" 
                name="name"
                value={search} 
                onChange={handleChange}
                />
        </label>
    </form>
    <ul className="cards">
      {matchingReservations.map((reservation) => (
        <SearchReservationCard key={reservation.id} reservation={reservation} handleCancel={handleCancel} />
      ))}
    </ul>
    </div>
    )
}

export default SearchReservations