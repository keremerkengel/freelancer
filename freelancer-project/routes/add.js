const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

router.get('/', (req, res) => {
    res.render('add');
});

router.post('/', async (req, res) => {
    const { title, description, image_url } = req.body;
    const newProject = new Project({ title, description, image_url });
    await newProject.save();
    res.redirect('/');
});

module.exports = router;