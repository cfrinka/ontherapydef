import React, { useState } from 'react'
import './PatientSignUp.css'
import { addDoc, collection } from '@firebase/firestore'
import { db } from '../../config/firebase'

function PatientSignUp() {
    const [fullName, setFullName] = useState()
    const [phone, setPhone] = useState()
    const [address, setAddress] = useState()
    const [emergency, setEmergency] = useState()
    const [CRP, setCRP] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const collectionRef = collection(db, 'patients')

    const handleSignUp = async () => {
        const signUpObject = {
            fullName,
            phone,
            address,
            emergency,
            CRP,
            email,
            password
        }
        await addDoc(collectionRef, signUpObject)

    }



    return (
        <div className='wrapper'>
            <h1>Preencha seus dados</h1>
            <input type='text' placeholder='Nome Completo' onChange={(e) => setFullName(e.target.value)} />
            <input type='tel' placeholder='Telefone com DDD' onChange={(e) => setPhone(e.target.value)} />
            <input type='tel' placeholder='Contato de Emergencia' onChange={(e) => setEmergency(e.target.value)} />
            <input type='text' placeholder='Endereço' onChange={(e) => setAddress(e.target.value)} />
            <input type='text' placeholder='CRP do Terapeuta' onChange={(e) => setCRP(e.target.value)} />
            <input type='email' placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
            <input type='password' placeholder='Senha' onChange={(e) => setPassword(e.target.value)} />
            <div className='submit-button' onClick={() => handleSignUp()}>Enviar</div>
        </div>
    )
}

export default PatientSignUp