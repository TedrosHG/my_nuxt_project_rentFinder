<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a  class="navbar-brand" href="#">RentFinder</a>
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
            <nuxt-link v-if="!user" to="/" class="nav-link" >Home</nuxt-link>
        </li>
        <li class="nav-item active">
            <nuxt-link v-if="user" to="/rent" class="nav-link" >rent</nuxt-link>
        </li>
        <li class="nav-item active">
            <nuxt-link v-if="user" to="/createRent" class="nav-link" >Create rent</nuxt-link>
        </li>
      </ul>

      <ul class="navbar-nav mr-0">
        <li class="nav-item active">
          <nuxt-link v-if="!user" to="/signin" class="nav-link" >SignIn</nuxt-link>
        </li>
        <li class="nav-item active">
            <nuxt-link v-if="!user" to="/signup" class="nav-link" >SignUp</nuxt-link>
        </li>
        <li class="nav-item active">
            <!-- <a href="#/" v-if="user" @click="logOut" class="nav-link">LogOut</a> -->
            <button v-if="user" @click="logOut" class="nav-link">LogOut</button>
        </li>
      </ul>
    
    </nav>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
    export default {
       data(){
            return{
                user: ''
            }
        }, 
        mounted(){
          firebase.auth().onAuthStateChanged((user => {
            //console.log(user)
            this.user = user;
          }))
        },
         methods:{
          logOut(){
            firebase.auth().signOut().then(result => {
              console.log(result)
              this.user= ''
              this.$router.push("/")
            })
          }
        }
    }
</script>

<style lang="scss" scoped>

</style>