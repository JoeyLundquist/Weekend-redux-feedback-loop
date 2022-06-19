//Importing whats needed for my router
const express = require('express')
const feedbackRouter = express.Router();
const pool = require('../modules/pool')

//Post route to add new feedback to DB
feedbackRouter.post('/', (req, res) => {
    const sqlQuery = `
        INSERT INTO feedback
        (feeling, understanding, support, comments)
        VALUES
        ($1, $2, $3, $4);
    `
    const sqlParams = [
        req.body.feeling,
        req.body.understanding,
        req.body.support,
        req.body.comments
    ]

    pool.query(sqlQuery, sqlParams)
        .then((dbRes) => {
            res.sendStatus(201)
        })
        .catch((err) => {
            res.sendStatus(500)
        })
})

//Get routes to load the admin table
feedbackRouter.get('/', (req, res) => {
    const sqlQuery = `
        SELECT * FROM feedback
        ORDER BY id DESC;
    `

    pool.query(sqlQuery)
        .then(dbRes => {
            res.send(dbRes.rows)
        })
        .catch(err => {
            console.log('Failed to GET feedback items', err)
            res.sendStatus(500);
        })
})

//Delete route to remove feedback items for DB
feedbackRouter.delete('/:id', (req, res) => {
    // console.log(req.params.id)
    const sqlQuery = `
        DELETE FROM feedback
        WHERE id = $1;
    `

    const sqlParams = [
        req.params.id
    ]

    pool.query(sqlQuery, sqlParams)
        .then(() => {
            console.log('DELETE success')
            res.sendStatus(200)
        })
        .catch(err => {
            console.log('DELETE failed', err)
            res.sendStatus(500)
        })
})

//Put route to Flag feedback items
feedbackRouter.put('/:id', (req, res) => {
    const id = req.params.id
    const flagged = req.body.flagged
    // console.log ('flagged?', flagged)

    const sqlQuery = `
        UPDATE feedback
        SET flagged = $1
        WHERE id = $2;
    `

    const sqlParams = [
        flagged,
        id
    ]

    pool.query(sqlQuery, sqlParams)
        .then(() => {
            res.sendStatus(200)
        })
        .catch(err => {
            console.log('PUT failed', err)
            res.sendStatus(500)
        })
})


module.exports = feedbackRouter