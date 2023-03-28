const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// Setup a GET route to get all the creatures from the database
router.get('/', (req, res) => {
    // When you fetch all things in these GET routes, strongly encourage ORDER BY
    // so that things always come back in a consistent order 
    const sqlText = `SELECT * FROM creatures ORDER BY id;`;
    pool.query(sqlText)
        .then((result) => {
            // console.log(`Got stuff back from the database`, result);
            res.send(result.rows);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})


// Setup a POST route to add a new creature to the database
router.post('/', (req, res) => {
    const creature = req.body;
    const sqlText = `INSERT INTO creatures (name, origin)
                     VALUES ($1, $2)`;
    // Let sql sanitize your inputs (NO Bobby Drop Tables here!)
    // the $1, $2, etc get substituted with the values from the array below
    pool.query(sqlText, [creature.name, creature.origin])
        .then((result) => {
            console.log(`Added creature to the database`, creature);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error making database query ${sqlText}`, error);
            res.sendStatus(500); // Good server always responds
        })
})

router.delete('/:id', (req, res) => {
    console.log('In DELTE request for /creature');
    let deleteId = req.params.id;
    let queryText = 'DELETE FROM creatures WHERE id = $1';
    pool.query(queryText, [deleteId]).then((result) =>{
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`Error in delete ${error}`);
        res.sendStatus(500);
    })
})

router.put('/sighting/:id', (req, res) => {
    console.log('In PUT request for /creature/sighting');
    let updateId = req.params.id;
    let queryText = 'UPDATE creatures SET sightings = sightings + 1 WHERE id = $1';
    pool.query(queryText, [updateId]).then((result) => {
        res.sendStatus(200);
    }).catch((error) => {
        console.log(`Error in PUT ${error}`);
        res.sendStatus(500);
    })
})

router.put('/color/:id', (req, res) => {
    console.log('In PUT request for /color');
    let color = req.body.color;
    console.log(color);
    let updateId = req.params.id;
    let queryText = 'UPDATE creatures SET color = $1 WHERE id = $2';
    pool.query(queryText, [color, updateId]).then((response) => {
        res.sendStatus(200);
    }).catch((error => {
        console.log(`Error in PUT ${error}`);
        res.sendStatus(500);
    }))
})

module.exports = router;
