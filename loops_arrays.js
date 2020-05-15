// Original code from the conditions in class exercise

const date = new Date() // lets get the date
let day = date.getDay()// lets get the current day of the week (0 - 6)

/**********************************************************************************************

Step 1
Create and initialize an array that contains each day of the week in text format (i.e. "Monday")

NOTE: use a descriptive name for your array

Step 2
Remove the entire condition statement below and then create a for loop

On each iteration (cycle) of the for loop:

    initialize the day variable to the correct text using your array

    output that day using console.log() so that it looks like this example: Today is Sunday

    output text indicating if you have MTM6302, don't have MTM6302 or if it's the weekend

The output should look like this:

Today is Sunday
It's the weekend, no MTM6302 class today!
Today is Monday
Sadly there is no MTM6302 class today!
Today is Tuesday
You have MTM6302 class today!
Today is Wednesday
Sadly there is no MTM6302 class today!
Today is Thursday
Sadly there is no MTM6302 class today!
Today is Friday
You have MTM6302 class today!
Today is Saturday
It's the weekend, no MTM6302 class today!

Note that your loop is testing each possible value for every day of the week.

NOTE: The code below needs to be inside your loop

**********************************************************************************************/

// now we'll replace the current day numeric value with the correct text

if (day === 0) {
  day = 'Sunday'
} else if (day === 1) {
  day = 'Monday'
} else if (day === 2) {
  day = 'Tuesday'
} else if (day === 3) {
  day = 'Wednesday'
} else if (day === 4) {
  day = 'Thursday'
} else if (day === 5) {
  day = 'Friday'
} else {
  day = 'Saturday'
}

// now we can output the current day correctly
console.log('Today is ' + day)

/**********************************************************************************************

Step 3
Convert the code below (should now be inside your loop to use a switch statement instead

NOTE: Make sure you use the default case and put break statements where they are needed

NOTE: Make sure everything is working correctly BEFORE you convert to the switch statement

**********************************************************************************************/

// lets see if we have MTM6302 today
if (day === 'Saturday' || day === 'Sunday') {
  console.log("It's the weekend, no MTM6302 class today!")
} else if (day === 'Tuesday' || day === 'Friday') {
  console.log('You have MTM6302 class today!')
} else {
  console.log('Sadly there is no MTM6302 class today!')
}

/**********************************************************************************************

Step 4

Code Review:
Once you have finished creating and testing your application then review your code with me (both the source code in VS Code and the file executing in node.js). After your code has been reviewed submit your JavaScript file through the LMS using the format shown below.

Step 5

Submission:
Submit your complete JavaScript file through the LMS. Name your file using this format:

FirstName_LastName_Loops_Arrays_Exercise.js

Example:

Tony_Davidson_Loops_Arrays_Exercise.js

**********************************************************************************************/
