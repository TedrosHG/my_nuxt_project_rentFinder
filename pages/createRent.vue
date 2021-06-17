<template>
    <div class="container">
        <div class="d-flex flex-row justify-content-center">
            <div class="col-sm-8">
                <div class="card">
                    <div class="card-header">
                        Register your house to rent
                    </div>
                    <div class="card-body">
                        <form @submit.prevent="submit">
                            <div class="form-group">
                                <input type="text" placeholder="Enter house location" v-model="houseLocation" class="form-control">
                            </div>
                            <div class="form-group">
                                <input type="number" placeholder="Enter number of class" v-model="house" class="form-control">
                            </div>
                            <div class="form-group">
                                <input type="number" placeholder="Enter price" v-model="price" class="form-control">
                            </div>
                            <!-- <div class="form-group">
                                <input type="text" placeholder="Enter describtion" v-model="describe" class="form-control">
                            </div> -->
                             <textarea placeholder="Enter describtion about the house and the conditions" v-model="describe" 
                             class="form-control" rows="5" cols="10"></textarea> 
                            <div class="form-group" v-show="error">
                                <p class="alert alert-danger">{{this.errorMsg}}</p>
                            </div>
                            <div class="form-group mt-3">
                                <button type="submit" class="btn btn-primary"> Submit</button>
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
                house: '',
                describe: '',
                houseLocation: '',
                price: '',
                error: null,
                errorMsg: "",
            }
        },
         mounted(){
          firebase.auth().onAuthStateChanged((user => {
            //console.log(user)
            this.user = user;
          }))
        },
        methods:{
            async submit2(){
                if(this.house !== "" && this.describe !== "" &&
                 this.houseLocation !== "" && this.price !== "" ){
                    this.error=false;
                    this.errorMsg="";
                   
                    const dataBase= db.collection("rent").doc(firebase.auth().currentUser.uid);
                    await dataBase.set({
                        house: this.house,
                        describe: this.describe,
                        houseLocation: this.houseLocation,
                        price: this.price,
                        
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
            },
            async submit(){
                if(this.house !== "" && this.describe !== "" &&
                 this.houseLocation !== "" && this.price !== "" ){
                    this.error=false;
                    this.errorMsg="";
                    
                    db.collection("rent").add({
                        rent_id: firebase.auth().currentUser.uid,
                        house: this.house,
                        describe: this.describe,
                        houseLocation: this.houseLocation,
                        price: this.price, 
                    }).then(decRef => {
                       this.$router.push('/rent');   
                    }).catch(error => console.log(err))
                         
                    return;
                }
                this.error = true;
                this.errorMsg = "please fill out all the field";
                
            }  
        }
    }
</script>

<style lang="scss" scoped>

</style>