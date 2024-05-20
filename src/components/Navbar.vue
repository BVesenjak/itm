<template>
  <nav class="navbar">
    <div class="navbar-left">
      <img
        src="@/assets/logo2.png"
        alt="Icon"
        class="navbar-icon"
      />
      <router-link to="/" class="home-link text-effect-left">ITMaxxers</router-link>
    </div>
    <div class="navbar-links text-effect-right">
      <router-link to="/">Home</router-link>
      <router-link to="/blog">Blog</router-link>
      <router-link to="/services">Services</router-link>
      <router-link to="/partner">Partner</router-link>
      <router-link to="/impressum">Impressum</router-link>
      <router-link to="/explore">Explore</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isClicked: false
    };
  },
};
</script>

<style scoped>
.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 40px;
  padding: 0 20px;
  background-image: linear-gradient(to top, black, white);
  font-weight: 500;
  margin: 0;
  position: sticky; /* Make the navbar sticky */
  top: 0; /* Stick to the top */
  z-index: 1000; /* Ensure it stays above other content */
}

.navbar-left {
  display: flex;
  align-items: center;
}

.navbar-icon {
  padding-top: 2px;
  height: 37px;
  cursor: pointer;
  transition: transform 0.2s, filter 0.2s;
}

.navbar-icon.clicked {
  transform: scale(0.95);
}

.navbar-left:hover .home-link {
  color: #0088a3;
}

.home-link {
  padding-left: 10px;
  text-decoration: none;
  color: black;
  transition: color 0.3s;
  font-weight: 700;
  font-size: 1.2em;
}

.home-link:hover {
  color: #0088a3;
}

.navbar-links {
  display: flex;
  gap: 20px;
}

.navbar-links a {
  text-decoration: none;
  color: black;
  transition: color 0.3s;
}

.navbar-links a:hover {
  color: #0088a3;
}

.text-effect-left {
  color: #2c3e50;
  text-align: center;
  text-shadow:
    1px 1px 2px rgba(255, 255, 255, 0.9),
    2px 2px 4px rgba(255, 255, 255, 0.7),
    3px 3px 6px rgba(255, 255, 255, 0.5),
    4px 4px 8px rgba(255, 255, 255, 0.3),
    5px 5px 10px rgba(255, 255, 255, 0.1);
}

.text-effect-right {
  color: #2c3e50;
  text-align: center;
  text-shadow:
    -1px 1px 2px rgba(255, 255, 255, 0.9),
    -2px 2px 4px rgba(255, 255, 255, 0.7),
    -3px 3px 6px rgba(255, 255, 255, 0.5),
    -4px 4px 8px rgba(255, 255, 255, 0.3),
    -5px 5px 10px rgba(255, 255, 255, 0.1);
}
</style>