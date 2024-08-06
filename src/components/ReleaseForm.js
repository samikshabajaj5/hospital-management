import React, { useState } from 'react';

function ReleaseForm({ onReleasePatient }) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onReleasePatient({ name, age, phone });
        setName('');
        setAge('');
        setPhone('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Release Patient</h2>
            <div>
                <label htmlFor="releaseName">Name:</label>
                <input type="text" id="releaseName" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="releaseAge">Age:</label>
                <input type="number" id="releaseAge" value={age} onChange={(e) => setAge(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="releasePhone">Phone:</label>
                <input type="text" id="releasePhone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <button type="submit">Release</button>
        </form>
    );
}

export default ReleaseForm;
