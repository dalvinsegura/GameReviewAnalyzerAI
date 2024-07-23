# AI Project: Video Game Reviews Analysis

This project is part of an AI initiative where the magic happens behind the interface. The main objective is to receive a CSV dataset of video game reviews (like those provided by Steam), classify the reviews into positive, negative, or neutral using NLP services, and finally visualize the statistical results with PowerBI.

## Project Overview

The project is developed by a team of four participants using Azure NLP and Azure SQL Database services. It includes a frontend application built with Next.js that allows users to upload a CSV file, validate its structure, convert it to JSON, and send it to an endpoint for further processing.

## Team Members and Contributions

- **Dalvin**

  - **Role**: Service Manager and Developer
  - **Contributions**:
    - Creation of resource groups and service management
    - Development of the Logic App
    - Frontend app development

- **Juan**

  - **Role**: Data and Python Manager
  - **Contributions**:
    - CSV to JSON conversion
    - Database management
    - PowerBI supervision
    - Dataset manipulation

- **Brander**

  - **Role**: QA Analyst and Developer
  - **Contributions**:
    - Logic App development
    - Database connection
    - Ensuring project requirements are met

- **Alejandro**
  - **Role**: Visualization and Data Manager
  - **Contributions**:
    - PowerBI handling
    - Azure database management

## How It Works

1. **CSV Upload and Validation**: The frontend app allows users to upload a CSV file and ensures it contains the required columns (`review_id`, `title`, `year`, `user_review`, `user_suggestion`). If any columns are missing, an error message is displayed.
2. **CSV to JSON Conversion**: The validated CSV file is parsed and converted to JSON format.
3. **Data Submission**: The JSON data is sent to a backend endpoint for further processing.
4. **NLP Analysis**: The reviews are classified into positive, negative, or neutral categories using Azure NLP services.
5. **Data Visualization**: The classified data is visualized using PowerBI for statistical analysis.

## Usage

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/csv-uploader-ai-app.git
   cd csv-uploader-ai-app
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Run the Development Server**:

   ```bash
   npm run dev
   ```

4. **Access the Application**: Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The application can be accessed via the following URL on Vercel: [https://your-vercel-url.vercel.app](https://your-vercel-url.vercel.app)

## Technologies Used

- **Next.js**: Framework for server-side rendering and static site generation.
- **Bootstrap**: CSS framework for styling.
- **Papa Parse**: Library for parsing CSV files.
- **Axios**: HTTP client for making requests.
- **Azure NLP**: Natural Language Processing service for classifying reviews.
- **Azure SQL Database**: Database service for storing and managing data.
- **PowerBI**: Business analytics service for data visualization.
