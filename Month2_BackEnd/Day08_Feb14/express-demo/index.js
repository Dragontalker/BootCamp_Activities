// Require joi module
const Joi = require('joi');

const express = require('express');

const app = express();

// To be able to use body method in post route, we need this line
// Basically, we are adding a piece of middleware.
app.use(express.json());

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
});

// Definte another route to demonstarte the params object inside request.
app.get('/api/courses/:id', (req, res) => {
    res.send(req.params);
});

// Creating a post method
app.post('/api/courses', (req, res) => {
    const result = validateCourse(req.body);

    // Adding validation logic
    if (result.error) {
        // 400 Bad Request
        res.status(400).send(result.error.details[0].message);
        return;
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };
    courses.push(course);
    res.send(courses);
});

// Creating a put handler
app.put('api/courses/:id', (req, res) => {
    // Look up the course
    // If not existing, return 404
    const course = courses.find(c => c.id === parseInt(req.params.id));
    if (!course) res.status(404).send('The course with the given ID was not found.');

    // Validate
    // If validate, return 400 - Bad request
    // Use object destrucuring
    const {error} = validateCourse(req.body);

    if (error) {
        // 400 Bad Request
        res.status(400).send(error.details[0].message);
        return;
    };

    // Update course 
    course.name = req.body.name;

    // Return the updated course
    res.send(course);
})

// Creating a new validation function
const validateCourse = (course) => {
    const schema = {
        name: Joi.string().min(3).required()
    };

    return Joi.validate(req.body, schema);
};

// Add an environment variable
const port = process.env.PORT || 3000;

// Add a port listenr
app.listen(port, () => console.log(`Listening on PORT ${port}....`));