<template>
    <div class="home">
        
        <div class="row">
            <div class="col-md-5"></div>
            
            <div class="login-container col-md-2">
                <div class="row">
                    <div class="col-md-4"></div>
                    <p class="col-md-4">Authorization</p>
                </div>
                <form>
                    <div class="form-group">
                        <input v-model="login" class="form-control" type="text" placeholder="Login" />
                    </div>

                    <div class="form-group">
                        <input v-model="password" class="form-control" type="password" placeholder="Password" />
                    </div>

                    <div class="form-group">
                        <input v-on:click="signin" class="btn btn-primary" type="submit" value="Login"  />
                    </div>

                </form>
            </div>
        </div>
    </div>
</template>

<script>
    const axios = require('axios').default;


    export default {
        name: 'Home',

        data() {
            return {
                login: null,
                password: null
            };
        },

        methods: {
            signin: function (event) {
                axios
                    .post("/signin", {
                        params: {
                            Login: this.login,
                            Password: this.password
                        }
                    })
                    .then(responce => alert(responce))
            },
            
        }

    };


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
