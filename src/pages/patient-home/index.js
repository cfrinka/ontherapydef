import React, { useState, useEffect } from 'react'
import { db } from '../../config/firebase'
import { collection, getDocs, query, where } from '@firebase/firestore'
import './patient-home.css'

function PatientHome() {
    const [posts, setPosts] = useState()
    const collectionRef = collection(db, 'posts')

    useEffect(() => {
        const getPosts = async () => {
            const queryTerms = query(collectionRef, where("author", "==", "my name"))
            const data = await getDocs(queryTerms);
            setPosts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };

        getPosts();
        console.log('here', posts)
    }, []);
    return (
        <div className='wrapper'>
            <h1>Seu Feed</h1>
            <div className='button'>Novo Registro</div>
            <div className='header'>
                <p className='big'>Registro</p>
                <p className='small'>Data</p>
                <p className='small'>Emoção</p>
            </div>
            <div className='patient-card'>
                {posts ? posts.map((post) => {
                    return (
                        <div className='card-content' key={post.id}>
                            <p className='big'>{post.content}</p>
                            <p className='small'>{post.createdAt}</p>
                            <p className='small'>{post.emotion}</p>
                        </div>
                    )
                }) : ''}
            </div>
        </div>
    )
}

export default PatientHome