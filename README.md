# take home assessment
<p align="center">
<img src="https://user-images.githubusercontent.com/25188844/129267229-a2aec4a7-dc3a-426c-ba6e-f4d36cc00dde.png" width="60%">
</p>
 
This is a website that I built for a take home project. The assignment was to build both the front-end and back-end utilizing modern tools. The goal for the website was to be able to display employee data on screen from the database.


<h3>Features:</h3>

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

<h3>Getting Started:</h3>

<h4>Technologies Used:</h4><br />
<a href="https://nodejs.org/en/">Node.js</a><br />
<a href="https://expressjs.com/en/starter/installing.html">Express</a><br />
<a href="https://mongoosejs.com/docs/index.html">Mongoose</a><br />
<a href="https://docs.mongodb.com/manual/tutorial/install-mongodb-on-os-x/">MongoDB</a><br />
<a href="https://reactjs.org/">React.js</a><br />
<a href="https://brew.sh/">Homebrew</a><br />
<a href="https://www.npmjs.com/package/nodemon">Nodemon</a><br />



<h3>Setup</h3>


First clone or download this repository.
```
gh repo clone swimtrunks/database-app
```

Navigate to the frontend folder:

```
cd frontend
```
and install depenedencies.
```
npm install
```
then again for the backend:
```
cd backend
```
```
npm install 
```

The database is hosted on the cloud via <a href="https://www.mongodb.com/cloud/atlas/lp/try2?utm_source=google&utm_campaign=gs_footprint_row_search_brand_phrase_intent_test_atlas_desktop&utm_term=mongo&utm_medium=cpc_paid_search&utm_ad=p&utm_ad_campaign_id=11295578158&gclid=CjwKCAjw092IBhAwEiwAxR1lRj_Zk4uxy46SPUxx9xH8rJRmWhyq71_RdZ3qqSKR3-V9y0VinZ4yQBoCfqUQAvD_BwE">Mongo Atlas</a> and to access it, create a .env file and place it in the backend folder root. 
Copy and past the following connection string into that file and save it. (I have included the username and password in the string for ease of use)

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
I have configured the react script to start on port 3002. After this the page will open in your default browser.

<h3>Up Next:</h3>
<h4>Future Features:</h4>
- Implement Search and Filter, possibly utilizing query strings<br />
- More Error Handling in form submission: Using react-hook-forms adds default error handling into its functionality. <br />
- Form Validation<br />
- Adding Pagination to employee list.<br />

<h3>Key Takeaways:</h3>

This project was really interesting because it gave me an opportunity to have more experience with server-side development. In this regard I used Node.js, Express.js and MongoDB with Mongoose. I went the MERN route because I knew Javascript and wanted to explore what it could do on the back-end. Using Mongoose and Express was also a pleasant surprise as it has many similarities to Node.js in syntax and being able to start writing middleware was also very helpful when working with building the API. Working with React is a recent development for me and I wanted to challenge myself further by trying to use it in this project to gain even more familiarity with. It was a challenge going from the traditional HTML, CSS/SASS, Javascript to the MERN stack but dealing with components, React router, JSX and imports turned out to be very helpful. The size of the project was relatively small but if I were to make anymore components I would have definitely started implementing a new folder structure to help with organization and ease of use. 

Overall, I am very happy with the way this project turned out and I learned quite a bit while working on it. I look forward to improving the code and growing my skill base even further. 


