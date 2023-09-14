# 🚀 Zuddl Task Board

This is a Trello task Board built using ReactJs, React-Beautiful-Dnd and TailwindCSS.

![Light Mode](src/assets/screenshots/screenshot-readme.png)

## 👨‍💻 Demo

<a href="https://github.com/JatinSingh08/task-board" target="blank">
<img src="https://img.shields.io/website?url=https://www.codingspace.codes&logo=github&style=flat-square" />
</a>

Try out the website : [Zuddl Task Board](https://zuddl-task-board.vercel.app//)

## 👨‍🔧 Tech Stack

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 👨‍💻 Features

:white_check_mark: Implemented Task Board layout.\
:white_check_mark: Drag-and-Drop of Task Cards.\
:white_check_mark: Metrics like: number of tasks, people involved, effort spent on all tasks.\
:white_check_mark: search functionality, which will search by task name from any group (Ready/In progress/Testing/Done).\
:white_check_mark: Filters like filter by Start/End dates, filter by assignee, filter by severity of the task.\
:white_check_mark: unique colors / badges to each task based on severity (High/Medium/Low).\
:white_check_mark: Implemented light and dark mode theme.\
:white_check_mark: Responsive design using tailwind CSS styling.\
:white_check_mark: Implemented Shimmer UI for the initial paint of the webpage.


## 🪜 Steps I took to optimize the page load time

- Used code-splitting with `React.Lazy()` and `Suspense` to lazy load the components.
- Used `React.Memo()` to optimize the render performance of functional components.
- Used vercel to deploy this website to leverage its Vercel Edge Network compression that results in the better performance.

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:5173](http://localhost:5173) to view it in the browser.
