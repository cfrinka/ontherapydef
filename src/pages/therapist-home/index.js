import React, { useState, useEffect } from 'react'
import { db } from '../../config/firebase'
import { collection, getDocs, query, where } from '@firebase/firestore'
import './therapist-home.css'

function TherapistHome() {
    const [patients, setPatients] = useState()
    const collectionRef = collection(db, 'patients')


    useEffect(() => {
        const getPatients = async () => {
            const queryTerms = query(collectionRef, where("CRP", "==", "332211"))
            const data = await getDocs(queryTerms);
            setPatients(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getPatients();
    }, []);

    return (
        <div className='wrapper'>
            <h1>Seus Pacientes</h1>
            <div className='header'>
                <p>Nome Completo</p>
                <p>Telefone</p>
                <p>Contato de Emergência</p>
            </div>
            {patients ? patients.map((patient) => {
                return (
                    <div className='patient-card' key={patient.id}>
                        <div className='card-content'>
                            <p>{patient.fullName}</p>
                            <p>{patient.phone}</p>
                            <p>{patient.emergency}</p>
                        </div>
                    </div>
                )
            }) : ''}
        </div>
    )
}

export default TherapistHome