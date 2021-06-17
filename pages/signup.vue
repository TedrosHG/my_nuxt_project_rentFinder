<template>
    <div class="container">
        <div class="d-flex flex-row justify-content-center">
            <div class="col-sm-8">
                <div class="card">
                    <div class="card-header">
                        Sign Up
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="signUp">
                            <div class="form-group">
                                <input type="text" placeholder="Enter your first name" v-model="firstName" class="form-control">
                            </div>
                            <div class="form-group">
                                <input type="text" placeholder="Enter your last name" v-model="lastName" class="form-control">
                            </div>
                            <div class="form-group">
                                <input type="text" placeholder="Enter your home location" v-model="location" class="form-control">
                            </div>
                            <div class="form-group">
                                <input type="tel" placeholder="Enter your phone number" v-model="phone" class="form-control">
                            </div>
                            <div class="form-group">
                                <input type="email" placeholder="Enter your email" v-model="email" class="form-control">
                            </div>
                            <div class="form-group">
                                <input type="password" placeholder="Enter your password" v-model="password" class="form-control">
                            </div>
                            <div class="form-group" v-show="error">
                                <p class="alert alert-danger">{{this.errorMsg}}</p>
                            </div>
                           <div class="form-group mt-3">
                                <button type="submit" class="btn btn-outline-primary"> Register</button>
                           </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from "firebase/app";
import "firebase/auth";
import db from "../plugins/firebase"
    export default {
        data(){
            return{
                firstName: '',
                lastName: '',
                location: '',
                phone: '',
                email: '',
                password: '',
                error: null,
                errorMsg: "",
            }
        },
        methods:{
            async signUp(){
                if(this.firstName !== "" && this.lastName !== "" && 
                this.location !== "" & this.phone !== "" &&
                this.email !== "" && this.password !== ""){
                    this.error=false;
                    this.errorMsg="";
                    const firebaseAuth= await firebase.auth();
                    const createUser= await firebaseAuth.createUserWithEmailAndPassword(
                        this.email, this.password);
                    const result= await createUser;
                    const dataBase= db.collection("users").doc(result.user.uid);
                    await dataBase.set({
                        firstName: this.firstName,
                        lastName: this.lastName,
                        location: this.location,
                        phone: this.phone,
                        email: this.email,
                    });
                    this.$router.push('/rent');    
                    return;
                }
                this.error = true;
                this.errorMsg = "please fill out all the field";
                // firebase.auth().createUserWithEmailAndPassword(
                //     this.email, this.password).then(user => {
                //         consol.log(user);
                //         this.$router.push('/rent');
                //     }).catch(error => {
                //         this.errors=error;
                //     })
            } 
        }
    }
</script>

<style lang="scss" scoped>

</style>