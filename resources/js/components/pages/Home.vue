<template>
    <div>
      <SliderSection />
      <DescriptionSection />
      <NumberSection />
      <BlogSection />
      <SkillSection />
    </div>
  </template>
  
  <script>
  import SliderSection from './page_components/SliderSection.vue';
  import DescriptionSection from './page_components/DescriptionSection.vue';
  import NumberSection from './page_components/NumberSection.vue';
  import BlogSection from './page_components/BlogSection.vue';
  import SkillSection from './page_components/SkillSection.vue';
  
  export default {
    components: {
      SliderSection,
      DescriptionSection,
      NumberSection,
      BlogSection,
      SkillSection,
    },
  };
  </script>
  