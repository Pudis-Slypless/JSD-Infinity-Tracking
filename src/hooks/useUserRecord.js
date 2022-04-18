import { useEffect, useState} from 'react';
import { getRecords } from '../api/API';

export const useUserRecord = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await getRecords();
            console.log(response.status);
            console.log(response.data);
            
            if (response.status < 300) {
                setPosts(response.data);
            } else {
                alert('Can not to connect')
            }
            
        })();        
    }, []);

    return [posts, setPosts];
}