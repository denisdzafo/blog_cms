<template>
    <div>
      <div class="image-section" :style="{ backgroundImage: 'url(' + imageUrl + ')' }">
        <div class="overlay">
          <h1 class="text-center text-white">{{ imageText }}</h1>
        </div>
      </div>

      <div class="container my-5">
      <div class="row">
        <div class="col-sm-12 col-md-3 mb-3">
          <div class="input-group">
            <div class="input-group-prepend">
              <span class="input-group-text">Sort By:</span>
            </div>
            <select class="form-control" v-model="sortBy" @change="sortBlogs">
              <option value="title">Title</option>
              <option value="author">Author</option>
              <option value="dateAdded">Date Added</option>
            </select>
          </div>
        </div>
        <div class="col-sm-12 col-md-3 mb-3">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Search by Title" v-model="searchTitle" @input="searchBlogs">
            <div class="input-group-append">
              <span class="input-group-text"><i class="fa fa-search"></i></span>
            </div>
          </div>
        </div>
      </div>
    </div>

      <div class="container mt-5">
        <div class="row">
          <div class="col-md-4" v-for="blog in paginatedBlogs" :key="blog.id">
            <div class="blog-item card mb-4">
              <div class="blog-image-container">
                <img :src="blog.image" alt="" class="card-img-top">
              </div>
              <div class="card-body">
                <h5 class="card-title">{{ blog.title }}</h5>
                <p class="card-text">{{ blog.description.substring(0, 50) }}...</p>
                <p class="card-author">{{ blog.author }}</p>
                <a href="#" class="btn btn-primary" @click="openBlog(blog.id)">Read More</a>
              </div>
            </div>
          </div>
        </div>
        <nav v-if="pages.length > 1" class="pagination-container">
          <ul class="pagination">
            <li class="page-item" :class="{ disabled: currentPage === 1 }">
              <a class="page-link" href="#" @click="changePage(currentPage - 1)">Previous</a>
            </li>
            <li class="page-item" v-for="page in pages" :key="page" :class="{ active: currentPage === page }">
              <a class="page-link" href="#" @click="changePage(page)">{{ page }}</a>
            </li>
            <li class="page-item" :class="{ disabled: currentPage === totalPages }">
              <a class="page-link" href="#" @click="changePage(currentPage + 1)">Next</a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </template>
  
  <script>
  
  export default {
    name: 'BlogList',
    data() {
      return {
        blogs: [
  {
    id: 1,
    title: 'Blog Title 1',
    author: 'Author Name 1',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis risus eu ipsum fringilla maximus. Aenean feugiat luctus ipsum.',
    image: 'https://via.placeholder.com/350x200'
  },
  {
    id: 2,
    title: 'Blog Title 2',
    author: 'Author Name 2',
    description: 'Phasellus ultricies nisi ac justo pellentesque, sed hendrerit lacus finibus. Curabitur euismod urna nec tellus cursus vehicula.',
    image: 'https://via.placeholder.com/350x200'
  },
  {
    id: 3,
    title: 'Blog Title 3',
    author: 'Author Name 3',
    description: 'Vestibulum convallis metus vel ligula pretium, non mollis odio pretium. Duis lacinia velit ut quam dapibus, ac hendrerit est efficitur.',
    image: 'https://via.placeholder.com/350x200'
  },
  // add more blog objects here as needed
],
        currentPage: 1,
        itemsPerPage: 9,
      };
    },
    computed: {
      paginatedBlogs() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return this.blogs.slice(startIndex, endIndex);
      },
      totalPages() {
        return Math.ceil(this.blogs.length / this.itemsPerPage);
      },
      pages() {
        const pagesArray = [];
        for (let i = 1; i <= this.totalPages; i++) {
          pagesArray.push(i);
        }
        return pagesArray;
      },
      imageUrl() {
        // replace this with your own image URL
        return 'https://picsum.photos/1920/600';
      },
      imageText() {
        return 'Image Text';
      },
    },
    methods: {
      openBlog(id) {
        console.log(`Opening blog with id: ${id}`);
      },
      changePage(page) {
        if (page < 1 || page > this.totalPages) {
          return;
        }
        this.currentPage = page;
      },
    },
  };
  </script>
  
  <style scoped>
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

.blog-item {
box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
transition: all 0.2s ease-in-out;
}

.blog-item:hover {
transform: translateY(-5px);
}

.blog-image-container {
height: 200px;
overflow: hidden;
display: flex;
justify-content: center;
align-items: center;
}

.blog-image-container img {
width: 100%;
height: auto;
}

.card-author {
font-style: italic;
}

.pagination-container {
display: flex;
justify-content: center;
margin-top: 20px;
}

.pagination {
display: flex;
list-style: none;
}

.pagination li {
margin: 0 5px;
}

.pagination a {
display: block;
padding: 5px 10px;
border-radius: 5px;
background-color: #f1f1f1;
color: #333;
}

.pagination a:hover {
background-color: #ccc;
}

.pagination .active a {
background-color: #333;
color: #fff;
}
.container.my-5 {
  max-width: 1100px;
  margin: 0 auto;
}

.search-sort {
  background-color: #f8f9fa;
  padding: 10px 20px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.search-sort input[type="text"],
.search-sort button,
.search-sort select {
  background-color: #e9ecef;
  color: #212529;
  border: none;
  border-radius: 3px;
  padding: 7px 12px;
}

.search-sort button {
  background-color: #343a40;
  color: #fff;
  margin-left: 5px;
}

.search-sort select {
  background-color: #343a40;
  color: #fff;
}

</style>  