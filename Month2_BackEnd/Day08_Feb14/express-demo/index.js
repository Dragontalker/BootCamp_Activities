const express = require('express');

const app = express();

const courses = [
    {
        id: 1,
        name: 'course1'
    },
    {
        id: 2,
        name: 'course2'
    },
    {
        id: 3,
        name: 'course3'
    }
];

// First arguement: url, where '/' represents roots of the folder
// Second argument : a callback function with (request, response)
app.get('/', (req, res) => {
    // Defining the very first route, this is also called a route handler
    res.send('Hello World!!!!!!');
});

// Define the second route
app.get('/api/courses', (req, res) => {
    res.send(courses); 
});

// Define another route to get individual course.
app.get('/api/courses/:id', (req, res) => {
    const course = courses.find(c => c.id === parseInt(req.params.id));

    // Return 404 when object is not fund
    if (!course) res.status(404).send('The course with the given ID was not found.')

    // Otherwise, send back course to user.
    res.send(course);
})

// Definte another route to demonstarte the params object inside request.
app.get('/api/courses/:id', (req, res) => {
    res.send(req.params);
})

// Add an environment variable
const port = process.env.PORT || 3000;

// Add a port listenr
app.listen(port, () => console.log(`Listening on PORT ${port}....`));