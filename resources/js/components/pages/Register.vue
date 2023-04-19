<template>
  <div >
    <div class="image-section" :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
        <div class="overlay">
          <h1 class="text-center text-white">{{ imageText }}</h1>
        </div>
      </div>
    <div class="container mt-5">
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" class="form-control" id="name" v-model="name" :class="{ 'is-invalid': nameError }">
          <div class="invalid-feedback">{{ nameError }}</div>
        </div>
        <div class="form-group">
          <label for="email">Email address</label>
          <input type="email" class="form-control" id="email" v-model="email" :class="{ 'is-invalid': emailError }">
          <div class="invalid-feedback">{{ emailError }}</div>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" v-model="password" :class="{ 'is-invalid': passwordError }">
          <div class="invalid-feedback">{{ passwordError }}</div>
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" class="form-control" id="confirmPassword" v-model="confirmPassword" :class="{ 'is-invalid': confirmPasswordError }">
          <div class="invalid-feedback">{{ confirmPasswordError }}</div>
        </div>
        <button type="submit" class="btn btn-primary">Submit</button>
      </form>
    </div>
    <div class="mt-5"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
      nameError: '',
      emailError: '',
      passwordError: '',
      confirmPasswordError: '',
    };
  },
  computed: {
    imageUrl() {
        // replace this with your own image URL
        return 'https://picsum.photos/1920/600';
      },
      imageText() {
        return 'Image Text';
      },
  },

  methods: {

    onSubmit() {
      if (
        this.validateName() &&
        this.validateEmail() &&
        this.validatePassword() &&
        this.validateConfirmPassword()
      ) 
      var data = {
            name: this.name,
            email: this.email,
            password: this.password,
            password_confirmation: this.confirmPassword,
          };
        this.$endPoints.register(data)
          .then(response => {
              this.$router.push( { name: 'Login' });
          })
          .catch(e => {
            console.log(e);
          });
    },
    validateName() {
      if (!this.name) {
        this.nameError = 'Name is required.';
        return false;
      } else {
        this.nameError = '';
        return true;
      }
    },
    validateEmail() {
      if (!this.email) {
        this.emailError = 'Email is required.';
        return false;
      } else if (!/^\S+@\S+\.\S+$/.test(this.email)) {
        this.emailError = 'Invalid email format.';
        return false;
      } else {
        this.emailError = '';
        return true;
      }
    },
    validatePassword() {
      if (!this.password) {
        this.passwordError = 'Password is required.';
        return false;
      } else if (this.password.length < 3) {
        this.passwordError = 'Password must be at least 3 characters long.';
        return false;
      } else {
        this.passwordError = '';
       
        return true;
  }
},
validateConfirmPassword() {
  if (!this.confirmPassword) {
    this.confirmPasswordError = 'Please confirm your password.';
    return false;
  } else if (this.confirmPassword !== this.password) {
    this.confirmPasswordError = 'Passwords do not match.';
    return false;
  } else {
    this.confirmPasswordError = '';
    return true;
  }
},
},
};
</script>

<style scoped>
.register {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.image-section {
    height: 450px;
    background-size: cover;
    background-position: center;
    position: relative;
  }
  
  .image-section .overlay {
    position:absolute;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(0, 0, 0, 0.5);
display: flex;
justify-content: center;
align-items: center;
}

.image-section .overlay h1 {
font-size: 48px;
font-weight: bold;
text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
}

.container {
  max-width: 500px;
}

.mt-5 {
  margin-top: 2.5rem;
}
</style>