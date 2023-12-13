<template>
    <div class="hero-image">
        <div class="bar">
            <div class="lieu search-input">
                <p>Lieu</p>
                <VueGoogleAutocomplete
                id="locationInput"
                class="autocomplete_input"
                placeholder="Où?"
                @placeChanged="handlePlaceChanged"
                />
            </div>
            
            <div class="date search-input">
                    <p>Date</p>
                <input type="text" placeholder="Quand ?">
                <button><img src="../assets/icons/search.png" alt="Rechercher"></button>
            </div>
        </div>
    </div>
</template>
<script>
import VueGoogleAutocomplete from 'vue-google-autocomplete';
export default {
    name: 'MarcheImage',
    components: {
        VueGoogleAutocomplete,
    },
    methods: {
    handlePlaceChanged(place) {
      // Do something with the selected place (e.g., access place.name, place.formatted_address, etc.).
      console.log(place);
    },
  },
}
</script>

<style>
    .hero-image{
        height: 500px;
        width: 100%;
        background-image: url("../assets/lemarche.jpg");
        display:flex;
        justify-content:center;
        align-items:center;
    }
    *{
  box-sizing:border-box;
  margin:0;
  padding:0;
}
.autocomplete_input{
    width: 100%;
}

html,
body{
  height:100%;
}

.bar{
  width:40%;
  background:white;
  box-shadow:0 0 5px hsl(0 0% 78%);
  height:4rem;
  border-radius:100vw;
  display:flex;
  justify-content:center;
  font-size:0.6rem;
}

.bar div{
  border-radius:inherit;
  padding:0.8rem 1.5rem;
  transition:background 250ms ease;
}

.bar div:hover{
  background:hsl(0 0% 94%);
}

input[type="text"]{
  background:none;
  border:none;
  padding:0.2rem 0 0 0;
}

.search-input{
    width: 50%;
    font-size: 15px;
}

input[type="text"]:focus{
  outline:none;
}

::placeholder{
  font-size:0.75rem;
}

.date{
  position: relative;  
}
.date button{
  height: 50px;
  width: 50px;
  position:absolute;
  top:50%;
  right:10px;
  transform:translateY(-50%);
  background:rgb(12, 127, 65);
  color:white;
  font-size:0.8rem;
  padding:0.7rem;
  border-radius:50%;
  align-items: center;
  display: flex;
}

.date button:hover{
    background-color: rgb(0, 57, 0);
}


.bar>div{
  position:relative;
}


.bar>div::before{
  position:absolute;
  content:"";
  left:0;
  top:50%;
  transform:translateY(-50%);
  width:1px;
  height:55%;
  background:hsl(0 0% 90%);
}

.bar>div:nth-of-type(1)::before{
   background:transparent;
}


.bar>div:hover::before{
  background:transparent;
}
</style>