<script>
export default {
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
    
  },
  methods:{
    submitNew(){
        this.$router.push({name:"Confirmation",
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
          <h3 class="card-title">Flight Deatils</h3>
         
          <p class="card-text"> <b>Way To:{{ radiobuttons }}</b></p>
                      <p class="card-text" ><b>From:{{ Form }}</b></p>
                      <p class="card-text"><b>To:{{ To }}</b></p>
                      <p class="card-text"><b>Date:{{ date }}</b></p>
                      <p class="card-text"><b>Adults:{{ Adult }}</b></p>
                      <p class="card-text"><b>Children:{{ child }}</b></p>
                      <p class="card-text"><b>Infants:{{ Infant }}</b></p>
                     
                         
                  
                         <button type="submit" @click="submitNew" class="button" >Book Now</button>
                    
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
  
.content{
    margin-left: 50px;
    margin-top:100px
}
.card{
    background-color: orange;
    color: #0c0547;
    
 margin-right: 20px;
 margin-bottom: 20px;
}
button{
    color:white;
    background: #0c0547;
    width:140px;
    height:50px;
    border-radius:5px;
   
    border:1px solid white

}
</style> 


