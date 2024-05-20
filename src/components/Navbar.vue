<template>
    <nav>
        <router-link to="/">Home</router-link> | 
        <router-link to="/blog">Blog</router-link> | 
        <router-link to="/services">Services</router-link> | 
        <router-link to="/partner">Partner</router-link> | 
        <router-link to="/impressum">Impressum</router-link> | 
        <router-link to="/explore">Explore</router-link>
    </nav>
</template>
<style>
nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>