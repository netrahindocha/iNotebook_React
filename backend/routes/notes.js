const express = require('express');
const router = express.Router();
const fetchuser = require('../middleware/fetchuser');
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');

// ROUTE 1: Get All the Notes using: GET "/api/notes/getuser". Login required
router.get('/fetchallnotes', fetchuser, async (req, res) => {
    try {
        const notes = await Note.find({ user: req.user.id });
	@@ -15,7 +15,7 @@ router.get('/fetchallnotes', fetchuser, async (req, res) => {
    }
})

// ROUTE 2: Add a new Note using: POST "/api/notes/addnote". Login required
router.post('/addnote', fetchuser, [
    body('title', 'Enter a valid title').isLength({ min: 3 }),
    body('description', 'Description must be atleast 5 characters').isLength({ min: 5 }),], async (req, res) => {
	@@ -40,5 +40,27 @@ router.post('/addnote', fetchuser, [
            res.status(500).send("Internal Server Error");
        }
    })

// ROUTE 3: Update an existing Note using: POST "/api/notes/updatenote". Login required
router.put('/updatenote/:id', fetchuser, async (req, res) => {
    const {title, description, tag} = req.body;
    // Create a newNote object
    const newNote  = {};
    if(title){newNote.title = title};
    if(description){newNote.description = description};
    if(tag){newNote.tag = tag};

    // Find the note to be updated and update it
    let note = await Note.findById(req.params.id);
    if(!note){return res.status(404).send("Not Found")}

    if(note.user.toString() !== req.user.id){
        return res.status(401).send("Not Allowed");
    }

    note = await Note.findByIdAndUpdate(req.params.id, {$set: newNote}, {new:true})
    res.json({note});

    })