import React, { useState } from 'react';

function AdmitForm({ patients, onAdmitPatient }) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');
    const [roomNumber, setRoomNumber] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const patient = patients.find(p => p.name === name && p.age.toString() === age && p.phone === phone);
        if (patient) {
            onAdmitPatient({ name, age, phone, roomNumber });
            setName('');
            setAge('');
            setPhone('');
            setRoomNumber('');
        } else {
            alert('Patient not found');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Admit Patient</h2>
            <div>
                <label htmlFor="admitName">Name:</label>
                <input type="text" id="admitName" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="admitAge">Age:</label>
                <input type="number" id="admitAge" value={age} onChange={(e) => setAge(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="admitPhone">Phone:</label>
                <input type="text" id="admitPhone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="admitRoomNumber">Room Number:</label>
                <input type="number" id="admitRoomNumber" value={roomNumber} onChange={(e) => setRoomNumber(e.target.value)} required />
            </div>
            <button type="submit">Admit</button>
        </form>
    );
}

export default AdmitForm;
