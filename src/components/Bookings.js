import React from "react";
import BookingsForm from "./BookingsForm";
import "../styles/Main.css";
import {useReducer} from 'react';
import { fetchAPI, submitAPI } from "../bookingsAPI";
import image from "../assets/images/restaurant.jpg";

export default function Bookings() {
    function updateTimes(date) {
        return (
            fetchAPI(date)
        );
    }
    function submitForm(formData) {
        submitAPI(formData)
    }

    const output = fetchAPI(new Date());

    const [availableTimes, dispatch] = useReducer(updateTimes, output);
    return (
        <>
            <div style={{ height: "90px" }}></div>
            <div className="formPage">
                <img src={image} style={{maxHeight: "300px", width: "100%", objectFit: "cover", objectPosition: "center"}} alt="food"></img>
                <h2>Book a table</h2>
                <BookingsForm availableTimes={availableTimes} updateTimes={dispatch} submitForm={submitForm}/>
            </div>
        </>
        );
}