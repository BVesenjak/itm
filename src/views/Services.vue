<template>
    <div>
      <h1>Services</h1>
      <ul>
        <li v-for="service in services" :key="service.id">
          {{ service.name }}
          <button @click="goToPartner(service.id)">Learn More</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        services: [
          { id: 1, name: 'Web Development' },
          { id: 2, name: 'Digital Marketing' },
          // Add more services as needed
        ],
      };
    },
    methods: {
      goToPartner(serviceId) {
        this.$router.push({ name: 'Partner', query: { serviceId } });
      }
    }
  }
  </script>