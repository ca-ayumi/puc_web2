import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, firestore } from '../../firebase';

const Principal = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if (user) {
                const docRef = firestore.collection('users').doc(user.uid);
                const doc = await docRef.get();
                if (doc.exists) {
                    setUserData(doc.data());
                }
            } else {
                navigate.push('/login');
            }
        });

        return () => unsubscribe();
    }, [navigate]);

    return (
        <div>
            <h1>Página Principal</h1>
            {userData && (
                <div>
                    <p>Nome: {userData.firstName}</p>
                    <p>Sobrenome: {userData.lastName}</p>
                    <p>Data de Nascimento: {userData.dob}</p>
                </div>
            )}
        </div>
    );
};
export default Principal;