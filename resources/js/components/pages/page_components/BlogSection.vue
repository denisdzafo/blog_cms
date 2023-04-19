<template>
    <section class="blog-section py-5">
      <div class="container">
        <h2 class="mb-4">Top 3 Blogs</h2>
        <div class="row">
          <div class="col-md-4 mb-4" v-for="(blog, index) in blogs" :key="index">
            <div class="card">
              <img class="card-img-top" src="https://via.placeholder.com/350x200" alt="Card image cap">
              <div class="card-body">
                <h5 class="card-title">{{ blog.title }}</h5>
                <p class="card-text">{{ blog.description }}</p>
                <a href="#" class="btn btn-primary">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    data() {
      return {
        blogs: [
          { title: "Blog 1", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
          { title: "Blog 2", description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." },
          { title: "Blog 3", description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." },
        ]
      };
    },
  };
  </script>
  
  <style scoped>
  .blog-section {
    background-color: #f2f2f2;
    text-align: center;
  }
  
  .card {
    border: none;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }
  
  .card:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }
  </style>
  