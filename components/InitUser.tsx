import { useUser } from '@clerk/clerk-expo';
import { useEffect } from 'react';
import axios from 'axios';

export default function InitUser() {
    const { user } = useUser();

    useEffect(() => {
        if (user?.id) {
            axios.post('http://192.168.0.2:5001/api/user/init', {
                userId: user.id,
            })
                .then(response => {
                    console.log('User initialized:', response.data);
                })
                .catch(error => {
                    console.error('Fehler beim Initialisieren des Users:', error);
                });
        }
    }, [user?.id]);

    return null;
}
