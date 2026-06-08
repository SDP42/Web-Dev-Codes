React Practical – Experiment No. 8

Title:
Functional Components, Class Components and useState() Hook

Aim:
To create Functional Components, Class Components and use the useState() Hook for state management in React.

Objective:
To understand component-based architecture in React and learn how state is managed using useState() and setState().

Software Requirements:

1. Visual Studio Code
2. Google Chrome / Mozilla Firefox
3. Node.js (for React Project Method)
4. npm (Node Package Manager)

Files Included:

1. index.html
2. README.txt

Concepts Used:
• React
• ReactDOM
• JSX
• Functional Components
• Class Components
• State
• useState() Hook
• setState()
• Event Handling
• Re-rendering
• Component-Based UI Design

---

## METHOD 1 : RUNNING USING SIMPLE HTML FILE

Step 1:
Save the code as:

index.html

Step 2:
Make sure internet connection is available because React, ReactDOM and Babel are loaded through CDN links.

Step 3:
Double click index.html

OR

Right Click
→ Open With
→ Chrome

Step 4:
The webpage will open in browser.

Step 5:
You will see:

React Components & useState Demo

Functional Component
Count: 0
[Increment]

Class Component
Count: 0
[Increment]

Step 6:
Click Increment button.

Result:
Counter value increases automatically.

Example:

0 → 1 → 2 → 3

This demonstrates React State Management.

---

## METHOD 2 : RUNNING USING LIVE SERVER

Step 1:
Open folder in Visual Studio Code.

Step 2:
Install Live Server Extension.

Step 3:
Right Click on index.html

Step 4:
Click:

Open with Live Server

Step 5:
Browser opens automatically.

Output will be displayed.

---

## METHOD 3 : RUNNING AS A REACT PROJECT

Step 1:
Install Node.js from:

https://nodejs.org

Step 2:
Open Terminal.

Step 3:
Create React Application:

npx create-react-app react-practical

Step 4:
Move into project folder:

cd react-practical

Step 5:
Open project in VS Code:

code .

Step 6:
Replace src/App.js with your React code.

Step 7:
Install dependencies:

npm install

Step 8:
Run React Application:

npm start

Step 9:
Browser opens automatically at:

http://localhost:3000

Step 10:
React application will be displayed.

---

## WORKING OF PROGRAM

1. FunctionalCounter Component

• Created using JavaScript Function.
• Uses useState() Hook.
• Stores counter value in state.

Code:

const [count, setCount] = useState(0);

count → Current Value

setCount() → Updates Value

When button is clicked:

setCount(count + 1)

React automatically updates UI.

---

2. ClassCounter Component

• Created using JavaScript Class.
• Extends React.Component.
• Uses this.state.

Code:

this.state = {
count: 0
}

Updates value using:

this.setState()

When button is clicked:

this.setState({
count: this.state.count + 1
})

React automatically updates UI.

---

## EXPECTED OUTPUT

React Components & useState Demo

Functional Component
Count : 0
[Increment]

Class Component
Count : 0
[Increment]

After clicking Increment:

Functional Component
Count : 1

Class Component
Count : 1

---

## ADVANTAGES OF REACT

1. Reusable Components
2. Faster Development
3. Virtual DOM
4. Better Performance
5. Easy State Management
6. Large Community Support
7. Automatic UI Updates

---

## VIVA POINTS

What is React?
React is a JavaScript library used to build user interfaces.

What is JSX?
JSX stands for JavaScript XML and allows HTML-like syntax inside JavaScript.

What is State?
State is data that changes during execution.

Examples:
• Counter Value
• User Input
• Toggle Status

What is useState()?
A React Hook that allows Functional Components to manage state.

Syntax:

const [state, setState] = useState(initialValue);

What is ReactDOM?
ReactDOM renders React components into the browser.

What is Node.js?
Node.js is a JavaScript runtime environment.

What is npm?
npm stands for Node Package Manager.

Difference Between Functional and Class Components:

Functional Component
• Uses Hooks
• Simpler
• Preferred Today

Class Component
• Uses this.state
• Uses setState()
• Older Approach

Result:
Functional and Class Components were successfully created and state management was implemented using the useState() Hook and setState().
