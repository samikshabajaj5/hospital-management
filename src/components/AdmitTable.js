import React from 'react';

function AdmitTable({ admissions }) {
    return (
        <div>
            <h2>Admitted Patients</h2>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Phone</th>
                        <th>Room Number</th>
                    </tr>
                </thead>
                <tbody>
                    {admissions.map((admission, index) => (
                        <tr key={index}>
                            <td>{admission.name}</td>
                            <td>{admission.age}</td>
                            <td>{admission.phone}</td>
                            <td>{admission.roomNumber}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default AdmitTable;
