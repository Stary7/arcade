#Job portal


Job Portal
Overview
This repository contains the backend for the Job Portal project. The backend is built using Node.js, Express, and MongoDB, providing functionality for job management, applicant handling, and interview scheduling. The API endpoints are tested and documented using Postman. This README provides information on how to access the Postman collection and utilize it with the deployed API.

Deployed URL
The API is deployed and accessible at the following URL:

API Endpoints
Here is a brief overview of the available API endpoints:

Authentication
POST /api/auth/signup
Description: Register a new user.
Body Parameters:
username (String): The username of the new user.
email (String): The email address of the new user.
password (String): The password for the new user.
POST /api/auth/login
Description: Log in an existing user.
Body Parameters:
email (String): The email address of the user.
password (String): The password of the user.
Jobs
GET /api/jobs

Description: Fetch a list of jobs.
Query Parameters (Optional):
search (String): Search term to filter jobs.
location (String): Location to filter jobs.
POST /api/jobs

Description: Create a new job posting.
Body Parameters:
title (String): The title of the job.
description (String): A detailed description of the job.
company (String): The company offering the job.
location (String): The location of the job.
salary (Number): The salary for the job.
GET /api/jobs/:id

Description: Fetch a specific job by ID.
URL Parameters:
id (String): The ID of the job to retrieve.
PUT /api/jobs/:id

Description: Update a job posting by ID.
URL Parameters:
id (String): The ID of the job to update.
Body Parameters:
Any of the fields from the POST /api/jobs endpoint to update.
DELETE /api/jobs/:id

Description: Delete a job posting by ID.
URL Parameters:
id (String): The ID of the job to delete.
Applicants
POST /api/applicants

Description: Submit a job application.
Body Parameters:
jobId (String): The ID of the job being applied for.
applicantName (String): The name of the applicant.
resume (File): The applicant's resume.
GET /api/applicants/:jobId

Description: Get applicants for a specific job.
URL Parameters:
jobId (String): The ID of the job for which to fetch applicants.
Interviews
PUT /api/interviews/:id
Description: Schedule or update an interview.
URL Parameters:
id (String): The ID of the interview to schedule or update.
Body Parameters:
date (String): The date of the interview.
time (String): The time of the interview.
interviewers (Array of Strings): List of interviewers.


# Running Locally
git clone https://github.com/Stary7/arcade/tree/main
cd arcade

# npm install
# npm run dev

# postman collection
https://www.postman.com/cryosat-meteorologist-49600174/jobportal/collection/cq298kc/jobportal?action=share&creator=24641192

