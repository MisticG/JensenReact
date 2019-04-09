import React from 'react'
import { View } from './layout';

interface Props {
    view: View
}

export default function DetailView(props: Props) {

    const imageSource = `../../assets/${props.view}.jpg`

    return (
       <div>
           <img src={imageSource}></img>
       </div>
    )
}