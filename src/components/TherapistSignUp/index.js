import React, { useState } from 'react'
import './TherapistSignUp.css'
import { addDoc, collection } from '@firebase/firestore'
import { db } from '../../config/firebase'

function TherapistSignUp() {
    const [fullName, setFullName] = useState()
    const [phone, setPhone] = useState()
    const [address, setAddress] = useState()
    const [crp, setCrp] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const collectionRef = collection(db, 'therapists')

    const handleSignUp = async () => {
        const signUpObject = {
            fullName,
            phone,
            address,
            crp,
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
            <input type='text' placeholder='Endereço Comercial' onChange={(e) => setAddress(e.target.value)} />
            <input type='text' placeholder='CRP' onChange={(e) => setCrp(e.target.value)} />
            <input type='email' placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
            <input type='password' placeholder='Senha' onChange={(e) => setPassword(e.target.value)} />
            <div className='submit-button' onClick={() => handleSignUp()}>Enviar</div>
        </div>
    )
}

export default TherapistSignUp