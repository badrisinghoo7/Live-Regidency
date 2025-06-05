const express = require('express');
const Profilerouter = express.Router();
const {Author} = require('../model/author.model');

// Create a new author
Profilerouter.post('/', async (req, res) => {
  try {
    const author = new Author(req.body);
    await author.save();
    res.status(201).json(author);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get all authors
Profilerouter.get('/getUsers', async (req, res) => {
  try {
    const authors = await Author.find();
    res.json(authors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});




module.exports = {Profilerouter};