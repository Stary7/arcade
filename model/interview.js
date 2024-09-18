const mongoose = require('mongoose');

const interviewSchema = new mongoose.Schema({
  applicantId: { type: mongoose.Schema.Types.ObjectId, ref: 'Applicant', required: true },
  interviewDate: { type: Date, required: true },
  interviewerName: { type: String, required: true }
});

module.exports = mongoose.model('Interview', interviewSchema);
