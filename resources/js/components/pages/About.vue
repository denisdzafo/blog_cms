<template>
  <div class="about-page">
    <div class="image-section" :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
        <div class="overlay">
          <h1 class="text-center text-white">About</h1>
        </div>
      </div>
    <div class="container my-5">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel justo vel libero sagittis interdum eget sit amet lorem. Duis faucibus dui nec enim vehicula, nec aliquam elit blandit. Vivamus rutrum est quam, eget gravida enim faucibus vel. Nulla facilisi. Sed id congue libero, in vestibulum augue. Aliquam maximus felis id leo pellentesque rhoncus.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data(){
    return {
      imageUrl: 'https://cdn.pixabay.com/photo/2016/04/04/14/12/monitor-1307227_960_720.jpg',
    }
  }
}
</script>

<style>
.about-page {
  height: 100%;
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

@media (max-width: 991px) {
  .image-section {
    height: calc(100vh / 3);
  }
}

@media (max-width: 767px) {
  .image-section {
    height: calc(100vh / 4);
  }
}
</style>


