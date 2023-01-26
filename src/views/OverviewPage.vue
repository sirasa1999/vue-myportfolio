<template>
   <div class="hello">
    <h1> overview page.</h1>
   </div>
   <div class="bg-gray-600 p-2">
    <div class="bg-gray-500 text-white p-1" >
       <strong>Sirasa Tuladhar</strong> <br/>
       <span> Developer </span> <br/>
       <button class=" border p-1 rounded-lg hover:bg-black-100 dark:hover:bg-purple-700"> Download Resume</button>
    </div>
   </div>
 </template>
 
 <script>
 export default {
   name: 'NavigatorPage',
   props: {
     msg: String
   }
 }
 </script>
 
 <!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped>
 </style>
 