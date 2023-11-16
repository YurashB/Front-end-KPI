import React from 'react';

const TextList = ({texts}) => {
    return (
        <div>
            {texts.map(text => (
                <p>{text}</p>
            ))}

        </div>
    );
};

export default TextList;