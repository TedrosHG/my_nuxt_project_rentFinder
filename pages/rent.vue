<template>
    <div class="container">
        <div class="card col-sm-10">
            <div class="card-header">
                <h2 align="center">House to be rent</h2>
            </div>
            <div v-for="rent in rents" v-bind:key="rent.id" class="card-body">
                <h4>the price is : {{rent.price}}</h4>
                <h4>there are {{rent.house}} class</h4>
                <h4>the location of the house is {{rent.houseLocation}}</h4>
                <h4>{{rent.describe}}</h4>
                <hr>
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
                rents: []
            }
        },
        created(){
            db.collection('rent').get().then(querySnapshot => {
                querySnapshot.forEach(doc => {
                    //console.log(doc.data());
                    
                    const data = {
                        'id' : doc.id,
                        'rent_id': doc.data().rent_id,
                        'house': doc.data().house,
                        'describe': doc.data().describe,
                        'houseLocation': doc.data().houseLocation,
                        'price': doc.data().price,
                    }
                    this.rents.push(data)
                })
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>