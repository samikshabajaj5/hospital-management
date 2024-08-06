import React, { useState } from 'react';
import PatientForm from './components/PatientForm';
import AdmitForm from './components/AdmitForm';
import AppointmentForm from './components/AppointmentForm';
import ReleaseForm from './components/ReleaseForm';
import PatientTable from './components/PatientTable';
import AdmitTable from './components/AdmitTable';
import AppointmentTable from './components/AppointmentTable';
import './styles.css';

function App() {
    const [patients, setPatients] = useState([]);
    const [admissions, setAdmissions] = useState([]);
    const [appointments, setAppointments] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    const handleAddOrEditPatient = (patient) => {
        if (editIndex === null) {
            setPatients([...patients, { id: patients.length + 1, ...patient }]);
        } else {
            const updatedPatients = patients.map((p, index) => 
                index === editIndex ? { ...p, ...patient } : p
            );
            setPatients(updatedPatients);
            setEditIndex(null);
        }
    };

    const handleAdmitPatient = (admission) => {
        setAdmissions([...admissions, admission]);
    };

    const handleBookAppointment = (appointment) => {
        setAppointments([...appointments, appointment]);
    };

    const handleReleasePatient = (releaseDetails) => {
        setAdmissions(admissions.filter(a => 
            !(a.name === releaseDetails.name && a.age === releaseDetails.age && a.phone === releaseDetails.phone)
        ));
    };

    const handleEditPatient = (index) => {
        setEditIndex(index);
    };

    const handleDeletePatient = (index) => {
        setPatients(patients.filter((_, i) => i !== index));
    };

    return (
        <div className="container">
            <h1>Hospital Management System</h1>
            <div className="form-container">
                <PatientForm 
                    onAddOrEditPatient={handleAddOrEditPatient} 
                    editPatient={patients[editIndex]} 
                />
                <AdmitForm 
                    patients={patients} 
                    onAdmitPatient={handleAdmitPatient} 
                />
                <AppointmentForm 
                    patients={patients} 
                    onBookAppointment={handleBookAppointment} 
                />
                <ReleaseForm 
                    onReleasePatient={handleReleasePatient} 
                />
            </div>
            <PatientTable 
                patients={patients} 
                onEditPatient={handleEditPatient} 
                onDeletePatient={handleDeletePatient} 
            />
            <AdmitTable 
                admissions={admissions} 
            />
            <AppointmentTable 
                appointments={appointments} 
            />
        </div>
    );
}

export default App;
