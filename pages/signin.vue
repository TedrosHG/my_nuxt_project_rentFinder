<template>
    <div class="container">
        <div class="d-flex flex-row justify-content-center">
            <div class="col-sm-8">
                <div class="card">
                    <div class="card-header">
                        Sign In
                    </div>
                    <div class="card-body">
                        <form >
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
                                <button @click.prevent="signIn" class="btn btn-outline-primary">LogIn</button>
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

    export default {
        data(){
            return{
                email: '',
                password: '',
                error: null,
                errorMsg: "",
            }
        },
        methods:{
            signIn(){
                firebase.auth().signInWithEmailAndPassword(
                    this.email, this.password).then(() => {
                        this.$router.push('/rent');
                        this.error=false;
                        this.errorMsg="";
                        //console.log(firebase.auth().currentUser.uid)
                    }).catch((err) => {
                        this.error=true;
                        this.errorMsg= err.message;
                    });
            }, 
        }
    }
</script>

<style lang="scss" scoped>

</style>