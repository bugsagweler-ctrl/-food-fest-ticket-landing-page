<template>
  <div :class="['ticket-card', { 'featured-card': ticket.isFeatured }]">
    <div class="header-content">
      <h3 class="tier-name">{{ ticket.tierName }}</h3>
      
      <button @click="$emit('toggle-favourite', ticket.id)" class="fav-button">
        <svg v-if="ticket.isFavourited" class="heart-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
        <svg v-else class="heart-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      </button>

    </div>
    
    <div class="price">R{{ ticket.price }}</div>
    
    <ul class="benefits-list">
      <li v-for="benefit in ticket.benefits" :key="benefit">{{ benefit }}</li>
    </ul>

    <button class="select-button" :disabled="ticket.tierName === 'Student / Educator'">
      Select Tier
    </button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  ticket: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['toggle-favourite']);
</script>

<style scoped>
.ticket-card {
  border: 1px solid #ccc;
  padding: 1.5rem;
  margin-bottom: 1.5rem;
  border-radius: 8px;
  background-color: #fff;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
}

.featured-card {
  border-color: #ff5722; /* Highlight styling */
  border-width: 3px;
  box-shadow: 0 8px 15px rgba(255, 87, 34, 0.2);
  background-color: #fff7f5;
  transform: scale(1.02);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.tier-name {
  font-size: 1.5rem;
  color: #333;
  margin: 0;
}

.price {
  font-size: 2.5rem;
  font-weight: bold;
  color: #007bff;
  margin-bottom: 1rem;
}

.benefits-list {
  list-style-type: none;
  padding: 0;
  margin-bottom: 1.5rem;
}

.benefits-list li {
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #555;
}

.fav-button {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.heart-icon {
  width: 28px;
  height: 28px;
  color: #ff5722; /* Favourited color */
  transition: transform 0.2s;
}

.fav-button:hover .heart-icon {
  transform: scale(1.15);
}

.select-button {
  width: 100%;
  padding: 0.75rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.2s;
}

.select-button:hover {
  background-color: #0056b3;
}

.select-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>