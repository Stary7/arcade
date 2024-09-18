#Job portal


Job Portal
Overview
This repository contains the backend for the Job Portal project. The backend is built using Node.js, Express, and MongoDB, providing functionality for job management, applicant handling, and interview scheduling. The API endpoints are tested and documented using Postman. This README provides information on how to access the Postman collection and utilize it with the deployed API.

Deployed URL
The API is deployed and accessible at the following URL:

API Endpoints
Here is a brief overview of the available API endpoints:
 # PORT----5000
# Authentication

## POST auth/register

# Description: Register a new user.

# POST /auth/login
Description: Log in an existing user.

# Jobs
# GET /jobs

Description: Fetch a list of jobs.

# POST /api/jobs

Description: Create a new job posting.

# GET /jobs/:id

Description: Fetch a specific job by ID.

# PUT /jobs/:id

Description: Update a job posting by ID.

# DELETE /jobs/:id

Description: Delete a job posting by ID.

# POST /applicants

Description: Submit a job application.

# GET /applicants/:jobId

Description: Get applicants for a specific job.

# Interviews
 # PUT /interviews/:id
Description: Schedule or update an interview.


# Running Locally
## git clone https://github.com/Stary7/arcade
## cd arcade

# npm install
# npm run dev

# postman collection
https://www.postman.com/cryosat-meteorologist-49600174/jobportal/collection/cq298kc/jobportal?action=share&creator=24641192

