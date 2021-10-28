# Barista App

This application allows the chashier to take in a customers order. The barista can login and see what orders need to be filled and complete the orders.
Completing the order removes the order from the list.

![screenshot](https://raw.githubusercontent.com/KristoferWhitfield/ProduceTracker/main/screen.JPG)

## Hows It's Made:

Made using CSS, Javascript, Node.js, JSON, Express, EJS, MongoDB.

This project uses an object that has defult inputs in case not all the buttons are clicked. To add an order, it uses a post method so the barista can see the order. 
Any barista that logs in, sees all the orders that are stored in the database. Using the put method, adds a user property onto the object and thats how the completed
list is targeted. A speech synthesis object reads out the customers order. 