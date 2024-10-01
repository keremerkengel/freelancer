const express = require('express');
const router = express.Router();
const Project = require('../models/Project');

router.get('/', async (req, res) => {
    try {
        const projects = await Project.find({});
        res.render('index', { projects });
    } catch (err) {
        console.error(err);
    }
});

module.exports = router;