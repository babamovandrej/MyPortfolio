import React from 'react';
import Video from '../media/background.mp4';

const Background = () => {
    return (
        <div className='Background'>
            <video autoPlay muted loop playsinline>
                <source src={Video} type='video/mp4'/>
            </video>
        </div>
    )
}

export default Background