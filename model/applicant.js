const mongoose = require('mongoose');

const applicantSchema = new mongoose.Schema({
  jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },  // Ensure jobId is of type ObjectId
  name: { type: String, required: true },
  email: { type: String, required: true },
  resumeLink: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Interviewed', 'Rejected', 'Hired'], default: 'Pending' }
});

module.exports = mongoose.model('Applicant', applicantSchema);
