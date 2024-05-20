<template>
    <div>
      <h1>Blog</h1>
      <section>
        <h2>Company News</h2>
        <!-- Placeholder for company news content -->
      </section>
      <section>
        <h2>Customer Reviews</h2>
        <!-- Placeholder for customer reviews content -->
      </section>
      <section>
        <h2>Edge Cutting Tech Presentation</h2>
        <!-- Placeholder for tech presentation content -->
      </section>
      <section>
        <h2>Tutorials</h2>
        <!-- Placeholder for tutorials content -->
      </section>
      <div>
        <h3>Leave a Comment:</h3>
        <input type="text" v-model="comment" placeholder="Your comment here..." />
        <button @click="postComment">Post Comment</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        comment: '',
      };
    },
    methods: {
      postComment() {
        if (!this.comment.includes('bad word')) { // Simplified check
          // Post comment logic
          alert('Comment posted!');
        } else {
          alert('Inappropriate content detected.');
        }
      }
    }
  }
  </script>