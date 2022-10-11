import React from 'react'
import { useState } from 'react';

export const ManageData = () => {
    let someData = 10;

    const [number, setNumber] = useState(15);

    return (
        <>
            <div>Valor {number}</div>
            <button onClick={() => setNumber(25)}>Mudar Valor</button>
        </>
    )
}