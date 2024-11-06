---
title: "Auctions - Serverless"
description: "Serverless auctions service"
date: "03/18/2023"
repoURL: "https://github.com/okieLoki/auctions-serverless"
---

## 💻 Introduction

Built this project while learning serverless architecture with AWS Lambda, API Gateway, and DynamoDB. The service allows users to create auctions, bid on auctions, and upload images for auctions. The service is built with Node.js and JavaScript.

[View on Eraser![](https://app.eraser.io/workspace/H41KFwTV7sa9xeazutgU/preview?elements=f4RS7VltUEytuxvAnUzqzQ&type=embed)](https://app.eraser.io/workspace/H41KFwTV7sa9xeazutgU?elements=f4RS7VltUEytuxvAnUzqzQ)


## 🏗️ Project Structure

The project consists of three main services, each built with serverless functions and deployed using the Serverless Framework:

1. **Auth Service**
   - This service handles user authentication, which is essential for securing access to auction actions, like creating an auction or placing a bid.
   - It uses API Gateway’s Lambda Authorizer to verify user credentials before allowing access to protected routes.
   - This microservice structure helps isolate authentication from core auction logic, allowing independent scaling and updates.

2. **Notification Service**
   - The notification service manages communication with users, especially for critical updates like when they are outbid or when an auction ends.
   - It leverages AWS Simple Queue Service (SQS) to handle email notifications asynchronously, ensuring efficient handling of high volumes of notifications without blocking other operations.
   - An SQS queue (`MailQueue`) is used to queue up email notifications, and a Lambda function (`sendMail`) processes each message to trigger emails through Amazon SES.

3. **Auction Service**
   - This core service provides auction-related functionalities:
     - **Create Auction**: Allows users to start a new auction, specifying initial parameters.
     - **Get Auctions**: Lists all active auctions for browsing.
     - **Get Auction by ID**: Retrieves details for a specific auction.
     - **Place Bid**: Enables users to bid on an auction.
     - **Upload Auction Picture**: Allows users to upload images, with images stored in an S3 bucket for scalability and quick access.
   - The service is set up with API Gateway endpoints for HTTP access and uses DynamoDB as the main data store for storing auction data.
   - A scheduled Lambda function (`processAuctions`) runs every minute to check for expired auctions and update their status.

## 🛠️ AWS Services and Resources

The project utilizes several AWS services to build a scalable, serverless auction system:

- **API Gateway**: Manages HTTP requests and routes them to the appropriate Lambda functions. It also secures routes with custom authorizers.
- **Lambda Functions**: The backbone of the application, executing business logic in response to API calls or scheduled events.
- **DynamoDB**: A fully managed NoSQL database used to store auction data, with a schema that supports fast reads and writes for real-time bidding.
- **S3**: Used for storing images associated with auctions, enabling easy file storage and retrieval.
- **SQS**: Ensures reliable communication between services by queuing messages for notification emails, with Lambda functions processing them asynchronously.
- **IAM Roles**: Provides permissions for each service to interact only with necessary AWS resources, following the principle of least privilege.

## 📦 Setting Up the Project

To run the project locally and deploy it to AWS, ensure you have the following tools:

- [Node.js](https://nodejs.org/) and npm installed for server-side JavaScript development.
- [Serverless Framework](https://www.serverless.com/) for managing deployment configurations and infrastructure.

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/okieLoki/auctions-serverless
   cd auctions-serverless
   ```

2. **Install Dependencies:**
   ```bash
   npm install
   ```

3. **Deploy the Services:**
   - Set your AWS credentials and deploy each service:
     ```bash
     serverless deploy --stage dev
     ```
   - This will create the necessary AWS resources, including Lambda functions, API Gateway endpoints, DynamoDB tables, and S3 buckets.

## ⚙️ Key Features

- **Seamless Bidding and Notifications**: Users can place bids on active auctions, and they’ll receive notifications if they’re outbid or if an auction ends.
- **Image Uploads**: Supports uploading images associated with auctions, which are stored in S3 for scalability and cost-efficiency.
- **Serverless Architecture**: The project is fully serverless, meaning it scales automatically to handle high traffic and usage spikes.

## 📈 Future Improvements

Here are a few potential features and optimizations that could be added to enhance the auction platform:

- **Real-Time Bidding Updates**: Integrate WebSockets or AWS AppSync to provide real-time auction updates to users.
- **Extended Notification Channels**: Add SMS or push notifications as an alternative to email notifications.
- **Enhanced Security**: Implement more granular access control, such as roles and permissions, to manage who can create or bid on auctions.

