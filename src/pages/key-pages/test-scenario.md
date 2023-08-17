# Test Scenario Creation Exercise

## Employee Management System Testing

You are the QA Tester for the OrangeHRM demo website (https://opensource-demo.orangehrmlive.com), an employee management system. Your task is to create test scenarios for testing various aspects of the employee management process. The website allows administrators to manage employee information, such as adding new employees, updating personal details, and handling employee leave requests. The goal is to ensure that the employee management system functions correctly, and employee data is accurately maintained.

### Instructions:

1. Review the [OrangeHRM demo website](https://opensource-demo.orangehrmlive.com) to understand the employee management process.

2. Identify the key features and user interactions involved in the employee management system.

3. Create a set of comprehensive test scenarios that cover various aspects of employee management. Your test scenarios should include both positive and negative test cases, focusing on different features, user actions, and potential edge cases.

4. Document each test scenario with clear steps, inputs, expected outcomes, and any special conditions.

5. Apply the concepts and techniques of boundary value analysis, equivalence partitioning, user flows, and negative testing as you create your test scenarios.

6. Focus on ensuring that the test scenarios provide thorough coverage of employee management tasks, from adding employees to handling leave requests.

7. Present your test scenarios in the following markdown format, and be prepared to explain your thought process and rationale behind each scenario.

### Sample Test Scenarios:

#### Scenario 1: Adding a New Employee
- **Steps:**
    1. Log in to the OrangeHRM demo website using valid admin credentials.
    2. Navigate to the "Add Employee" page.
    3. Enter valid employee details (e.g., first name, last name, employee ID).
    4. Save the employee information.
- **Expected Outcome:** The employee is successfully added to the system, and the details are accurately displayed in the employee list.

#### Scenario 2: Updating Employee Personal Details
- **Steps:**
    1. Log in to the OrangeHRM demo website using valid admin credentials.
    2. Search for an existing employee.
    3. Update the employee's personal details (e.g., contact information, address).
    4. Save the changes.
- **Expected Outcome:** The employee's personal details are successfully updated, and the changes are reflected in the employee profile.

#### Scenario 3: Handling Employee Leave Request
- **Steps:**
    1. Log in to the OrangeHRM demo website using valid admin credentials.
    2. Navigate to the "Leave" section and review pending leave requests.
    3. Approve a leave request for a specific employee.
    4. Verify that the employee's leave balance is updated accordingly.
- **Expected Outcome:** The approved leave request is accurately processed, and the employee's leave balance is adjusted.

#### Scenario 4: Invalid Login Attempt
- **Steps:**
    1. Access the OrangeHRM demo website login page.
    2. Enter an invalid username and password combination.
    3. Attempt to log in.
- **Expected Outcome:** The system displays an appropriate error message and prevents access for invalid login attempts.

#### Scenario 5: Searching for Inactive Employee
- **Steps:**
    1. Log in to the OrangeHRM demo website using valid admin credentials.
    2. Search for an employee who is marked as inactive.
    3. Verify that the inactive employee's profile is displayed appropriately.
- **Expected Outcome:** The inactive employee's profile is displayed with the appropriate status.
