import React, { useState } from 'react'
import { db } from '../../config/firebase'
import { collection, addDoc } from '@firebase/firestore'


function NewPostForm() {
    const [emotion, setEmotion] = useState('')
    const [content, setContent] = useState('')
    const collectionRef = collection(db, "posts")
    const date = new Date

    const handleSubmit = async (emotion, content) => {
        const post = {
            emotion: emotion,
            content: content,
            author: 'Neto',
            createdAt: date.toLocaleString()
        }
        await addDoc(collectionRef, post)
        console.log('here', post)
    }

    return (
        <>
            <h3>Como se sente hoje?</h3>
            <input type="text" onChange={(e) => setEmotion(e.target.value)} />
            <h3>Explique melhor</h3>
            <input type='text' onChange={(e) => setContent(e.target.value)} />
            <div className='button' onClick={() => handleSubmit(emotion, content)}>Enviar</div>
        </>

    )
}

export default NewPostForm