<script>
// export default{
//     methods: {
// 				showAlert() {
// 					alert("Thank you for Purchasing")
// 				},

//                 closeAlert() {
// 					alert("Are you sure you want to Cancel")
// 				}
// 			}
  

// }
export default {
  data() {
    return {
     

    }
  },
  methods: {
    showAlert() {
 					alert("Thank you for Purchasing , we have Recived your Booking")
			},
    
    cancelBooking() {
      if (confirm("Are you sure you want to cancel?")) {
        // perform cancel booking logic
        // ...
      }
    }
  },
  created() {
    // Access the selected option, value, and date from the query parameters
    this.radiobuttons = this.$route.query.option || '';
    this.Form = this.$route.query.Form;
    this.To = this.$route.query.To ;
    this. Adult= this.$route.query.Adult;
    this.child = this.$route.query.child;
    this.Infant = this.$route.query.Infant;
    this.date = this.$route.query.date || '';
  },
  data() {
    return {
      radiobuttons: '',
      Form: '',
      To: '',
      Adult: '',
      child:'',
      Infant:'',
      date:""
    };
    
  }
};
   
  


</script>
<template>


<div>
    <div class="topnav">
        <a class="active" href="#home">Support</a>
        <a href="#news">Cleartrip For work</a>
        <a href="#contact">My trips</a>
        <a href="#about">Offers</a>
        <a href="#about">Hotels</a>
        <a href="#about">  My Flights</a>
   
      </div>
    

    <div class="content">
        
        <div class="card w-50">
            <div class="card-body">
              <h3 class="card-title">Booking Confimation</h3>
              <h5>Verify your Booking Details</h5>
              <br/>
              <p class="card-text"> <b>Way To:{{ radiobuttons }}</b></p>
                          <p class="card-text" ><b>From:{{ Form }}</b></p>
                          <p class="card-text"><b>To:{{ To }}</b></p>
                          <p class="card-text"><b>Date:{{ date }}</b></p>
                          <p class="card-text"><b>Adults:{{ Adult }}</b></p>
                          <p class="card-text"><b>Children:{{ child }}</b></p>
                          <p class="card-text"><b>Infants:{{ Infant }}</b></p>
                         

              
       
             
      <div class="input-group">

        <div>
          <button @click="showAlert" class="button">Purchase</button>

         
          
  
        <button @click=" cancelBooking" class="button1">Cancel</button>
      
          
            </div>
            </div>
          </div>
          

</div>
</div>
</div>
</template>

<style scoped>

.topnav {
    overflow: hidden;
    background-color: #0c0547;
  }
  
  .topnav a {
    float: right;
    color: #f2f2f2;
    text-align: center;
    padding: 14px 16px;
    text-decoration: none;
    font-size: 17px;
  }
  
  .topnav a:hover {
    background-color:orange;
    color: black;
  }
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
  }
  
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 20px;
    border-radius: 5px;
    z-index: 1000;
  }
.content{
    margin-left: 500px;
    margin-top:100px
}
.popup {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background-color: #fff;
  border-radius: 5px;
  padding: 20px;
  text-align: center;
}



.card{
    background-color: orange;
    color: #0c0547;
}
.button{
    color:white;
    background: #0c0547;
    width:140px;
    height:50px;
    border-radius:5px;
   padding: 10px;
   margin-right: 10px;
    

}
.button1{
    color:white;
    background: #d51010;
    width:140px;
    height:50px;
    border-radius:5px;
   padding: 10px;
    

}
</style>