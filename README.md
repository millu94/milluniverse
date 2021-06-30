Hello and welcome! This is my final project at CodeClan.

Day 1 objectives:

-Get back end up and running using Java and Spring

Day1 outcomes:

After signing off the project with an instructor yesterday afternoon, I knew that my first task would be to get
the back-end operational. Up until this point I had a very loose skeleton prototype for the website, and the
shop items were hardcoded in the front end. 

Today I generated a new Spring project inside the millu_web_server folder and created the necessary file 
structure to perform basic CRUD functionality with my products' API. The products API would be providing the 
shop with a list of products with names, descriptions, prices, and images.

The biggest challenge I faced today was the all important step of linking the back end with the front end. Once
I had proof that I could Create, Read, Update, and Delete items inside Insomnia, I was ready to go to my client
folder and start requesting the API so that it's information could be displayed in the front end. Initially I 
could not think of where the fetch requests might look for http:://localhost8080, but after discussing my issue
with an instructor I found out that you can list a proxy URL at the bottom of the package.json file. After 
that all that was need was a cautionary npm install and npm start, and my products seeded from the server side 
were displaying in the front end.

Tomorrow I will start my day with resuming this handy tutorial (https://www.youtube.com/watch?v=377AQ0y6LPA&
t=376s , currently at 24.55) and see where to go from there. According to the MVP, the next step is ensure that 
a customer can add products to basket, checkout, and pay for them.

Day 2 objectives:

-add items to cart and view basket

First I altered the Header.js file so that it had its own folder, and a styles.js file. The header now has a 
shopping cart icon with as badge indicating how many items are in the basket.

Then I added basket and a setBasket array using useState. I created a fetchBasket (that would continually check how
many items were in the basket) and a handleAddToBasket that would add the corresponding item to the basket whenever
the user clicked on it. In order to achieve the latter task I had to remind myself on how to use the spread operator
(...) as I was getting loads of errors prior to this realisation. After I managed to console log the expected 
amount of items in the basket, I then passed the length of the basket array as a prop to the number badge that
would display how many items were in the basket. One thing that I have noticed is that if I click on a different 
section of the website, I lose all the items in the basket. Ideally I would like to retain all the items in the 
basket no matter what part of the website I am visiting.

I finished off today by working on the basket/checkout feature.
