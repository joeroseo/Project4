<template>
  <div class="page-container">
    <div class="form-container">
      <pre> <strong>

This app is on github at https://github.com/joeroseo/Project4 and has
a ReadMe to provide install instructions. It is based on Professor 
Richard Lentz's Project4 of the COP CIS-4325 course.  

It is a Vue 3 app (A javascript front end UI tool) connected
with a Firebase backend database.  Firebase is 
Backend-as-a-Service (BaaS) platform that is free for low 
volume connections or paid for higher connections.  It is running
on a free Azure subscription.  The details are in the github ReadMe.

Part of the app is taken from the BezKoder's tutorial  
https://www.bezkoder.com/vue-3-firebase/
In addition to this tutorial he also has many other excelent ones
covering Vue JS, Node JS (a backend javascript tool) as well as others.

An excelent tutorial on Vue 3 is Udemy's course 
The Complete Guide (incl. Router & Composition API) which can 
often be found on sale for less than $15

Note: There are many areas where this app could be improved and may 
have redundant code.  It was put together with a limited knowledge 
of Vue and Firebase. 

    </strong>  </pre>
    </div>
  </div>
</template>

<style scoped>
.page-container {
  width: 85%;
  height: 125%;
  display: flex;
  transform: translateX(15px);
}

.form-container {
  width: 90%;
  border: 1px solid black;
  padding: 10px;
  transform: translateX(65px);
  height: 105%;
  margin-bottom: 20px;
}

.flex-container {
  display: flex;
  align-items: flex-start;
  justify-content: left;
  margin-bottom: 10px;
}

* {
  font-size: 13px;
}

.btn {
  border: 0.25px solid grey;
}
</style>
