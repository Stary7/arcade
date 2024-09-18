const express = require('express');
const Job = require('../model/job');
const router = express.Router();

// POST /jobs: Add a new job position
router.post('/', async (req, res) => {
  try {
    const job = new Job(req.body);
    await job.save();
    res.status(201).send(job);
  } catch (err) {
    res.status(400).send(err);
  }
});

// GET /jobs: Retrieve all jobs
router.get('/', async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).send(jobs);
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
