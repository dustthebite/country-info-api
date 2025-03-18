**Country info api

This api can fetch info about countries and also store holidays in user's calendar database. It uses Node as runtime, TypeScript as language, Express as backend framework, MongoDB as DB and Mongoose as ORM.

Installation:
1) Copy this project in any way you like
2) cd into project's folder on your PC
3) Run npm install . This command will install node_modules .
4) Open project in terminal, then run npx ts-node src/index.ts . This will start the server

Accessing DB
1) In order to access collections of data on your PC, you will need to use MongoDB Compass or MongoDB Shell. In their respective documention pages, you can find all the info you might need on installation and connection.
   MongoDB Compass docs https://www.mongodb.com/docs/compass/current/
   MongoDB Shell docs https://www.mongodb.com/docs/mongodb-shell/install/
2) In project's folder locate .env file. Inside, you will find a MongoDB connection string strored inside MONGO_URI variable. Copy value of this variable
3) Use this connection string to connect to MongoDB cluster by using MongoDB Compass or MongoDB Shell

Testing the app
1) Open Postman or any other software for api testing
2) Here are requests that you can use
   GET http://localhost:3000/countries/   - this will return list of countries
   
   GET http://localhost:3000/countries/{countryCode}  - this will return info about specific country by its country code.
   Example string: http://localhost:3000/countries/UA will return info about Ukraine
   
   POST http://localhost:3000/users/{userId}/calendar/holidays  - this will store holidays as events in users collection. This request also needs a body.
   Example string: http://localhost:3000/users/1/calendar/holidays
   Example body: 
   {
    "countryCode": "US",
    "year": 2025,
    "holidays": ["New Year's Day", "Independence Day"]
  }
    This example will strore US holidays New Year's Day and Independence Day of year 2025 in calendar of user with userId of 1
