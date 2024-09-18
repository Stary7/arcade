const express = require('express');
const Applicant = require('../model/applicant');
const router = express.Router();

// POST /applicants: Add a new applicant
router.post('/', async (req, res) => {
  try {
    const applicant = new Applicant(req.body);
    await applicant.save();
    res.status(201).send(applicant);
  } catch (err) {
    res.status(400).send(err);
  }
});

// GET /applicants: Retrieve applicants by jobId
router.get('/', async (req, res) => {
  const { jobId } = req.query;
  try {
    const applicants = await Applicant.find({ jobId });
    res.status(200).send(applicants);
  } catch (err) {
    res.status(500).send(err);
  }
});

// PATCH /applicants/{applicantId}: Update applicant status
router.patch('/:applicantId', async (req, res) => {
  try {
    const applicant = await Applicant.findByIdAndUpdate(req.params.applicantId, req.body, { new: true });
    res.status(200).send(applicant);
  } catch (err) {
    res.status(400).send(err);
  }
});

// DELETE /applicants/{applicantId}: Delete an applicant
router.delete('/:applicantId', async (req, res) => {
  try {
    await Applicant.findByIdAndDelete(req.params.applicantId);
    res.status(200).send({ message: 'Applicant deleted' });
  } catch (err) {
    res.status(500).send(err);
  }
});

module.exports = router;
