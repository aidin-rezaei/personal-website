'use client'
import React,{useState} from 'react';

const Hi = () => {
    const [likes, setLikes] = useState(0);
    return ( 
        <p >{likes}</p>
     );
}
 
export default Hi;