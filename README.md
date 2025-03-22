Bug Tracker Application
A MERN stack (MongoDB, Express.js, React, Node.js) application for tracking bugs in software projects. Users can create, update, and track issues in a project.

Features
Create Bugs: Users can report new bugs by filling out a form.
View Bugs: Users can view a list of all reported bugs.
Update Bugs: Users can update bug statuses (e.g., open, in-progress, resolved).
Delete Bugs: Users can delete bugs.

Installation
Prerequisites
Node.js (v16 or higher)
MongoDB (running locally or remotely)

Setup Steps
1. Clone the repository:
2. Install backend dependencies: npm install
3. Install frontend dependencies:npm install
4. Create a .env file in the backend directory:
    MONGO_URI=mongodb://localhost:27017/bug-tracker
    PORT=5000

Running the Project
1. Backend
Navigate to the backend directory and start the backend server: npm start

2. Frontend
Navigate to the frontend directory and start the frontend development server: npm run dev


Running Tests
1. Backend Tests
Navigate to the backend directory and run the tests: npm test

2. Frontend Tests
Navigate to the frontend directory and run the tests: npm test


Debugging Techniques
1. Backend Debugging
Console Logs:
Node.js Inspector:
Error Handling:


2. Frontend Debugging
Console Logs:
Chrome DevTools:
Error Boundaries:


Testing Approach
Backend Testing
1. Unit Tests:
Test individual helper functions (e.g., validation logic).
Example: validateBugInput function.

2. Integration Tests:
Test API endpoints (e.g., create, update, delete bug endpoints).
Mock database calls using libraries like jest-mock.

Frontend Testing
1. Unit Tests:
Test individual components.
Example: BugForm component.
Integration Tests:

2. Test API calls and UI updates.
Example: Verify that the BugList component fetches and displays bugs correctly.


Test Coverage
1. Backend Coverage
Unit Tests: 100% coverage for helper functions.
Integration Tests: 100% coverage for API endpoints.

2. Frontend Coverage
Unit Tests: 100% coverage for components.
Integration Tests: 100% coverage for API calls and UI updates.