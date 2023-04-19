<template>
  <div >
    <div class="image-section" :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
        <div class="overlay">
          <h1 class="text-center text-white">Contact</h1>
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
          <label for="name">Message</label>
          <textarea type="text" class="form-control" id="message" v-model="message" :class="{ 'is-invalid': messageError }"></textarea>
          <div class="invalid-feedback">{{ messageError }}</div>
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
      message: '',
      nameError: '',
      emailError: '',
      messageError: '',
    };
  },
  computed: {
    imageUrl() {
        // replace this with your own image URL
        return 'https://picsum.photos/1920/600';
      },
  },

  methods: {

    onSubmit() {
      if (
        this.validateName() &&
        this.validateEmail() &&
        this.validateMessage() &&
        this.validateConfirmPassword()
      ) {
        alert('Form submitted successfully!');
      } else {
        alert('Please fix errors in the form.');
      }
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
    validateMessage() {
      if (!this.password) {
        this.passwordError = 'Message is required.';
        return false;
      } else {
        this.messageError = '';
       
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