import React from 'react'
import {useState} from 'react'

export const ListRander = () => {
    const [list, setList] = useState(['Paulo', 'Ana', 'Gabi']);
  return (
    <ul>
        {list.map((item) => (
            <li>{item}</li>
        ))}
    </ul>
  )
}