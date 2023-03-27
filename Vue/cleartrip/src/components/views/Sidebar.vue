




<template>
    <div>
     
    <div class="sidebar">
  
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-airplane" viewBox="0 0 16 16">
        <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Zm.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1c-.213 0-.458.158-.678.599Z"/>
      </svg>   <a href="#news">My Flights</a>
    <a href="#news">Hotels</a>
    <a href="#contact">offers</a>
    <a href="#about">My trips</a>
    <a href="#about">Cleartrip For work</a>
    <a href="#about">Support </a>
  
      </div>
    <div class="content">
   
      <h1><svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="orangered" class="bi bi-tags-fill" viewBox="0 0 16 16">
        <path d="M2 2a1 1 0 0 1 1-1h4.586a1 1 0 0 1 .707.293l7 7a1 1 0 0 1 0 1.414l-4.586 4.586a1 1 0 0 1-1.414 0l-7-7A1 1 0 0 1 2 6.586V2zm3.5 4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
        <path d="M1.293 7.793A1 1 0 0 1 1 7.086V2a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l.043-.043-7.457-7.457z"/>
      </svg> Book Tickets Online</h1>
        <br/>
        <div class="card-container">
       
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-airplane" viewBox="0 0 16 16">
            <path d="M6.428 1.151C6.708.591 7.213 0 8 0s1.292.592 1.572 1.151C9.861 1.73 10 2.431 10 3v3.691l5.17 2.585a1.5 1.5 0 0 1 .83 1.342V12a.5.5 0 0 1-.582.493l-5.507-.918-.375 2.253 1.318 1.318A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.354-.854l1.319-1.318-.376-2.253-5.507.918A.5.5 0 0 1 0 12v-1.382a1.5 1.5 0 0 1 .83-1.342L6 6.691V3c0-.568.14-1.271.428-1.849Zm.894.448C7.111 2.02 7 2.569 7 3v4a.5.5 0 0 1-.276.447l-5.448 2.724a.5.5 0 0 0-.276.447v.792l5.418-.903a.5.5 0 0 1 .575.41l.5 3a.5.5 0 0 1-.14.437L6.708 15h2.586l-.647-.646a.5.5 0 0 1-.14-.436l.5-3a.5.5 0 0 1 .576-.411L15 11.41v-.792a.5.5 0 0 0-.276-.447L9.276 7.447A.5.5 0 0 1 9 7V3c0-.432-.11-.979-.322-1.401C8.458 1.159 8.213 1 8 1c-.213 0-.458.158-.678.599Z"/>
          </svg>  <i>Book you Tickets Now</i>
<br/> <br/>

<form>
<div id="radio">
    
            <label class="radio-inline" for="One way" > <b>One Way</b> </label>
              <input type="radio" name="way"  value="One way" v-model="radiobuttons">
           
            
            <label class="radio-inline" for="Round Trip" >  <b>Round Trip</b> </label>
              <input type="radio" name="way"  value="Round Trip" v-model="radiobuttons">
          
            <label class="radio-inline" for="Multi City"> <b>Multi City</b>        </label>
              <input type="radio" name="way"  value="Multi City" v-model="radiobuttons">
     

            </div>

       
          <br/>
          <br/>
         
          <label For="From"><b>From</b></label>
          <br/>
          <select v-model="Form" >
            <option value="">Select</option>
            <option value="Andhra Pradesh">Andhra Pradesh</option>
            <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
            <option value="Arunachal Pradesh">Arunachal Pradesh</option>
            <option value="Assam">Assam</option>
            <option value="Bihar">Bihar</option>
            <option value="Chandigarh">Chandigarh</option>
            <option value="Chhattisgarh">Chhattisgarh</option>
            <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
            <option value="Daman and Diu">Daman and Diu</option>
            <option value="Delhi">Delhi</option>
            <option value="Lakshadweep">Lakshadweep</option>
            <option value="Puducherry">Puducherry</option>
            <option value="Goa">Goa</option>
            <option value="Gujarat">Gujarat</option>
            <option value="Haryana">Haryana</option>
            <option value="Himachal Pradesh">Himachal Pradesh</option>
            <option value="Jammu and Kashmir">Jammu and Kashmir</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Karnataka">Karnataka</option>
            <option value="Kerala">Kerala</option>
            <option value="Madhya Pradesh">Madhya Pradesh</option>
            <option value="Maharashtra">Maharashtra</option>
            <option value="Manipur">Manipur</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Mizoram">Mizoram</option>
            <option value="Nagaland">Nagaland</option>
            <option value="Odisha">Odisha</option>
            <option value="Punjab">Punjab</option>
            <option value="Rajasthan">Rajasthan</option>
            <option value="Sikkim">Sikkim</option>
            <option value="Tamil Nadu">Tamil Nadu</option>
            <option value="Telangana">Telangana</option>
            <option value="Tripura">Tripura</option>
            <option value="Uttar Pradesh">Uttar Pradesh</option>
            <option value="Uttarakhand">Uttarakhand</option>
            <option value="West Bengal">West Bengal</option>
