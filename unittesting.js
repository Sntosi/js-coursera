// # Lab Instructions: Unit Testing

// > ### **Tips: Before you Begin**
// > #### **To view your code and instructions side-by-side**, select the following in your VSCode toolbar:
// > - View -> Editor Layout -> Two Columns
// > - To view this file in Preview mode, right click on this README.md file and `Open Preview`
// > - Select your code file in the code tree, which will open it up in a new VSCode tab.
// > - Drag your assessment code files over to the second column. 
// > - Great work! You can now see instructions and code at the same time. 
// > - Questions about using VSCode? Please see our support resources here:  
// > [Visual Studio Code on Coursera](https://www.coursera.org/learn/programming-with-javascript/supplement/roMvE/visual-studio-code-on-coursera)
// > #### **To run your JavaScript code**
// > - Select your JavaScript file
// > - Select the "Run Code" button in the upper right hand toolbar of VSCode.  
// > Ex: It looks like a triangular "Play" button. 
// <br><br>

// ## Task 1: Add Jest as a devDependency

// Open terminal. Make sure that it's pointing to `jest-testing` directory.  
// Install the jest npm package using the npm install command and the --save-dev flag.  
// Verify that the installation was completed successfully by opening the package.json file and confirming that the "devDependencies" entry lists jest similar to the following:

// ```
// "devDependencies": {
//     "jest": "^28.0.0"
// }
// ```
// <br>

// ## Task 2: Update the test entry

// In the package.json file, locate the "scripts" entry, and inside of it, update the test entry to `jest`.
// <br><br>

// ## Task 3: Code the timesTwo function

// Open the timesTwo.js file and add a function named `timesTwo`. The function should take number as input and return the value 2 multiplied by the number.
// Export the timesTwo function as a module. 
// <br><br>

// ## Task 4: Write the first test
// Code a test call with the following arguments: 
// 1. The description that reads: "returns the number times 2". 
// 2. The second argument should expect the call to the timesTwo function, when passed the number 10, to be 20.
// <br><br>

// ## Task 5: Run the first test 
// With the terminal pointed at the `jest-testing` directory, run the test script using npm.

Answer
Here's a step-by-step guide to completing the lab instructions for unit testing with Jest, including the necessary code snippets and commands.


Task 1: Add Jest as a devDependency
Open Terminal: Make sure your terminal is pointing to the
text
jest - testing
directory.
Install Jest: Run the following command in your terminal:
bash
npm install jest--save - dev
Verify Installation: Open the
text
package.json
file and check that
text
jest
appears under
text
devDependencies
like this:
json
"devDependencies": {
    "jest": "^28.0.0"
}
Task 2: Update the test entry
Open
text
package.json
: Locate the
text
"scripts"
section.
Update Test Script: Change the
text
"test"
entry to use Jest:
json
"scripts": {
    "test": "jest"
}
Task 3: Code the
text
timesTwo
function
    Open
text
timesTwo.js
: Create or open this file in your project.
Add Function Code:
javascript
function timesTwo(number) {
    return number * 2;
}

module.exports = timesTwo; // Exporting the function as a module
Task 4: Write the first test
Create or Open a Test File: Typically, you might name it
text
timesTwo.test.js
    .
Add Test Code:
javascript
const timesTwo = require('./timesTwo'); // Importing the timesTwo function

test('returns the number times 2', () => {
    expect(timesTwo(10)).toBe(20); // Test case
});
Task 5: Run the first test
Run Tests: In your terminal, ensure you are still in the
text
jest - testing
directory and run:
bash
npm test
Check Output: You should see output indicating that your test has passed, similar to this:
text
PASS./ timesTwo.test.js
  ✓ returns the number times 2(X ms)

Test Suites: 1 passed, 1 total
Tests: 1 passed, 1 total
Snapshots: 0 total
Time:        X ms
Ran all test suites.
Summary of Files
timesTwo.js
javascript
function timesTwo(number) {
    return number * 2;
}

module.exports = timesTwo;
timesTwo.test.js
javascript
const timesTwo = require('./timesTwo');

test('returns the number times 2', () => {
    expect(timesTwo(10)).toBe(20);
});
package.json(relevant part)
json
"devDependencies": {
    "jest": "^28.0.0"
},
"scripts": {
    "test": "jest"
}