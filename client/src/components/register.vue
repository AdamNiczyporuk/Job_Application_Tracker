<script>
import { ref } from "vue";
import * as api from "../API/Api.js";
import { useRouter } from 'vue-router';

export default {
  name: "RegisterPanel",
  setup() {
  
    const name= ref("");
    const email = ref("");
    const password = ref("");
    
    const error = ref("");
    const router = useRouter(); 

    // Handle registration logic
    const handleRegister = async () => {
      try {
        await api.registerUser(name.value,email.value, password.value);
        alert("Registration successful!");
        router.push("/login");
        error.value = ""; 
      } catch (err) {
        error.value = "Registration failed. Please try again."; 
      }
    };

    return {
      name,
      email,
      password,
      error,
      handleRegister,
    };
  },
};
</script>



  

  <template>
    <v-container class="d-flex justify-center align-center" style="height: 85vh;">
      <v-card class="pa-5 rounded-lg" width="350" elevation="5" color="grey-lighten-4">
        <v-card-title class="text-h5" style="text-align: center;">Register</v-card-title>
        <v-form @submit.prevent="handleRegister">
          <v-text-field
            v-model="name"
            label="Name"
            type="name"
            class="mb-4 no-underline"
            variant="outlined"
            rounded
            
          />
          <v-text-field
            v-model="email"
            label="Email"
            type="email"
            class="mb-4 no-underline"
            variant="outlined"
            rounded
            
          />
          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            class="mb-4  no-underline"
            rounded
            variant="outlined"
          />
          <v-btn type="submit" color="green"  >Register</v-btn>
          <v-card-text>
            <router-link to="/login">Already have account?<br>Login here.</router-link>
          </v-card-text>
        </v-form>
        <v-alert v-if="error" type="error" class="mt-5" dense>
          {{ error }}
        </v-alert>
      </v-card>
    </v-container>
  </template>
  
 
  
  <style scoped>
  
  </style>
  