</select>
<br/>
<br/>
            <label For="To"><b>To</b></label>
            <br/>
            <select v-model="To">
              <option value="">Select</option>
              
              <option value="Andhra Pradesh">Andhra Pradesh</option>
              <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
              <option value="Arunachal Pradesh">Arunachal Pradesh</option>
              <option value="Assam">Assam</option>
              <option value="Bihar">Bihar</option>
              <option value="Chandigarh">Chandigarh</option>
              <option value="Chhattisgarh">Chhattisgarh</option>
              <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
              <option value="Daman and Diu">Daman and Diu</option>
              <option value="Delhi">Delhi</option>
              <option value="Lakshadweep">Lakshadweep</option>
              <option value="Puducherry">Puducherry</option>
              <option value="Goa">Goa</option>
              <option value="Gujarat">Gujarat</option>
              <option value="Haryana">Haryana</option>
              <option value="Himachal Pradesh">Himachal Pradesh</option>
              <option value="Jammu and Kashmir">Jammu and Kashmir</option>
              <option value="Jharkhand">Jharkhand</option>
              <option value="Karnataka">Karnataka</option>
              <option value="Kerala">Kerala</option>
              <option value="Madhya Pradesh">Madhya Pradesh</option>
              <option value="Maharashtra">Maharashtra</option>
              <option value="Manipur">Manipur</option>
              <option value="Meghalaya">Meghalaya</option>
              <option value="Mizoram">Mizoram</option>
              <option value="Nagaland">Nagaland</option>
              <option value="Odisha">Odisha</option>
              <option value="Punjab">Punjab</option>
              <option value="Rajasthan">Rajasthan</option>
              <option value="Sikkim">Sikkim</option>
              <option value="Tamil Nadu">Tamil Nadu</option>
              <option value="Telangana">Telangana</option>
              <option value="Tripura">Tripura</option>
              <option value="Uttar Pradesh">Uttar Pradesh</option>
              <option value="Uttarakhand">Uttarakhand</option>
              <option value="West Bengal">West Bengal</option>
           
          </select>
        
   <br/>
   <br/>
   <h6><b>Depart On</b></h6>
   <input type="date"  id="dateofbirth" class="dates" v-model="date">


   <br/>
   <br/>
<br/>
  

   <div class="container">
    <div class="row">
      <div class="col-sm-3">
        <label For="Adults"><b>Adults</b></label>
        <br/>
        <select v-model="Adult">
          <option value="">Select</option>
          <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
       
      </select>
    <p>>12 yrs</p>
      </div>
      <div class="col-sm-3">
        <label For="Children"><b>Children</b></label>
        <br/>
        <select v-model="child">
          <option value="">Select</option>
          <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
    
       
      </select>
          <p>2-11 yrs</p>
      </div>
      <div class="col-sm-3">
        
        <label For="Infants"><b>Infants</b></label>
        <br/>
        <select v-model="Infant">
          <option value="">Select</option>
          <option value="0" >0</option>
          <option value="1">1</option>
       
      </select>

                
      
        <p>  2 yrs</p>
      </div>

    
    </div>
  </div>
  <button @click.prevent="submitForm"     class="button" >Search Flight</button>
