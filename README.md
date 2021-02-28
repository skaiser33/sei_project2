# GiggleBytes

## Deployed At:
http://gigglebytes.herokuapp.com

## Description

GiggleBytes allows logged-in users to view a list of jokes by a particular comedian or topic (chosen from  dropdown menus in the navigation bar), and then "add a laugh" to their favorite jokes. A random joke is displayed immediately after the user logs in.

Joke lists are displayed in descending order based on the number of users who have added a laugh to each joke. The user's favorite jokes are also  displayed on a personal favorites page, and the user has the ability to unlike and remove jokes from this page. 

The app features full user authentication and allows for the user to create an account for a unique email, login securely, update passwords, and delete an account. 

In the future, we would like for users to be able to submit jokes that would be subject to a Wikipedia-style verification process. Users would also have access to special feature tiers based on activity-level on the app. We would also like the jokes to link to video content if available.


## Screenshots

Landing Page
![Landing Page](https://i.imgur.com/6FhWZT4.png)


Signup Page
![Signup Page](https://i.imgur.com/nkW4wAr.png)


Login Page
![Login Page](https://i.imgur.com/lDTNfOM.png)


Comedian-Filtered Jokes Page
![Comedian-Filtered Jokes Page](https://i.imgur.com/1cgE4gk.png)


Topic-Filtered Jokes Page
![Topic-Filtered Jokes Page](https://i.imgur.com/2VMaer4.png)


Favorites Page
![Favorites Page](https://i.imgur.com/ZgnVvZB.png)


Account Settings Page
![Account Settings Page](https://i.imgur.com/RhR7uHm.png)

## Technologies Used
- Javascript
- Node.js
- Sequelize
- Express
- EJS
- CSS
- AJAX
- Bcrypt
- Passport (Local Strategy)
- VSCode
- Google Chrome Developer Tools

## User Stories
- As a new user, I want to be able to create a secure account and be logged in automatically. 
- As an existing user, I want to be able to log in securely and log out when I am done using the app.
- As a user, I want to be able to update my password.
- As a user, I want to be able to delete my account.
- As a user, I want to choose from a menu of comedians or topics and be presented with a list of jokes based on my selection.
- As a user, I want to be able to "Add a laugh" to a joke that I like.
- As a user, I would like the menu of comedians/topics to be available from any page on the app.
- As a user, I want all of my liked jokes to be presented on a personal favorites page and remove it from this list if I change my mind later.
- As a user, I want the jokes from my selected comedian/topic to be displayed in descending order based on how many users have added a laugh.
- As a user, I want an intuitive and clean UI.
- As a user, I want a responsive design that is equally user-friendly on mobile devices and desktop screens.

## Data Models and ERD

![Data Models and ERD](https://i.imgur.com/FM6gRPi.png)

## User Flow Diagram

![User Flow Diagram](https://i.imgur.com/CXfMvEr.jpg)


## Wireframes

### Mobile
Landing Page		

![Landing Page](https://i.imgur.com/os92bvU.png)


Signup Page

![Signup Page](https://i.imgur.com/U5G4Zdz.png)


Login Page

![Login Page](https://i.imgur.com/kXQuTXz.png)


Home Page (Post-Login)

![Home Page (Post-Login)](https://i.imgur.com/3xVae9q.png)


User Favorites Page

![User Favorites Page](https://i.imgur.com/BsZzGQb.png)
 
### Desktop
Landing Page

![Landing Page](https://i.imgur.com/NB7sf0S.png)
 

Signup Page

![Signup Page](https://i.imgur.com/xYQlMuJ.png)


Login Page 		

![Login Page](https://i.imgur.com/BDFXLj4.png)


Jokes Displayed By Comedian Selection

![Jokes Displayed By Comedian Selection](https://i.imgur.com/7934URR.png)


User Favorites Page

![User Favorites Page](https://i.imgur.com/nv4MpgF.png)


## Major Hurdles
- Seeding a relatively large database with multiple models and varied associations. While this went relatively smoothly, it was still a challenge to setup.
- Finding the ideal pace for pull requests in a collaboration with a relatively quick turnaround on the project. The learning curve definitely took up a substantial portion of the total project time. 
- Variable scoping and object definitions for routes/EJS. 
- Ideal navbar styling for responsive design. Our initial mobile navbar proved to be unfeasible for a responsive design and we had to re-think it.
- Retrieving a value from a select element (dropdown menu). Although we were successful in the end, it took a lot of brainpower and man-hours to use dropdown menus to feed our routes.

## Major Victories
- In the span of a week, three strangers became a full stack development team. 
- We set ambitious goals with our modeling and associations in our proposal, and we were able to make everything work according to plan.
- Although we had to rethink aspects of our styling once we reached full functionality, we stuck with the mobile first approach and learned a lot in the process.

## Future Goals
- Refactor nested .then functions as async await (along with general refactoring of code that appears in similar iterations across multiple files).
- Users would be able to submit jokes that would be subject to a Wikipedia-style verification process. 
- Users would have access to special feature tiers based on activity-level on the app. 
- Jokes and comedians would link to video/audio content if available.
- A lot more jokes and comedians!