# take home assessment
<p align="center">
<img src="https://user-images.githubusercontent.com/25188844/129267229-a2aec4a7-dc3a-426c-ba6e-f4d36cc00dde.png" width="60%">
</p>
 
This is a website that I built for a take home project. The assignment was to build both the front-end and back-end utilizing modern tools. The goal for the website was to be able to display employee data on screen from the database. I did design a quick logo (3 variants along with on of them having a graphic) and to made it responsive with Flexbox. If the site was larger or had more going on I would have probably opted for CSS Grid. 


FEATURES:

I implemented a most of the suggested features from the criteria such as:
1. Used a modern front-end framework : React.js (with hooks for the forms)
2. Use of a modern API: Node.js
3. Use of client-side router: Did this with React router.
4. Implemented animation
5. Create forms for creating, updating and deleting employees
6. Use source data from a third party person API: randomuser.me
7. Include a README: this is it!


https://user-images.githubusercontent.com/25188844/129264216-c8237d88-df2e-4062-821e-75c560d2d188.mp4


I separated the project into 2 folders: frontend & backend. There are two start scripts to get both the server and client up and running. 

<h3>SETUP</h3>

First be sure to install all dependencies. You can navigate to the project in a Terminal ( I used iTerm or the built in Terminal in VSCode) and from there get to the frontend folder and type:

```
npm install 
```

Then hit enter. Navigate to the backend and do the same.

To access the database we will need to create a .env file and place it in the backend folder. We only need to add the connection string to this file which in this case would be:

```
ATLAS_URL = mongodb+srv://new-user:postlight123@mploydb1.4tc0u.mongodb.net/mploydatabase
```

While we are still in the backend folder, we can move to starting the server:

```
npm run devStart
```

Then hit enter. Moving on to the frontend folder you just type:

```
npm run start
```

I always start them in this order because React is more polite and will ask since something is running on port 3000 should it run on something different, just type : 

```
y
```

After this React should be booting up the webpage in your selected default browser.

<h3>TECHNOLOGIES</h3>

This project was really interesting because it gave me an opportunity to have more experience with server-side development. In this regard I used Node.js, Express.js and MongoDB with Mongoose. I went the MERN route because I knew Javascript and wanted to explore what it could do on the back-end. Using Mongoose and Express was also a pleasant surprise as it has many similarities to Node.js in syntax and being able to start writing middleware was also very helpful when working with building the API.
Working with React is a recent development for me and I wanted to challenge myself further by trying to use it in this project to gain even more familiarity with. It was a challenge going from the traditional HTML, CSS/SASS, Javascript to the MERN stack but dealing with components, React router, JSX and imports turned out to be very helpful. The size of the project was relatively small but if I were to make anymore components I would have definitely started implementing a new folder structure to help with organization and ease of use. 

<h3>UP NEXT</h3>

I will continue to research and learn server-side development and work more with React.

In regards to the actual app itself, I want to work more with **implementing a search and filter feature**, as well as **pagination**. I already started working on the filter function utilizing a similar form as the one in “update employee records” and built out a filter to view by “department”. I have this in a test branch and will continue to work on it for the coming days. I want to implement more form validation as well. **Form validation** and error handling is also something I want to implement. I would add the search bar under the nav bar. Maybe even keeping it hidden then using animation to reveal it when a link is clicked in the navbar. I would have added a footer as well with social links and icons. In regards to accessiblity and design I kept it pretty simple but I thikn the text in the employee cards could be a little heavier to imporve readablity. 

Overall, I am very happy with the way this project turned out and I learned quite a bit while working on it. I look forward to improving the code and growing my skill base even further. 


