import React, { useState } from 'react';

function AppointmentForm({ patients, onBookAppointment }) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const patient = patients.find(p => p.name === name && p.age.toString() === age && p.phone === phone);
        if (patient) {
            onBookAppointment({ name, age, phone, date, time });
            setName('');
            setAge('');
            setPhone('');
            setDate('');
            setTime('');
        } else {
            alert('Patient not found');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Book Appointment</h2>
            <div>
                <label htmlFor="appointmentName">Name:</label>
                <input type="text" id="appointmentName" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="appointmentAge">Age:</label>
                <input type="number" id="appointmentAge" value={age} onChange={(e) => setAge(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="appointmentPhone">Phone:</label>
                <input type="text" id="appointmentPhone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="appointmentDate">Date:</label>
                <input type="date" id="appointmentDate" value={date} onChange={(e) => setDate(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="appointmentTime">Time:</label>
                <input type="time" id="appointmentTime" value={time} onChange={(e) => setTime(e.target.value)} required />
            </div>
            <button type="submit">Book</button>
        </form>
    );
}

export default AppointmentForm;
