# UPDATED: take home assessment
<p align="center">
<img src="https://user-images.githubusercontent.com/25188844/129267229-a2aec4a7-dc3a-426c-ba6e-f4d36cc00dde.png" width="60%">
</p>
 
This is a website that I built for a take home project. The assignment was to build both the front-end and back-end utilizing modern tools. The goal for the website was to be able to display employee data on screen from the database.


<h3>Features:</h3>

1. Used a modern front-end framework : React.js
2. Use of a modern API
3. Use of client-side router: Did this with React router.
4. Implemented animation
5. Bulit forms for creating, updating and deleting employees with required field validation
6. Use source data from a third party person API: randomuser.me
7. Paginated List (front-end)
8. Search and Filter by user input (front-end)
9. Include a README: this is it!




https://user-images.githubusercontent.com/25188844/130249842-6874f4e3-ebd5-428e-9cbd-b063e1542775.mp4




<h3>Design Updates: </h3>
I also made the site responsive with mobile stylings and a fully functioning mobile menu. I also added a new footer section with dummy links. One other slight change is that i split the "forms" page into 2 pages: "Register" and "Edit Employee" as most webpages have seperate portals for new or exisiting users. 
<br /><br /><br />

<p align="center">
<img src="https://user-images.githubusercontent.com/25188844/130247177-b01b9cb9-c329-46d3-9d6e-9e18e13f3ecb.png" alt="mobile styling" width="70%">
<br />
(new mobile styles)
</p>

<br /><br />

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
1. I implemented every suggested feature from the list except for one: Testing. This is something I would like to become better with and I will be trying to learn Jest and Mocha going forward.<br />
2. In the form section I would have liked to create an alert div that would pop up at the bottom corner, alerting the user of a successful form submit. As of right now the form simply resets. 




