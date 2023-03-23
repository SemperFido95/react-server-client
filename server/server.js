const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const creatureRouter = require('./routes/creature.router.js');
//! If you change port, update proxy in package.json!
const PORT = process.env.PORT || 5012;

/** ---------- MIDDLEWARE ---------- **/
app.use(bodyParser.json()); // needed for axios requests
app.use(express.static('build'));

/** ---------- EXPRESS ROUTES ---------- **/
app.use('/creature', creatureRouter);

/** ---------- START SERVER ---------- **/
app.listen(PORT,  () => {
    console.log('Listening on port: ', PORT);
});