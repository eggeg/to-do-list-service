# to-do-list-service
To-Do List App
Overview

The To-Do List App is a simple, user-friendly application that allows users to add, check off, and delete tasks. This app is built with HTML, CSS, and JavaScript, featuring a sleek design and intuitive interaction.
Features
![image](https://github.com/eggeg/to-do-list-service/assets/82609842/70dade58-71e3-45d0-a856-e883ac5334f7)
![image](https://github.com/eggeg/to-do-list-service/assets/82609842/17924826-3320-4174-83c6-2ad80ca0bdf1)
![image](https://github.com/eggeg/to-do-list-service/assets/82609842/a950ebea-9e23-40c4-9fcc-48275c4a991c)

    Add Tasks: Users can add new tasks to their to-do list.
    

    Check Off Tasks: Users can mark tasks as completed, which visually updates the task as 'checked'.

    Delete Tasks: Users can remove tasks from the list.
    
    Data Persistence: The app saves the tasks in the browser's local storage, ensuring that the data persists even after the browser is closed or refreshed.

File Structure

    index.html: The HTML file that structures the web page.
    style.css: The CSS file that provides styling to the web page.
    script.js: The JavaScript file that contains the logic for task manipulation and local storage interaction.

HTML File (index.html)

This file structures the layout of the To-Do List application, including input fields for new tasks, a display area for the task list, and buttons for task interaction.
CSS File (style.css)

This file provides styling to the HTML elements. It defines the layout, colors, fonts, and other visual elements of the application.
JavaScript File (script.js)

This file contains the interactive functionality of the app. It handles adding new tasks, checking off tasks, deleting tasks, and storing the task list in the browser's local storage.
Key Functions:

    addTask(): Adds a new task to the list.
    saveData(): Saves the current state of the task list to local storage.
    showTask(): Loads and displays tasks from local storage when the app is initialized.

How to Use

    Adding a Task: Type a task into the input box and click the 'Add' button or press Enter.
    Checking Off a Task: Click on a task to mark it as completed. This will change the appearance of the task to indicate its completion.
    Deleting a Task: Click the '×' symbol next to a task to remove it from the list.

Local Storage

The application uses the localStorage web API to save the state of your task list. This means your tasks will be remembered even if you close the browser.
Customization

You can customize the appearance and behavior of the app by modifying the HTML, CSS, and JavaScript files. This includes changing styles, fonts, and adding additional features.
Browser Compatibility

The app is compatible with most modern web browsers that support HTML5, CSS3, and JavaScript ES6 standards.
