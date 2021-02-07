# twilio-sms-auth-api-node
This is a Authentication/Verification using SMS service from Twilio. A backend on node-js for apps and websites to build further API on.

To just run the node app:

1. Install the node modules
2. Add an .env file in the node-app folder with the following variables data filled
```
  PORT=
  MONGO_URL=
  MONGO_DB=
  MONGO_USER=
  MONGO_PASSWORD=
  MONGO_PORT=
  JWT_SECRET=
  TWILIO_SID=
  TWILIO_KEY=
  TWILIO_PHONE=
  ```
  "All the variables are important and the server will throw error without"
  
3. run `yarn dev` for development server and `yarn start` for normal node server

To run the docker app, fill the env file, and do a `docker-compose up`