</form>
      </div>
   
   
          </div>
          
    </div>
     
</template>

<script>

export default {

  data(){
    return{
      
Form:"",
To:"",
Adult:"",
child:"",
Infant:"",
date:"",
radiobuttons:"",



}
    
  },
    methods:{
      submitForm(){
        this.$router.push({name:"Newpage",
        query:{
          Form:this.Form,
          To:this.To,
          Adult:this.Adult,
          child:this.child,
          Infant:this.Infant,
          date:this.date,
          option:this.radiobuttons

          
        }
      })
        
      }
    }
}


 



</script>



<style scoped>


body {
    margin: 0;
    font-family:Arial, Helvetica, sans-serif;
  }
  
  .sidebar {
    margin-top: 0;
    padding: 0;
    width: 200px;
    background-color: #0c0547;
    position: fixed;
    height: 100%;
    overflow: auto;
  }
  
  .sidebar a {
    display: block;
    color:white;
    padding: 16px;
    text-decoration: none;
  }
   

  
  .sidebar a:hover:not(.active) {
    background-color:orange;
    color: black;
  }
  
  div.content {
    margin-top: 10px;
    margin-left:200px;
    padding: 1px 16px;
    height: 1000px;
  }
  
  @media screen and (max-width: 700px) {
    .sidebar {
      width: 100%;
      height: auto;
      position: relative;
    }
    .sidebar a {float: left;}
    div.content {margin-left: 0;}
  }
  
  @media screen and (max-width: 400px) {
    .sidebar a {
      text-align: center;
      float: none;
    }
  }
  .card-container {
    margin: auto;
    width: 600px;
    height: 550px;
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
  h1{
    text-align: center;
    color: orangered;
  }
  label,.radio-inline{
    margin-right: 50;
  }
 
  [type="date"] {
    background:#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)  97% 50% no-repeat ;
  }
  [type="date"]::-webkit-inner-spin-button {
    display: none;
  }
  [type="date"]::-webkit-calendar-picker-indicator {
    opacity: 0;
  }
  
  /* custom styles */
  body {
    padding: 4em;
    background: #e5e5e5;
    font: 13px/1.4 Geneva, 'Lucida Sans', 'Lucida Grande', 'Lucida Sans Unicode', Verdana, sans-serif;
  }

  .dates {
    border: 1px solid #c4c4c4;
    border-radius: 5px;
    background-color: #fff;
    padding: 3px 5px;
    box-shadow: inset 0 3px 6px rgba(0,0,0,0.1);
    width: 190px;
  }
  .option:hover:not(.active) {
    background-color:orangered;
    color: black;
  }
.button{
    color:white;
    background: orangered;
    width:150px;
    height:50px;
    border-radius:5px;
    margin-left: 200px;
    border:1px solid white

}
#radio input{
display: inline-block;
margin-Right: 20px;
}
#radio label{
  display:inline-block;
  margin-Right:10px
}
.input-group{
  padding: 20px
}
</style> -->


    

<!-- <template>
  <div>
    <form>
      <fieldset>
        <legend>Choose an option:</legend>
        <input type="radio" id="option1" name="option" value="option1" v-model="selectedOption">
        <label for="option1">Option 1</label>
        <input type="radio" id="option2" name="option" value="option2" v-model="selectedOption">
        <label for="option2">Option 2</label>
      </fieldset>
      <fieldset>
        <legend>Select a value:</legend>
        <select v-model="selectedValue">
          <option value="">--Please select--</option>
          <option value="value1">Value 1</option>
          <option value="value2">Value 2</option>
        </select>
      </fieldset>
      <fieldset>
        <legend>Select a date:</legend>
        <input type="date" v-model="selectedDate">
      </fieldset>
      <button @click.prevent="submitForm">Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      selectedOption: '',
      selectedValue: '',
      selectedDate: ''
    };
  },
  methods: {
    submitForm() {
      // You can navigate to another page and pass the selected values as query parameters
      this.$router.push({
        name:"Newpage",
        query: {
          option: this.selectedOption,
          value: this.selectedValue,
          date: this.selectedDate
        }
      });
    }
  }
};
</script> -->