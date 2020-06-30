const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const sgMail = require("@sendgrid/mail");
const { getMaxListeners } = require('../modules/pool');

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
  const sqlText = `SELECT * from "client_request" where client_request.id = $1 `;
  pool
    .query(sqlText, [req.params.id])
    .then((response) => {
      console.log(" client service request:", response.rows[0]);
      //Since we only need the first, and only row, we are setting the index to 0.
      res.send(response.rows[0]);
    })
    .catch((error) => {
      console.log(`Error in getting client service request. ${sqlText}`, error);
      res.sendStatus(500);
    });
    
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    console.log("client request post::::", req.body, req.user.id, req.user.user_email);
    const hasEnvVariables =
    process.env.SENDGRID_API_KEY && process.env.SENDGRID_FROM_EMAIL;
  if (req.user.id && req.user.user_email && hasEnvVariables) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    const msg = {
      to: req.user.user_email,
      from: process.env.SENDGRID_FROM_EMAIL,
      subject: "New service Request!",
      text: " Test to send email",
      html:
        "Thanks for creating a new event to bring people together. More info to come before your event.",
    };
    sgMail.send(msg);
  }
    const pet_id = parseInt(req.body.pet_id);
    const vet_id = req.user.id;
    const start_date_time = req.body.start_date_time;
    const end_date_time = req.body.end_date_time;
    const add_info = req.body.add_info;
  
    // const request_status = req.body.request_status;
    const queryText =
      `INSERT INTO "client_request" ( pet_id, vet_id, start_date_time, end_date_time, add_info) 
      VALUES ($1, $2, $3, $4, $5)`;
    pool
      .query(queryText, [
        pet_id,
        vet_id, 
        start_date_time, 
        end_date_time, 
        add_info, 
        // request_status
      ])
      .then(() => res.sendStatus(201))
  
      .catch((error) => {
          console.log(error)
          res.sendStatus(500)});
});

module.exports = router;