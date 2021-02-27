# GiggleBytes

## Deployed At:
INSERT DEPLOYMENT LINK

## Description

GiggleBytes allows logged-in users to view a list of jokes by a particular comedian or topic (chosen from  dropdown menus in the navigation bar), and then "add a laugh" to their favorite jokes. A random joke is displayed immediately after the user logs in.

Joke lists will be displayed in descending order based on the number of users who have added a laugh to each joke. The user's favorite jokes will also be displayed on a personal favorites page, and the user will have the ability to unlike and remove jokes from this page. 

The app will feature full user authentication and will allow for the user to create an account for a unique email, login securely, update passwords, and delete an account. 

In the future, we would like for users to be able to submit jokes that would be subject to a Wikipedia-style verification process. Users would also have access to special feature tiers based on activity-level on the app. We would also like the jokes to link to video content if available.


## Screenshots

Login Page
![Login Page]()

Post-Login Main Page
![Post-Login Main Page]()

Comedian-Filtered Jokes Page
![Comedian-Filtered Jokes Page]()

Topic-Filtered Jokes Page
![Topic-Filtered Jokes Page]()

Favorites Page
![Favorites Page]()

Account Up Page
![Favorites Page]()

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
- The logistics of arranging words from title to generate gifs without "weak" words (ie: the, a, etc) or punctuation. After a "focus group", I decided that my original strategy of simply eliminating "weak" words using the replace method made it too difficult for the player to discern the title using just gifs. I ended up restructuring the functionality to a large degree using the split method followed by tests for equality of "weak" words / punctuation using replace. 
- Responsive styling depending on number of gifs
- Creating arrays from lists...had surprising difficulty creating CSV files in the proper format with comma separated values (it's in the name!) and quotes around strings
- Using global variables across multiple js files. Since this didn't impact functionality beyond a possible impact on speed, I decided to relegate this to a future goal and focus on other functionality goals.


## Future Goals
- Users would be able to submit jokes that would be subject to a Wikipedia-style verification process. 
- Users would have access to special feature tiers based on activity-level on the app. 
- Jokes and comedians would link to video/audio content if available.
- A lot more jokes and comedians.
