<template>
<div>
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-12 col-sm-5 col-md-4 col-lg-4 col-xl-4">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" v-model="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
            <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" v-model="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
          </div>
          <button type="submit" class="btn btn-primary" @click="login">Login</button>
        </form>
        <p>don't have an account ? <router-link to="/Register">create one here</router-link></p>
      </div>
    </div>
  </div>
</div>

</template>

<script>
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    login () {
      axios({
        method: 'post',
        url: 'http://localhost:3000/login',
        data: {
          email: this.email,
          password: this.password
        }
      })
      .then(({ data }) => {
        console.log(data)
        localStorage.setItem('token', data.token)
        localStorage.setItem('name', data.name)
        this.$router.push('homepage')
      })
      .catch( err => {
        alert('email dan password salah')
        console.log('ini errornya', err);

      })

    }
  }
}
</script>
