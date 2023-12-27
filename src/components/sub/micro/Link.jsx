function Link(props) {
    const { image, text, url } = props;

    const handleClick = () => {
        window.open(url, '_blank');
    };

    return (
        <div className='flex gap-2'>
            {image && <img src={image} alt="" onClick={handleClick} className='w-5 h-5 cursor-pointer bg-transparent'/>}
            <p onClick={handleClick} className='cursor-pointer flex items-center text-sm'>{text}</p>
        </div>
    );
}

export default Link;
