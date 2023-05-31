# Saruman-the-stinky


## General overview
###### This QuizzApp is a web-based application built with Python and Flask for the backend, React for the frontend, we hosted it on a EC2 instance on Amazon Web Services (AWS). It utilizes a MySQL  database to store the questions, answers, users and the leaderboard

#### Functionality: 
###### The project will have a responsive interface that enables users to interact by selecting buttons on the screen. It will provide the flexibility for users to choose the number of questions per attempt, ranging from 1 to 10. Additionally, a diverse set of questions will be available, allowing for random selection.

###### To ensure a seamless user experience, the questions will be displayed in an orderly manner, and users will only be able to progress to the next question after providing an answer. After each response, the program will save the score and display the next question. 

###### Upon completion of the quiz, the user will be presented with several elements, including a total score reflecting their performance, an empty input box to place the user desire leaderboard name, and the button to click accept to send the info directly to the leaderboard, and if it is a top result it will be displayed in it. 

###### To facilitate data management, the project will establish a connection to a database. This database will be responsible for storing the questions as well as the leaderboard, ensuring the information is securely managed and readily accessible.

#### Key Features:
* User Registration and Authentication: Users can create accounts and log in securely into the QuizApp
* Quiz Creation: Thanks to the questions pool in the database, there is going to be a lot of posible combinations to make a quiz for every
*  The leaderboard: A leaderboard to show how high a user has scored by answering all the questions

## Diagrams(s)
![Class Diagram] (../FrontEnd/images/Diagram.png)

## Design Patterns used and SOLID principles

 ###### For this project, the chosen architectural structure is the Model View Controller (MVC). MVC effectively separates the application into three interconnected components, each assigned with specific responsibilities. This clear separation of concerns simplifies code comprehension and modification, as changes made to one component do not impact the others. Furthermore, the modularity of the MVC pattern enables independent development and testing of each component, facilitating code reuse in diverse contexts without requiring modifications.

###### In addition to the MVC architecture, the development approach follows the Single Responsibility Principle (SRP). This principle contributes to the creation of modular and maintainable code by assigning a single responsibility to each class. By focusing on a specific task, the code becomes easier to understand, and modifications to one class have minimal impact on other parts of the system.

###### The adherence to SRP also enhances code reusability as each class can be utilized in different contexts without modification. This promotes efficient utilization of code components, streamlining the development process and increasing adaptability.


## How to install and run the app

1. Access the Quiz Application:
    * Open your web browser (Chrome, Firefox, Safari, etc.).
    * Enter the URL or web address where the quiz 
2. Home Page:
    * The quiz application home page will be displayed.
    * Read any instructions or information provided on the home page.
    * You can access the leaderboard at all times, to see the highest scores 
3. Start the Quiz: 
    * Write your email to save the user
    * Click on the "Start Quiz" button to begin the quiz.
    * Select the Number of Questions:
        * A prompt will appear asking you to choose the number of questions per try.
        * Select a number from 1 to 10 by clicking on the corresponding option. 
4. Answer Questions: 
    * The first question will be displayed on the screen.
    * Read the question and select your answer by clicking on the appropriate button.
    * After selecting an answer you will be taked to the next question 
    * Repeat this process for each question until you have answered all the selected    questions.
5. Quiz Completion:
    * After answering all the questions, a screen will appear displaying your total score.
    * The program will ask you for a name to place in the leaderboard 
6. leaderboard and Options:
    * After completing the quiz you will be taked to the leaderboard screen and you will see several options:
        * leaderboard tittle
        * Your leaderboard name
        * Your score 
7. Restart the Quiz: 
    * To restart the quiz you just have to finished the current quiz you are taking and place your email again to try and achieve a higher score. 
8. Close the quiz: 
    * To exit the quiz application, simply close the web browser tab or window. 



## Acknowledgements and references 

* Fireship (2022, March 14) 10 Design Patterns Explained in 10 Minutes [video file] Retrieved from: https://www.youtube.com/watch?v=tv-_1er1mWI
* Grace M. (2023).  lectures   [PowerPoint slides]. ITESM,  Estado de México. 




