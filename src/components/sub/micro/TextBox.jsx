import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';

function TextBox(props) {
    const [text, setText] = useState(props.text);

    const handleChange = (content) => {
        console.log(content)
        setText(content);
        // Save the value to Firestore using the set function
        // firestore.set('collection/doc', { text: value });
    };

    return (
        <div>
            <h1>{props.title}</h1>
            <ReactQuill value={text} onChange={handleChange} />
        </div>
    );
}

export default TextBox;