<template>
    <div>
        <!-- Navigation Bar -->
        <Navbar/>
  
        <!-- Explore Page Content -->


        <!-- Footer -->
        <BottomFooter/>
    </div>
</template>
<script>
 import Navbar from '@/components/Navbar.vue';
  import BottomFooter from '@/components/BottomFooter.vue';
  import HomeBgButton from '@/components/HomeBgButton.vue';
  
  export default {
    components: {
        Navbar,
        BottomFooter,
        HomeBgButton,
    }
  }
</script>