import React, { useState, useEffect } from 'react';
import PatientSignUp from '../../components/PatientSignUp/index.js';
import TherapistSignUp from '../../components/TherapistSignUp/index.js';
import './new-user.css'

function NewUser() {
    const [isPatient, setIsPatient] = useState('therapist')

    return (
        <div className='signup-wrapper'>
            <h1 className='signup-header'> Cadastro</h1>
            <div className='options'>
                <div onClick={() => setIsPatient('patient')}>
                    <p>Sou Paciente</p>
                </div>
                <div onClick={() => setIsPatient('therapist')}>
                    <p>Sou Terapeuta</p>
                </div>
            </div>
            <div className='signup-component'>
                {isPatient === 'patient' && <PatientSignUp />}
                {isPatient === 'therapist' && <TherapistSignUp />}

            </div>
        </div>
    )
}

export default NewUser