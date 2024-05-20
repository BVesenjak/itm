<template>
  <footer>
    <div class="footer-content">
      <div class="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Service</a>
        <a href="#sitemap" @click.prevent="toggleSitemap">Sitemap</a>
      </div>
      <div class="social-media">
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <font-awesome-icon :icon="['fab', 'instagram']" />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <font-awesome-icon :icon="['fab', 'facebook']" />
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
        <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
          <font-awesome-icon :icon="['fab', 'x-twitter']" />
        </a>
      </div>
      <div class="sitemap" v-if="showSitemap">
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/blog">Blog</router-link></li>
          <li><router-link to="/services">Services</router-link></li>
          <li><router-link to="/partner">Partner</router-link></li>
          <li><router-link to="/impressum">Impressum</router-link></li>
          <li><router-link to="/explore">Explore</router-link></li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      showSitemap: false,
    };
  },
  methods: {
    toggleSitemap() {
      this.showSitemap = !this.showSitemap;
    }
  }
}
</script>

<style>
footer {
  padding: 20px;
  background: #f1f1f1;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 1px solid #ccc;
}

.footer-content {
  width: 100%;
  max-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.footer-links {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-links a {
  margin: 5px 0;
  text-decoration: none;
  color: #2c3e50;
}

.social-media {
  display: flex;
  justify-content: center;
  align-items: center;
}

.social-media a {
  margin: 0 10px;
}

.social-media .fa-icon {
  font-size: 24px;
}

.sitemap {
  margin-top: 20px;
}

.sitemap ul {
  list-style-type: none;
  padding: 0;
  text-align: center;
}

.sitemap li {
  margin: 5px 0;
}

.sitemap a {
  text-decoration: none;
  color: #2c3e50;
}
</style>
