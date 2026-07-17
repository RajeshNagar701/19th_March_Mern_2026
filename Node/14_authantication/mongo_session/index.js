/*
﻿ExpressJS is a small framework that works on top of Node web server functionality 
to simplify its APIs and add helpful new features.

It makes it easier to organize your application’s functionality with middleware 
and routing. It adds helpful utilities to Node HTTP objects and facilitates 
the rendering of dynamic HTTP objects.

*/


const express = require('express');
const session = require('express-session');

const app = express();

// Set up session middleware
app.use(session({
  secret: 'tops',
  resave: false,
  saveUninitialized: false
}));

//
app.get('/login', (req, res) => {
	// Set session data
    req.session.user =
        { id: 1, username: 'akash nagar' };
    res.send('Logged in');
});

app.get('/profile', (req, res) => {

    // Access session data
    const user = req.session.user;  // user.id 
    res.send(`Welcome ${user.username}`);
});

app.get('/logout',
    (req, res) => {
        // Destroy session
        req.session.destroy();
		res.send('Logged Out');
    });
	
app.listen(3000);

