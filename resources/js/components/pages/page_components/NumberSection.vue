<template>
    <section class="number-section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-3">
            <div class="number-section__item">
              <h3>01</h3>
              <p>Some description</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="number-section__item">
              <h3>02</h3>
              <p>Some description</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="number-section__item">
              <h3>03</h3>
              <p>Some description</p>
            </div>
          </div>
          <div class="col-md-3">
            <div class="number-section__item">
              <h3>04</h3>
              <p>Some description</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'NumberSection'
  }
  </script>
  
  <style scoped>
  .number-section {
    background-color: #f9f9f9;
    padding: 80px 0;
  }
  
  .number-section__item {
    text-align: center;
    margin-bottom: 40px;
  }
  
  .number-section__item h3 {
    font-size: 60px;
    color: #1ABC9C;
    margin-bottom: 10px;
  }
  
  .number-section__item p {
    font-size: 18px;
    color: #333;
    margin: 0;
  }
  </style>
  