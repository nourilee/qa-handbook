# Test Scenario Creation

In this document, we will explore the concept of test scenario creation—a crucial skill for software testers. Test scenarios represent real-life user interactions and situations that are designed to ensure comprehensive testing coverage. A well-defined test scenario helps identify defects early in the development process and contributes to the overall quality of the software.

## Concepts and Techniques:

### Boundary Value Analysis:

Boundary value analysis involves identifying test cases at the boundaries of valid and invalid inputs. By testing inputs near the boundaries, you can uncover defects that might not be evident with typical test cases.

**Real-Life Example - Testing a Password Length Requirement:**

Imagine you are testing a registration form for a new application. One of the requirements is that passwords must be between 8 and 16 characters in length. You want to ensure that the application handles password length validation correctly.

**Boundary Value Analysis Application:**

- Minimum Length Boundary (Valid): Test a password with exactly 8 characters.
- Maximum Length Boundary (Valid): Test a password with exactly 16 characters.
- Just Below Minimum (Invalid): Test a password with 7 characters.
- Just Above Maximum (Invalid): Test a password with 17 characters.


### Equivalence Partitioning:

Equivalence partitioning is the process of dividing input values into equivalence classes and selecting representative values from each class for testing. This technique helps ensure that various input scenarios are thoroughly tested.

**Real-Life Example - Testing a User Age Requirement:**

You are testing the age verification process for a social media platform. Users must be between 13 and 18 years old to create an account. You want to ensure that the system accurately verifies users' ages.

**Equivalence Partitioning Application:**

- Valid Age (Equivalence Class): Test a user who is 15 years old.
- Invalid Age (Equivalence Class): Test a user who is 10 years old.
- Just Below Valid Age (Boundary Value): Test a user who is 12 years old.
- Just Above Valid Age (Boundary Value): Test a user who is 19 years old.


### User Flows:

Mapping out user interactions helps in creating comprehensive test scenarios. Consider the different paths a user can take through the application and create scenarios that cover each flow.

**Real-Life Example - Testing an Online Booking System:**

You are testing an online flight booking system. Users can search for flights, select flights, enter passenger information, and make payments. You want to ensure that the entire booking process works smoothly.

**User Flows Application:**

- User Searches for Flights: Test the user flow of searching for flights based on dates and destinations.
- User Selects a Flight: Test the process of choosing a specific flight from the search results.
- User Enters Passenger Information: Test entering passenger details, such as names, ages, and special requests.
- User Makes Payment: Test the payment process using different payment methods.


### Negative Testing:

Negative testing involves testing scenarios where unexpected inputs or actions occur. By deliberately testing invalid inputs or uncommon scenarios, you can identify how the application handles errors.

**Real-Life Example - Testing Login Error Messages:**

You are testing a banking application's login page. Users must enter a valid username and password to log in. You want to ensure that the application handles login failures properly.

**Negative Testing Application:**

- Incorrect Username: Test logging in with an invalid username.
- Incorrect Password: Test logging in with an incorrect password.
- Combination of Both: Test using an invalid username and an incorrect password.
- Empty Fields: Test submitting the login form with empty fields.


## Step-by-Step Approach to Test Scenario Creation:

1. **Identify the Feature:** Choose the feature or functionality you want to create test scenarios for.

2. **Understand User Goals:** Gain a clear understanding of the user goals related to the chosen feature. This will help you create relevant test scenarios.

3. **Break Down User Flows:** Divide the user interactions into discrete steps. For example, if testing an e-commerce checkout process, steps might include adding items to the cart, entering shipping details, selecting payment methods, and confirming the order.

4. **Apply Equivalence Partitioning:** Identify equivalence classes for different inputs. For instance, if testing a login page, consider valid and invalid email addresses, passwords, and combinations of both.

5. **Perform Boundary Value Analysis:** Test inputs at the boundaries of valid and invalid values. For instance, if testing a registration form, consider testing the minimum and maximum lengths for fields.

6. **Craft Negative Scenarios:** Create scenarios where the application might encounter errors or unexpected situations. For instance, test how the application handles an empty shopping cart during checkout.

7. **Document Test Scenarios:** Write down each test scenario clearly, including the steps, inputs, expected outcomes, and any special conditions.

## Exercise:

You are the QA Tester for the OrangeHRM demo website (https://opensource-demo.orangehrmlive.com), an employee management system. Your task is to create test scenarios for testing various aspects of the employee management process. The website allows administrators to manage employee information, such as adding new employees, updating personal details, and handling employee leave requests. The goal is to ensure that the employee management system functions correctly, and employee data is accurately maintained.

### Instructions:

1. Review the [OrangeHRM demo website](https://opensource-demo.orangehrmlive.com) to understand the employee management process.

2. Identify the key features and user interactions involved in the employee management system.

3. Create a set of comprehensive test scenarios that cover various aspects of employee management. Your test scenarios should include both positive and negative test cases, focusing on different features, user actions, and potential edge cases.

4. Document each test scenario with clear steps, inputs, expected outcomes, and any special conditions.

5. Apply the concepts and techniques of boundary value analysis, equivalence partitioning, user flows, and negative testing as you create your test scenarios.

6. Focus on ensuring that the test scenarios provide thorough coverage of employee management tasks, from adding employees to handling leave requests.

### Evaluation Criteria:

- **Coverage:** Demonstration of comprehensive coverage of employee management features with various user interactions and scenarios.

- **Use of Techniques:** Appropriate application of boundary value analysis, equivalence partitioning, user flows, and negative testing techniques.

- **Creativity:** Thoughtful and creative test scenarios that address different aspects of employee management.

- **Documentation:** Clear and organized documentation of each test scenario.

- **Communication:** Effective communication of thought process and rationale during the review and explanation of test scenarios.

---

This exercise evaluates your problem-solving skills, ability to create relevant test scenarios, and testing expertise in the context of an employee management system.