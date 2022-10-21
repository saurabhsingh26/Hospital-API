# Hospital-API
1. config - is for setup mongoose, passport, googleOAuth2 and custom middleware.

2. controller - is for controller

3. models - is for schema's

4. routes - is for setup routers

5. index.js - this is the root of this project

6. package.json - this contain all the meta information of the project

#how to start a project --->

1. create index.js -
2. run the command npm init - it will take all the information about project like author, github etc and create package.json
3. install express using npm install express
4. import express in index.js
5. install mongoose using npm install mongoose
6. install passport using npm install passport
7. install passport jwt using - npm install passport-jwt - A Passport strategy for authenticating with a JSON Web Token.
8. require all the strategy in index.js file and start the project.

Working with postman

1. Doctor registration - http://localhost:3201/api/v1/doctors/register
result - <img width="635" alt="image" src="https://user-images.githubusercontent.com/80765330/197285153-7ff19a9b-124a-4823-a024-5a9bf50f3a27.png">

2. Doctor login - http://localhost:3201/api/v1/doctors/login
result - <img width="637" alt="image" src="https://user-images.githubusercontent.com/80765330/197285426-30668bdc-a0ad-4ee1-a2d6-3f00856d2c57.png">

3. Patient registration - http://localhost:3201/api/v1/patients/register
result - <img width="638" alt="image" src="https://user-images.githubusercontent.com/80765330/197285658-79fae3ee-8b5d-4d9a-8c59-ba3836b3f455.png">

4. Create report with status by doctor - http://localhost:3201/api/v1/patients/6352f0312365d34f3acb17dc/create_report
result - <img width="632" alt="image" src="https://user-images.githubusercontent.com/80765330/197285895-3633a964-c83b-4f83-98e7-4a3c070ddff6.png">

5. Search all the reports by patient id - http://localhost:3201/api/v1/patients/6352f0312365d34f3acb17dc/all_reports
result - <img width="636" alt="image" src="https://user-images.githubusercontent.com/80765330/197286024-aa456ccd-757e-4a07-956d-0e2f1b7a124f.png">

6. Search report by status - http://localhost:3201/api/v1/reports/Negative
result - <img width="632" alt="image" src="https://user-images.githubusercontent.com/80765330/197286165-79921452-016f-4315-9cbd-c1a711d3b479.png">

