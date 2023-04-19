<template>
    <section class="skill-section">
      <h2>Web Development Skills</h2>
      <div class="skill-list">
        <div class="skill" v-for="(skill, index) in skills" :key="index">
          <div class="skill-icon">
            <i :class="skill.icon"></i>
          </div>
          <div class="skill-name">{{ skill.name }}</div>
        </div>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: "SkillSection",
    data() {
      return {
        skills: [
          {
            name: "PHP",
            icon: "fab fa-php"
          },
          {
            name: "Vue.js",
            icon: "fab fa-vuejs"
          },
          {
            name: "Laravel",
            icon: "fab fa-laravel"
          },
          {
            name: "MySQL",
            icon: "fas fa-database"
          },
          {
            name: "CSS",
            icon: "fab fa-css3-alt"
          },
          {
            name: "HTML",
            icon: "fab fa-html5"
          }
        ]
      };
    },
    mounted() {
      // Add animation to skill icons
      const skills = document.querySelectorAll(".skill-icon i");
      skills.forEach((skill, index) => {
        skill.style.animationDelay = `${index * 0.2}s`;
        skill.classList.add("animate__animated", "animate__bounceIn");
      });
    }
  };
  </script>
  
  <style scoped>
  .skill-section {
    background-color: #f6f6f6;
    padding: 80px 0;
    text-align: center;
  }
  
  .skill-section h2 {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 40px;
  }
  
  .skill-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  
  .skill {
    margin: 20px;
    max-width: 200px;
    text-align: center;
  }
  
  .skill-icon {
    font-size: 48px;
    margin-bottom: 20px;
    color: #333;
    opacity: 0.6;
  }
  
  .skill-icon i:hover {
    color: #1abc9c;
  }
  
  .skill-name {
    font-size: 18px;
    font-weight: bold;
    color: #333;
    text-transform: uppercase;
    letter-spacing: 1px;
  }
  
  @media screen and (max-width: 768px) {
    .skill-list {
      flex-direction: column;
      align-items: center;
    }
  }
  </style>
  