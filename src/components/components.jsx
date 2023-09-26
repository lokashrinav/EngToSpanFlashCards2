import { useState, useEffect } from 'react';
import './components.css'

function Card(props) {

    return (
        <button className='card' onClick={props.ready}>{props.data}</button>
    )
}

export default Card