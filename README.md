Hello and welcome! This is my final project at CodeClan.

Day 1 objectives:
    -Get back end up and running using Java and Spring
Day1 outcomes:
    After signing off the project with an instructor yesterday afternoon, I knew that my first task would be to get the back-end operational. Up until this point I had a very loose skeleton prototype for the website, and the shop items were hardcoded in the front end. 
    
    Today I generated a new Spring project inside the millu_web_server folder and created the necessary file structure to perform basic CRUD functionality with my products' API. The products API would be providing the shop with a list of products with names, descriptions, prices, and images.

    The biggest challenge I faced today was the all important step of linking the back end with the front end. Once I had proof that I could Create, Read, Update, and Delete items inside Insomnia, I was ready to go to my client folder and start requesting the API so that it's information could be displayed in the front end. Initially I could not think of where the fetch requests might look for http:://localhost8080, but after discussing my issue with an instructor I found out that you can list a proxy URL at the bottom of the package.json file. After that all that was need was a cautionary npm install and npm start, and my products seeded from the server side were displaying in the front end.

    Tomorrow I will start my day with resuming this handy tutorial (https://www.youtube.com/watch?v=377AQ0y6LPA&t=376s , currently at 24.55) and see where to go from there. According to the MVP, the next step is ensure that a customer can add products to basket, checkout, and pay for them.
