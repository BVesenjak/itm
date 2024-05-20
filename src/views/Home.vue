<template>
    <div>
      <!-- Navigation Bar -->
      <Navbar/>
  
      <!-- Home Page Content -->
      <div :style="{ backgroundImage: `url(${currentBackground})` }" class="background">
        <HomeBgButton @click="changeBackground"/>
        
      </div>
  
      <!-- Footer -->
      <BottomFooter/>
    </div>
  </template>
  
  <script>
  import Navbar from '@/components/Navbar.vue';
  import BottomFooter from '@/components/BottomFooter.vue';
  import HomeBgButton from '@/components/HomeBgButton.vue';
  
  export default {
    data() {
      return {
        originalBackground: require('@/assets/bgh.jpg'),
        animatedBackground: require('@/assets/anim.gif'),
        currentBackground: require('@/assets/bgh.jpg'),
      };
    },
    methods: {
      changeBackground() {
        this.currentBackground = this.animatedBackground;
        setTimeout(() => {
          this.$router.push('/explore');
        }, 240);
      }
    },
    components: {
        Navbar,
        BottomFooter,
        HomeBgButton,
    }
  }
  </script>
  
  <style>
  .background {
    height: 100vh; /* Full height */
    background-size: cover; /* Cover the entire screen */
  }
  </style>
  