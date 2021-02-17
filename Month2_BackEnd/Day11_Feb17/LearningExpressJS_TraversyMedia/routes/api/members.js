const express = require('express');
const router = express.Router();

const members = require('../../public/Members')

// creating an json api for /api/members
router.get('/', (req, res) => res.json(members));

// getting a single member
router.get('/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(404).json({msg: `No member with the id of ${req.params.id}.`});
    };
});

// creating a member
router.post('/', (req, res) => {
    const newMember = {
        
    };
});

module.exports = router;
