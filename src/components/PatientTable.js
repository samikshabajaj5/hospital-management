import React from 'react';

function PatientTable({ patients, onEditPatient, onDeletePatient }) {
    return (
        <div>
            <h2>Patient Records</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Condition</th>
                        <th>Phone</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {patients.map((patient, index) => (
                        <tr key={index}>
                            <td>{patient.name}</td>
                            <td>{patient.age}</td>
                            <td>{patient.condition}</td>
                            <td>{patient.phone}</td>
                            <td className="actions">
                                <button onClick={() => onEditPatient(index)}>Edit</button>
                                <button onClick={() => onDeletePatient(index)} className="delete">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default PatientTable;
