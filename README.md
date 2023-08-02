# AWS Scratch

A simple note taking app called Scratch. It is a single page application powered by a serverless API written completely in JavaScript and hosted on AWS. This is the complete source for the frontend. The backend code is located at [serverless-stack-api](https://github.com/paulepps/serverless-stack-api).

## REQUIREMENTS

* Should allow users to signup and login to their accounts
* Users should be able to create notes with some content
* Each note can also have an uploaded file as an attachment
* Allow users to modify their note and the attachment
* Users can also delete their note
* The app should be able to process credit card payments
* The backend APIs need to be secure
* The app needs to be responsive

The app is deployed on the AWS Platform at https://d2opjbmp4la1am.cloudfront.net/

## TECHNOLOGY SUMMARY

* Lambda & API Gateway for our serverless API
* DynamoDB for our database
* Cognito for user authentication and securing our APIs
* S3 for hosting our app and file uploads
* CloudFront for serving out our app
* React.js for our single page app
* React Router for routing
* Bootstrap for the UI Kit
* Stripe for processing credit card payments
* GitHub for hosting our project repos
