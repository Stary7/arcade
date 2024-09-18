const express = require('express');
const Interview = require('../model/interview');
const router = express.Router();

// POST /interviews: Schedule an interview
router.post('/', async (req, res) => {
  try {
    const interview = new Interview(req.body);
    await interview.save();
    res.status(201).send(interview);
  } catch (err) {
    res.status(400).send(err);
  }
});

// GET /interviews: Fetch interview details by applicantId
router.get('/', async (req, res) => {
  const { applicantId } = req.query;
  try {
    const interviews = await Interview.find({ applicantId });
    res.status(200).send(interviews);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
