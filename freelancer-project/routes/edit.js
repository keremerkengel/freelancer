const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

router.get('/:id', async (req, res) => {
    const project = await Project.findById(req.params.id);
    res.render('edit', { project });
});

router.put('/:id', async (req, res) => {
    const { title, description, image_url } = req.body;
    await Project.findByIdAndUpdate(req.params.id, { title, description, image_url });
    res.redirect('/');
});

module.exports = router;