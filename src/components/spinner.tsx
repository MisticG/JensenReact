import React,{ CSSProperties } from 'react';
import { CircleLoader } from 'react-spinners';
import { centeredContent, fullScreen } from '../css';

export default function() {
    return (
        <div style={{ ...centeredContent, ...fullScreen }}>
            <CircleLoader color="white" size={1.6} sizeUnit="em"/>
        </div>
    )
}

const appearance: CSSProperties = {
    color: 'white',
    fontSize: '1.5em'
}