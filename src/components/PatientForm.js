import React, { useState, useEffect } from 'react';

function PatientForm({ onAddOrEditPatient, editPatient }) {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [condition, setCondition] = useState('');
    const [phone, setPhone] = useState('');

    useEffect(() => {
        if (editPatient) {
            setName(editPatient.name);
            setAge(editPatient.age);
            setCondition(editPatient.condition);
            setPhone(editPatient.phone);
        }
    }, [editPatient]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddOrEditPatient({ name, age, condition, phone });
        setName('');
        setAge('');
        setCondition('');
        setPhone('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Add/Edit Patient</h2>
            <div>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="age">Age:</label>
                <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="condition">Condition:</label>
                <input type="text" id="condition" value={condition} onChange={(e) => setCondition(e.target.value)} required />
            </div>
            <div>
                <label htmlFor="phone">Phone:</label>
                <input type="text" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} required />
            </div>
            <button type="submit">Save</button>
        </form>
    );
}

export default PatientForm;
