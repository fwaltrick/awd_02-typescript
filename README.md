*This folder contains exercises created as part of the Spiced - Advanced Web Development course (June-September 2025).*

# **TypeScript Exercises**

This repository contains various TypeScript exercises covering fundamental concepts, array manipulation, type definitions, and more advanced topics. Each section corresponds to a specific coding challenge.

## **1\. TypeScript Basics**

This section focuses on core TypeScript features, including variable declaration with types, control flow statements (for, if-else, if), and understanding truthy/falsy values.

* **Step 1:** Declare a number variable age and assign a value.  
* **Step 2:** Implement a for loop to output numbers from 1 to age.  
* **Step 3:** Use an if-else statement to check if age is greater than 18 and display messages accordingly.  
* **Step 4:** Declare a number variable score and initialize to 0\.  
* **Step 5:** Use an if statement to check if score has a value (non-zero).  
* **Step 6:** Use an if-else statement to check if score is a truthy value.  
* **Step 7:** Declare a string variable username and initialize to an empty string.  
* **Step 8:** Use an if statement to check if username has a value (non-empty).  
* **Step 9:** Use an if-else statement to check if username is a falsy value.  
* **Step 10:** Declare a boolean variable isAdmin and initialize to false.  
* **Step 11:** Use an if-else statement to check if isAdmin is a truthy value.  
* **Step 12:** Use an if statement to check if isAdmin is false.

## **2\. Coding: Tree**

This exercise involves generating a Christmas tree pattern based on a given number n.

* **Task:** Write code that accepts a number n and outputs a Christmas tree pattern.  
  * Example for n \= 5:  
        \*  
       \*\*\*  
      \*\*\*\*\*  
     \*\*\*\*\*\*\*  
    \*\*\*\*\*\*\*\*\*  
        \*  
        \*  
        \*  
        \*  
        \*

## **3\. Coding: TypeScript Array Functions**

This section focuses on common array manipulation functions (.map, .filter, .reduce, .some) in TypeScript.

* **Step 1:** Create an array of numbers. Use .map to double all numbers.  
* **Step 2:** Create an array of words. Use .filter to select words longer than 5 letters.  
* **Step 3:** Create an array of numbers. Use .reduce to calculate the sum.  
* **Step 4:** Create an array of numbers. Use .some to check if at least one number is greater than 10\.

## **4\. Coding: Array Functions (Chained Operations)**

This exercise requires solving a series of array transformations using only array functions, processing a given list of numbers.

* **Initial List:**  
  const list \= \[15, 6, 3213, 9, 0, 12, 8464, 1, 1264, 481, 186, 1031, 194\];

* **Tasks:**  
  * Sort the numbers in descending order.  
  * Square these numbers.  
  * Remove the two lowest numbers and the four highest numbers from the list (while maintaining the relative order of the remaining elements from the previous step).  
  * Remove all numbers that are divisible by 4\.  
  * Calculate the sum of all remaining numbers.  
* **Question:** What is the final result (sum)?

## **5\. Coding: TypeScript Type (Student Grades System)**

This multi-step task involves defining a Student type in TypeScript, implementing flexible grade handling, and displaying student information.

* **Goal:** Define a Student type with firstName, lastName, age, and a grades property (a list of grades).  
* **Step 1 (Initial Type & Output):**  
  * A grade should initially be an integer from 1 to 6 (German system).  
  * Create a Student type and a function to output student details to the console: firstName, lastName, age, and grades.  
  * Highlight the output with a 30x "=" line.  
  * Example Output:  
    Anton Meier (17)  
    \==============================  
    Grades: 1,4,3,1,3,2,1,2

* **Step 2 (Flexible Grades):**  
  * Allow grades to also be strings 'A' to 'F' (American system).  
  * Adjust the output to use "Noten:" instead of "Grades:", with the grade list on a new line.  
  * Example Output:  
    Anton Meier (17)  
    \==============================  
    Noten:  
    A,2,F,3,1,B,2,5

* **Step 3 (Undefined Grades):**  
  * Support undefined as a grade value (e.g., for absence).  
  * Represent undefined grades as \* in the output.  
  * Example Output:  
    Anton Meier (17)  
    \===========================  
    Noten:  
    A,2,\*,3,1,B,\*,5

* **Step 4 (List All Students):**  
  * Write a function to print a list of all students in the console, using the defined Student type.  
  * Ensure a blank line separates each student's output block.  
  * Example Output:  
    Anton Meier (16)  
    \===========================  
    Noten:  
    1,4,3,1,A,\*,1,2

    Berta Müller (17)  
    \===========================  
    Noten:  
    A,\*,1

    Cäsar Schmidt (17)  
    \==========================  
    Noten:  
    A,1,\*,3,2,4,5

## **6\. Coding: Highlight Students (Dynamic Separator)**

This task refines the student output to dynamically adjust the separator length.

* **Task:** Write a function that highlights student names with a "=" separator whose length matches the length of the student's name and age combined.  
* **Example:**  
  Anton Meier (16)  
  \================  
  Noten: 1,4,3,1,A,\*,1,2  
  Berta Müller (17)  
  \=================  
  Noten: A,\*,1  
  Cäsar Schmidt (17)  
  \==================  
  Noten: A,1,\*,3,2,4,5

## **7\. Bonus Tasks**

These are extended challenges for the Student Grades System.

* **Bonus: Structured Grades:**  
  * Restructure the Student type to allow grades to be assigned to specific subjects (e.g., Sport, Kunst, Mathe).  
  * Format the student output to display grades per subject.  
  * Example Output:  
    Florian Weber (14)  
    \==============

    Noten:  
    Sport: A,1,\*  
    Kunst: 3,2,4,5  
    Mathe: 1,2,A

* **Bonus: Average Grade Calculation:**  
  * Calculate the average grade for each student.  
  * Calculate the overall average grade for the entire list of students.  
  * **Discussion Point:** Define together how to handle the calculation (e.g., how \* (undefined) affects the average, weighting for students with different numbers of grades, conversion of letter grades to numerical values for calculation).

