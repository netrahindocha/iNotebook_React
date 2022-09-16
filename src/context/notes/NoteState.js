import React, { useState } from 'react';
import noteContext from './noteContext';

const NoteState = (props) => {
    const notesInit = [
        {
            "_id": "61322f19553781a8ca8d0e06",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.509Z",
            "__v": 0
        },
        {
            "_id": "61322f19553781a8ca8d0e08",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
        },
        {
            "_id": "61322f19553781a8ca8d0e081",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
        },
        {
            "_id": "61322f19553781a8ca8d0e082",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
        },
        {
            "_id": "61322f19553781a8ca8d0e083",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
        },
        {
            "_id": "61322f19553781a8ca8d0e084",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
        },
        {
            "_id": "61322f19553781a8ca8d0e085",
            "user": "6131dc5e3e4037cd4734a066",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
        },
    ]
    const [notes, setNotes] = useState(notesInit)

    // Add a Note
    const addNote = (title, description, tag) => {
        // TODO: API Call
        console.log("Adding a new note")
        let note = {
            "_id": "61322f19553781a8ca8d0e085",
            "user": "6131dc5e3e4037cd4734a066",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2021-09-03T14:20:09.668Z",
            "__v": 0
        }
        setNotes(notes.concat(note));
    }

    // Delete a Note
    const deleteNote = (id) => {
    // TODO: API Call
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => {return note._id !== id})
    setNotes(newNotes);
    }

    // Edit a Note
    const editNote = (id, title, description, tag) => {
        
    }

    return (
        <noteContext.Provider value={{ notes, addNote, deleteNote, editNote }}>
            {props.children}
        </noteContext.Provider>
    )
}

export default NoteState;