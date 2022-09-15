import React, { useState } from 'react';
import noteContext from './noteContext';

const NoteState = (props) => {
    
    const data = {
        "name": "Netra",
        "age": "22 yrs"
    }

    const [state, setState] = useState(data)
    const update = () => {
        setTimeout(() => {
            setState({
                "name": "Nitara",
                "age": "23 years"
            })
        }, 1000);
    }
    return (
        <noteContext.Provider value={{state, update}}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;