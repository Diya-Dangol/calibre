import React from 'react';
// import {useHistory} from 'react-router-dom';
import '../css/button.css';

export default function Button(props) {
    
    return (
        <button>
            {props.name}
        </button>
    )
}
