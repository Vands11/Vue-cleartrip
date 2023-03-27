





<template>
    <div class="card-container">
       
        <h3>Vashnavi Chauhan</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        <a href="" class="follow"
          ><i class="fa fa-user-plus" aria-hidden="true"></i> Follow</a
        >
        <a href="" class="message"
          ><i class="fa fa-commenting-o" aria-hidden="true"></i> send message</a
        >
      </div>
    

</template>
<style scoped>
body {
    font-family: sans-serif;
    background-color: #f8e9e2;
    text-align: center;
  }
  /* div that contain card */
  .card-container {
    margin: auto;
    width: 700px;
    height: 320px;
    background-color: white;
    padding: 10px 20px;
    border-radius: 20px;
    margin-bottom: 30px;
    box-shadow: 0px 20px 10px 0px rgb(194, 189, 189);
  }
  
  /* image inside the div */
  .card-container img {
    margin-top: 50px;
    height: 90px;
    width: 90px;
    border-radius: 10px;
    box-shadow: 0px 0px 3px 9px rgb(241, 238, 238);
  }
  
  /* para inside card */
  .card-container p {
    margin-left: 20px;
    margin-bottom: 30px;
  }
  
  /* links inside card */
  .card-container a {
    color: black;
    text-decoration: none;
    padding: 10px 20px;
    border-radius: 20px;
  }
  
  .follow {
    background: linear-gradient(to right, #e75750, #de854a 120%);
  }
  .message {
    background-color: #f8e9e2;
  }
  
</style>