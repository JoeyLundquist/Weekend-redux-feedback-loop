const express = require('express')
const feedbackRouter = express.Router();
const pool = require('../modules/pool')

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




module.exports = feedbackRouter