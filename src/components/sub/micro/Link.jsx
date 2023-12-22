import React from 'react';

function Link(props) {
    const { image, text, url } = props;

    const handleClick = () => {
        window.open(url, '_blank');
    };

    return (
        <div className='flex gap-2'>
            {image && <img src={image} alt="" onClick={handleClick} className='w-6 h-6 cursor-pointer'/>}
            <p onClick={handleClick} className='cursor-pointer'>{text}</p>
        </div>
    );
}

export default Link;
