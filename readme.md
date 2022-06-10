<div id="top"></div>





<!-- PROJECT LOGO -->
<br />
<div align="center">
<img src = "https://media.discordapp.net/attachments/982697573028626432/983266532903764048/unknown.png" alt = "logo">


<h3 align="center">Web Application Development Project</h3>

  <p align="center">
    Tourism Social Media and Management Site
    <br />
</div>


<details>
  <summary>Table of Contents</summary>
  <ol>
  <li>
      <a href="#setup-instructions">Setup Instructions</a>
      <ul>
        <li><a href="#clone-the-repo">Clone the Repo</a></li>
        <li><a href="#server-setup">Setup Serverside</a></li>
        <li><a href="#client-setup">Setup Clientside</a></li>
        <!-- MORE HERE -->
      </ul>
    </li>
    <li>
      <a href="#about-the-project">Introduction</a>
      <ul>
        <li><a href="#about-the-project">Summary</a></li>
        <li><a href="#motivation">Motivation</a></li>
        <!-- MORE HERE -->
      </ul>
    </li>
    <li>
      <a href="#features">Features</a>
      <ul>
        <li><a href="#main-features">Main Features</a></li>
        <li><a href="#secondary-features">Secondary Features</a></li>
        <!-- MORE HERE -->
      </ul>
    </li>
    <li>
      <a href="#contributions">Contributions</a>
      <ul>
        <li><a href="#dinh-bao-duy">Dinh Bao Duy-ITITIU19107</a></li>
        <li><a href="#ha-tien-dat">Ha Tien Dat-ITITIU19095</a></li>
        <!-- MORE HERE -->
      </ul>
    </li>
    <li><a href="#implementation">Implementation</a>
     <ul>
        <li><a href="#technology-choice">Technology Choice</a></li>
        <li><a href="#front-end-implementation">Front End Implementation</a></li>
        <li><a href="#back-end-implementation">Back End Implementation</a></li>
        <li><a href="#challenges">Challenges</a></li>
        <li><a href="#what-we-learned">What We Learned</a></li>
        <!-- MORE HERE -->
      </ul>
    </li>
    <li><a href="#diagrams">Diagrams</a></li>
    <li><a href="#future-plans">Future Plans</a></li>
    <li><a href="#references">References</a></li>
  </ol>
</details>


<!-- GETTING STARTED -->
## Setup Instructions



### Prerequisites

This is the list of software you need to run this project: 

* nodejs and npm
* Git

### Clone the Repo

Using git you clone the repository in your desired folder
```sh
git clone https://github.com/DB-Duy/WebAppProject.git
```

### Server Setup

1. Navigate to the server folder
 ```sh
   cd /WebAppProject/server
   ```
2. Install the neccessary dependencies
  ```sh
   npm install
   ```
3. Run the server
  ```sh
   npm start
   ```

What you should see after running the server:

