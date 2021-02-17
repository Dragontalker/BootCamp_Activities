// creating an json api for /api/members
app.get('/api/members', (req, res) => {
    res.json(members);
});

// getting a single member
app.get('/api/members/:id', (req, res) => {
    const found = members.some(member => member.id === parseInt(req.params.id));

    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    } else {
        res.status(404).json({msg: `No member with the id of ${req.params.id}.`});
    };
});
// ===