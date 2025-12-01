<template>
  <header class="event-header">
    <h1>{{ eventTitle }}</h1>
    <p class="description">{{ eventDescription }}</p>
  </header>
</template>

<script setup>
const eventTitle = "Future of Web Development Summit 2026";
const eventDescription = "Join leading experts for a two-day deep dive into the latest trends and technologies shaping the modern web. Don't miss out!";
</script>

<style scoped>
.event-header {
  text-align: center;
  padding: 3rem 1rem;
  background-color: #f8f9fa;
  border-bottom: 1px solid #eee;
}

.event-header h1 {
  font-size: 2.5rem;
  color: #333;
  margin-bottom: 0.5rem;
}

.description {
  font-size: 1.1rem;
  color: #666;
  max-width: 700px;
  margin: 0.5rem auto 0;
}
</style>