![result after completion](https://media.discordapp.net/attachments/982697573028626432/982836198361952256/unknown.png)
### Client Setup
1. Navigate to the client folder
  ```sh
   cd /WebAppProject/client
   ```
2. Install the neccessary dependencies with the flag
  ```sh
   npm install --legacy-peer-deps
   ```
   There might be some warnings during the installation but it should be fine😁

   <b>NOTICE: Remember to add the flag - We used some deprecated packages so there might be errors if the flag is not included.</b>

3. Run the client
  ```sh
   npm start
   ```
   Your browser should then open with the site opened. You can also access the site with the URL
  ```sh
   http://localhost:3000/
   ```
<p align="right">(<a href="#top">back to top</a>)</p>



<!-- ABOUT THE PROJECT -->
## About The Project

![Product Name Screen Shot](https://media.discordapp.net/attachments/982697573028626432/982697594130145300/unknown.png?width=1379&height=676)

Websites such as Shoppee or Lazada are massively successful commercial websites for selling and buying products. Our apps apply the same design for a different field: Tourism. 

Our app aims to give users and travel agencies a medium to communicate. Make it easier too book trips, view tour summaries, leave reviews for other users as a traveler and give postings, introduce your travel plans and help customers as a traveling agency.
<p align="right">(<a href="#top">back to top</a>)</p>



### Motivation

We chose to develop this website to learn more skills about the MERN stack architecture and have a clean, useful, intuitive website for users. It has core skills for webapps such as CRUD functionality, authentication and authorization, commercial website capabilities like reviews, rating, searching, tags,... 

With all these functions, which tests the skills we learned during the course and is in demand in the market we decided to create this website for the Web Application Development course.

<p align="right">(<a href="#top">back to top</a>)</p>




## Features

According to the [project requirements](https://docs.google.com/document/d/1KiWXtGJAyW8cRGX8mjCxI2vEF1IKiJb47Jy51bxo7fo/edit) and our team's planning, we have some ideas for the feature set of our app in categorized priority: Main features and Optional features.

<p align="right">(<a href="#top">back to top</a>)</p>

### Main Features
- CRUD Functionality:

  The website has many CRUD functionality which interacts witht he database backend:
  - Posts CRUD:
    - Search through and view other user's posts.
    - Adding, editing and removing Tour Postings.
    - Leave comments and ratings.
    - Posts likes, tags, upload pictures,...
  - Account CRUD:
    - Create, edit and view your own accounts.
    - Interacts with other users and posts.
- Authentication and Authorization:
    - Users can login with site accounts or use Google login.
    - User's session is stored in the internet standard JWT (JSON web tokens).
    - User's password are hashed before storage.
    - Have access and permission to their own Tour Postings (but not ratings and comments).
    - Can leave Ratings and Comments about Postings.
### Secondary Features
  - Searching: Searchbox and tags. - Completed
  - Rating and reviews. - Completed
  - Reccomendations: Tourists get reccommened Tour Postings based on preferences. - Completed
  - Payment. - Ongoing
  - Customer support: Chatbox between Agency and Tourist. - Ongoing

## Contributions

### Dinh Bao Duy 
MSSV: ITITIU19107   
Git: [github](https://github.com/DB-Duy)

- Task Allocation
  - Planning
    - Brainstorm layout and functions
    - CRUD and Authorization/Authentication design
  - Front End design and development
    - Design and code the layout and UI/UX of the site
    - Post creation and design
    - Login flow and design
    - Post ratings function.
    - Debugging
  - Database setup
    - Setup MongoDB 
    - Design database structure
  - Serverside development
    - Implement basic Post CRUD for Agency user:
      - Create/Display/Edit/Delete Tour Postings.
    - Authorization and Authentication
      - Implement basic login for Users.
      - Implement Google Login function.

### Ha Tien Dat
MSSV: ITITIU19095 
Git: [github](https://github.com/HTD2k1)

- Task Allocation
  - Planning
    - Brainstorm concept and features
    - Backend features and quality of life improvements
  - Back End design and development
    - Post comments functio
    - Implement backend connection to database
    - Implement post details view
    - Recomendation algorithm
    - Debugging
  - Full stack development
    - Set up API between Client and Server
    - Debugging
  - Serverside development
    - Implement searching function
    - Implement Tour recommendation function




<!-- ROADMAP -->
## Implementation

### Technology Choice
- Programming language:
  - JavaScript: The most versatile and widely used programming language when it comes to web programming, has a big communitity and well documented. So it's easy to research popular architectures and design and find help in the development process.
  - HTML/CSS: Primary markup language for websites and styling in all browsers and platforms.

- <b>MERN stack architecture</b>:
  - MongoDB: A lightweight and flexible database using NoSQL design system. It allows for rapid development and modifications on the fly.
  - ExpressJS: Backend system for NodeJS that allows for fullstack integration with other plugins and MongoDB database.
  - ReactJS: One of the most popular webapp framework developed by Facebook with massive community and tutorials.
  - NodeJS: Run JavaScript locally on the terminal instead of the browser and npm which gives access to many useful packages for webapp development.

Why chose the MERN stack ?
![mernstac](https://webimages.mongodb.com/_com_assets/cms/mern-stack-b9q1kbudz0.png?auto=format%2Ccompress)

- MERN is a full-stack, following the traditional 3-tier architectural pattern, including the front-end display tier (React.js), application tier (Express.js and Node.js), and database tier (MongoDB).
- The combination means that JSON data flows naturally from front to back, making it fast to build on and reasonably simple to debug. Plus, you only have to know one programming language, and the JSON document structure, to understand the whole system!
- MERN is the stack of choice for today’s web developers looking to move quickly, while still having a reliable, strong security and feature-set.

<p align="right">(<a href="#top">back to top</a>)</p>

### Front End Implementation

Mostly concerned with ReactJS and CSS styling.

1. Styling:

  - UI Package: [Material UI Core](https://mui.com/core/)

Material UI Core is a library that allows us to import and use different components to create a user interface in our React applications. This saves a significant amount of time since the developers do not need to write everything from scratch.

The package includes many pre-configured HTML elements with professional and sleek styling for components like text box and grids.
  - Design Concept:
  ![SiteUI](https://media.discordapp.net/attachments/982697573028626432/982903161155092480/unknown.png?width=1440&height=649)

The styling of the site is similar to Shoppee where Posts are aligned as grids with the most important info like names, likedUsers, Agency is displayed and user can click these posts to get into the detailed view.

![Detailed-view](https://media.discordapp.net/attachments/982697573028626432/982904759478534154/unknown.png?width=1328&height=676)

In the details view Tourist can see information about the Tour. Users can rate, leave comments on the tour, see tour dates, locations, ect...

There is also the "You might also like" section to give recommendations about Tours the user might like.


2. Event handling and responsiveness:

A powerful tool in ReactJS are Hooks which simplifies React states and data. With Hooks, you can extract stateful logic from a component so it can be tested independently and reused. Hooks allow you to reuse stateful logic without changing your component hierarchy. 

   - UseState hook:

Use state hooks lets us declair variables and a function to set that variable in the webapp's runtime. This let us store and manage site state which persists throughout the website. [Read the Documentation](https://reactjs.org/docs/hooks-state.html)

<hr>

   - UseEffect hook:

The UseEffect hook accepts a callback function and an array of variables. The function is called when a variable passed in is changed. You can pass in an empty array of variable to run the function on load.
<hr>

Along with some other ReactJS and Redux hooks like UseDispatch, UseStyles, UseSelector,... the site is dynamic and responsive with web design techniques such as AJAX, dynamic loading, requests and JavaScript event handling.



### Back End Implementation

Mostly concerned with ExpressJS and mongoDB 

1. Database Setup:

We use mongoDB, a NoSQL database so there is no need for relational database design.
   - [Mongoose Package](https://c.tenor.com/2XVhxkbhzMcAAAAd/nikocado-bailando.gif)

Mongoose provides a straight-forward, schema-based solution to model your application data. It includes built-in type casting, validation, query building, business logic hooks and more, out of the box.

Example schema for Tour Posting:
```
{
  title: String,
  message: String, 
  name: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  comments: { type: [String], default: [] },
  likedUsers:{
    type: [String],
    default: []
  },
  createdAt:{
    type: Date,
    default: new Date()
  }
}
```

2. Backend REST API:

The Front End sends requests dynamically to the back end and gets the requested data back in JSON format. More detailed explaination in the Diagrams section. 

Example frontend request:
```
GET http://localhost:5000/posts
```
This HTTP Request asks the server for all the postings in the database.

Example backend reply:
```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 126485
ETag: W/"1ee15-S7T9gwSlo7rLFD7W8aBnqBztImU"
Date: Sun, 05 Jun 2022 08:17:52 GMT
Connection: close

[
  {
    "_id": "6263fe5481698ed4ccf76af3",
    "title": "WELCOME",
    "message": "HIIII",
    "name": "Tester",
    "creator": "62a1a33f53a48464702aaf89",
    "tags": [
      "ayo"
    ],
    "selectedFile": "data:image/jpeg;base64,",
    "likedUsers": [],
    "createdAt": "2022-05-20T07:41:01.464Z",
    "__v": 0
  }
]
```

Server returns an array of JSON objects containing the posting information.


In summary: Frontend sends HTTP Requests to the server and the server queries the database and returns the requested data. Other operations such as editing, deleting, searching also follow the same process.





### Challenges
   - Although professional assets were used, the design still looks "amateur". 
   - Unfamiliarity with ReactJS lead to messy coding, long time spent reading code and refactoring.
   - Code unorganization makes it difficult to implement new features.
   -  Utilizing deprecated packages and features makes it difficult to find resources and documentation.
   -  Time managementment and task allocation.

### What we learned

During the development of this project we learned about:
   - MERN stack Architecture
   - NoSQL database - mongoDB
   - Commercial webpage design
   - Frontend web framework - ReactJS
   - Backdend web framework - ExpressJS
   - Web App development: AJAX, HTTP Requests, authentication and authorization, sessions, cookies,...
   - Imporved our coding and specifically JavaScript skills
   - REST APIs


<p align="right">(<a href="#top">back to top</a>)</p>



## Diagrams

1. Usecase Diagram:

![UsecaseDiagram](https://media.discordapp.net/attachments/982697573028626432/982939317762678834/unknown.png?width=651&height=676)

The main usecases for the website:
- Login/Logout
- Create Tour Posting
- Register to Tour




1. Sequence Diagrams:

  - **Login**:

    - Prerequisite:
      - User must have a created account.
      - Server and database is running.

![Login-Sequence](https://media.discordapp.net/attachments/982697573028626432/982950549605453884/unknown.png)

**Notice**: User passwords are encrypted in the database. The validation process compares the hashed password only. The clients also encrypts the password before sending the HTTP request so this login method ensures security for users.

The Sequence Diagram is similar with the Google login feature. Replace the Server and Database with Google API.
<hr>

- Create a Posting

  - Prerequisite:
    - User must be logged in with an account.
    - Server and database is running.

![Login-Sequence](https://media.discordapp.net/attachments/982697573028626432/982956432406249502/unknown.png?width=632&height=676)

<hr>

- Register to a Tour (To be implemented)
  - Prerequisite:
    - User must be logged in with a Tourist account.
    - Server and database is running.


![Register-Sequence](https://media.discordapp.net/attachments/982697573028626432/983262157376475166/unknown.png?width=632&height=610)
<p align="right">(<a href="#top">back to top</a>)</p>

<hr>

## Future Plans

- Front End Improvements:
  - Improve UI/UX for more sleek and professional look.
  - Add state transitions such as loading icons.
  - Add more information such as about page, authors page.
  - Code cleaning.
- Back End Improvments:
  - Apply caching on frequent queries for faster speeds.
  - General optimizations.
  - Upgrade software to newer versions.

## References

- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Youtube Tutorial](https://www.youtube.com/playlist?list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3)
- [MongoDB's Tutorial to MERN Stack](https://www.mongodb.com/languages/mern-stack-tutorial)
- Various [npm packages](https://docs.npmjs.com/) used in this project
- International University Web Application Development Course