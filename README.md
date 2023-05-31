# QuizApp the stincky


## General overview
###### This QuizzApp is a web-based application built with Python and Flask for the backend, React for the frontend, we hosted it on a EC2 instance on Amazon Web Services (AWS). It utilizes a MySQL  database to store the questions, answers, users and the scoreboard

#### Functionality: 
###### The project will have a responsive interface that enables users to interact by selecting buttons on the screen. It will provide the flexibility for users to choose the number of questions per attempt, ranging from 1 to 10. Additionally, a diverse set of questions will be available, allowing for random selection.

###### To ensure a seamless user experience, the questions will be displayed in an orderly manner, and users will only be able to progress to the next question after providing an answer. After each response, the program will present the correct answer and indicate whether the user's response was correct or incorrect.

###### Upon completion of the quiz, the user will be presented with several elements, including a total score reflecting their performance, a leaderboard showcasing the highest scores, an option to restart the quiz, and the ability to add their score to the leaderboard under a username of their choice.

###### If users choose to add their score to the leaderboard, they will have the opportunity to enter a name. In the event of a tie, the new score will be placed higher in the leaderboard to reflect the improved ranking.

###### To facilitate data management, the project will establish a connection to a database. This database will be responsible for storing the questions as well as the leaderboard, ensuring the information is securely managed and readily accessible.

#### Key Features:
* User Registration and Authentication: Users can create accounts and log in securely into the QuizApp
* Quiz Creation: Thanks to the questions pool in the database, there is going to be a lot of posible combinations to make a quiz for every
*  The scoreboard: A leaderboard to show how high a user has scored by answering all the questions

## Diagrams(s)


## Design Patterns used and SOLID principles

 ###### For this project, the chosen architectural structure is the Model View Controller (MVC). MVC effectively separates the application into three interconnected components, each assigned with specific responsibilities. This clear separation of concerns simplifies code comprehension and modification, as changes made to one component do not impact the others. Furthermore, the modularity of the MVC pattern enables independent development and testing of each component, facilitating code reuse in diverse contexts without requiring modifications.

###### In addition to the MVC architecture, the development approach follows the Single Responsibility Principle (SRP). This principle contributes to the creation of modular and maintainable code by assigning a single responsibility to each class. By focusing on a specific task, the code becomes easier to understand, and modifications to one class have minimal impact on other parts of the system.

###### The adherence to SRP also enhances code reusability as each class can be utilized in different contexts without modification. This promotes efficient utilization of code components, streamlining the development process and increasing adaptability.


## How to install and run the app

1. Access the Quiz Application:
    * Open your web browser (Chrome, Firefox, Safari, etc.).
    * Enter the URL or web address where the quiz 



## Acknowledgements and references 

* Fireship (2022, March 14) 10 Design Patterns Explained in 10 Minutes [video file] Retrieved from: https://www.youtube.com/watch?v=tv-_1er1mWI
* Grace M. (2023).  lectures   [PowerPoint slides]. ITESM,  Estado de México. 