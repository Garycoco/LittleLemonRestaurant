import "../styles/Main.css";
import { useState } from "react";
import { Link } from "react-router-dom";


const BookingsForm = props => {
    const [date, setDate] = useState("");
    const [guests, SetGuests] = useState(1);
    const [time, setTime] = useState(
        props.availableTimes.map((times) => <option>{times}</option>)
    );
    const [occasion, setOccasion] = useState("");

    function handleDate(e) {
        setDate(e.target.value);

        var stringify = e.target.value;
        const date = new Date(stringify);

        props.updateTimes(date);

        setTime(props.availableTimes.map((times) => <option>{times}</option>));
    }
    return (
        <div className="formContainer">
            <form style={{display: "flex", flexDirection: "column" , margin: "1rem 2rem", gap: "20px"}}>

                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" value={date} onChange={handleDate} required/>
                
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" required>
                    {time}
                </select>

                <label htmlFor="guests">Number of guests</label>
                <input type="number" value={guests.number} placeholder="1" min="1" max="10" id="guests" onChange={ e => {
                    SetGuests(e.target.value)
                }}/>

                <label htmlFor="occasion">Occasion</label>
                <select id="occasion" value={occasion} onChange={e => setOccasion(e.target.value)}>
                    <option>None</option>
                    <option>Birthday</option>
                    <option>Anniversary</option>
                    <option>Engagement</option>
                    <option>Other</option>
                </select>

                <p>Note: You cannot edit your reservation after submission. Please double-check your answer
                   before submitting your reservation request.</p>
                <Link className="submit btn" to="/confirmation" style={{maxWidth: "250px", margin: "20px auto 100px auto"}}>Make reservation</Link>
            </form>
        </div>
)}
export default BookingsForm;