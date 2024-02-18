After retrieving the source code from https://github.com/joeroseo/Project4

1.  Setup Firebase as described in Firebase_Setup.docx

2.  Update the values below in src/firebase.js using those provided in the Firebase 
  apiKey: "XXXXXXXXXXX",
  authDomain: "XXXXXXXXXXX",
  projectId: "XXXXXXXXXXX",
  storageBucket: "XXXXXXXXXXX",
  messagingSenderId: "XXXXXXXXXXX",
  appId: "XXXXXXXXXXX"

3.  To run locally cd to the root of the downladed files (i.e the one with this ReadMe) 

a. Download and install npm from https://nodejs.org/en/download

b. type npm run serve

4. To use the free Microsoft Azure Static Web services

a. Create a GitHub account or log into an existing one 

b. Create a new repository

c. Remove the existing  .git folder in the root of the project folder on the local drive

d. Push the new project to the new repository you own

e. Follow the instructions to setup the Vue app on Azure using:
 https://learn.microsoft.com/en-us/azure/static-web-apps/deploy-vue?pivots=github
