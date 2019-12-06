<template>
    <div class="home">

        <div class="row">
            <div class="list-container col-md-4">

                <div class="add-location-container">
                    <form>
                        <div class="form-group">
                            <p>Долгота</p>
                            <input v-model="longitude" type="text" />
                        </div>

                        <div class="form-group">
                            <p>Широта</p>
                            <input v-model="latitude" type="text" />
                        </div>

                        <div class="form-group">
                            <p>Название</p>
                            <input v-model="name" type="text" />
                        </div>

                        <div class="form-group">
                            <input type="submit" v-on:click="add" value="Добавить" />
                        </div>
                    </form>

                </div>

                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">Название</th>
                            <th scope="col">Долгота</th>
                            <th scope="col">Широта</th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tr v-for="mark in marks">
                        <td scope="col" v-on:click="movemap(mark.longitude,mark.latitude)">{{ mark.name }}</td>
                        <td scope="col">{{ mark.longitude }} </td>
                        <td scope="col">{{ mark.latitude }} </td>
                        <td scope="col">
                            <button class="btn btn-primary">Редактировать</button>
                        </td>
                        <td scope="col">
                            <button class="btn btn-danger" v-on:click="remove(mark.name)">Удалить</button>
                        </td>
                    </tr>
                </table>


            </div>

            <div class="map-container col-md-8">
                <yandex-map :coords="coords" style="height:600px">
                        <ymap-marker marker-id='1'
                                     :coords="[10 , 20]">
                        </ymap-marker>
                    
                    <ymap-marker marker-id='2'
                                 :coords="[15 , 25]">
                    </ymap-marker>
                </yandex-map>
            </div>
        </div>

    </div>
</template>

<script>
    import { yandexMap, ymapMarker } from 'vue-yandex-maps'
    import { loadYmap } from 'vue-yandex-maps'
    const axios = require('axios').default;

    export default {
        components: { yandexMap, ymapMarker, loadYmap },

         data: () => ({
             coords: [54, 39],
             longitude: null,
             latitude: null,
             name: null,
             marks: []
        }),

         methods: {
            add: function () {
                axios
                    .post("/add", {
                        params: {
                            Name: this.name,
                            Longitude: this.longitude,
                            Latitude: this.latitude
                        }
                    })
                    .catch(responce=>
                        {
                        this.coords = [this.longitude, this.latitude];
                        this.marks.push({
                            name: this.name,
                            longitude: this.longitude,
                            latitude: this.latitude
                        });
                        }
                 )
             },

             remove: function (name) {
                 alert(name);
                 axios
                     .post("/delete", {
                         params: {
                             Name: name
                         }
                     })
                     .then(responce => {
                         let mark = this.marks.find(item => item.name == name);
                         this.marks.splice(this.marks.indexOf(mark), 1);
                     })
                     .catch(error => {
                         console.log(error);
                     })
             },

             movemap: function (longitude, latitude) {
                 this.coords = [longitude, latitude];
             }
        },

        mounted() {
            axios
                .get("/get-marks")
                .then(responce => this.marks = responce)
        }

    }
</script>

<style scoped>
</style>