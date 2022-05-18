<template>
  <v-app style="background: linear-gradient(to left, rgb(100, 181, 246), rgb(144, 202, 249));">
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12"
              sm="8"
              md="4">
          <v-card class="mx-auto" shaped elevation="20">

            <v-toolbar color="primary" dark flat>
              <v-toolbar-title class="headline">登入頁面</v-toolbar-title>
            </v-toolbar>

              <v-btn
                class="ma-2"
                color="primary"
                dark
                to="/Login"
              >
                前進登入頁面
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5  mx-auto  " fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </v-btn> 

          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import firebase from 'firebase';

export default {
  data() {
    return {
      disabled: false,
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      showPassword: false,
      password: '',
      passwordRules: [
        v => !!v || 'Password is required'
      ],
      error: ''
    }
  },
  methods: {
    validate() {
      if(this.$refs.form.validate()) {
        this.disabled = true;

        firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then(() => {
              this.disabled = false;
              this.$router.replace({ path: "/admin" });
            })
            .catch(err => {
              this.disabled = false;
              this.error = err.message;
            });
      }
    }
  }
}
</script>
