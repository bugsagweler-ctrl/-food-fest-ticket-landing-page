<template>
  <div class="tickets-list">
    <h2>Available Tickets</h2>
    
    <TicketCard
      v-for="ticket in tickets"
      :key="ticket.id"
      :ticket="ticket"
      @toggle-favourite="toggleFavourite"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { eventTickets } from '@/data/tickets'; // Adjust path as needed
import TicketCard from './TicketCard.vue';

// Use a ref for the data so we can mutate the isFavourited status
const tickets = ref(eventTickets);

/**
 * Toggles the isFavourited status for a ticket by its ID.
 * @param {number} ticketId 
 */
function toggleFavourite(ticketId) {
  const ticket = tickets.value.find(t => t.id === ticketId);
  if (ticket) {
    ticket.isFavourited = !ticket.isFavourited;
  }
}
</script>

<style scoped>
.tickets-list {
  max-width: 600px; /* Constrain the list for better readability */
  margin: 0 auto;
  padding: 2rem;
}

.tickets-list h2 {
    text-align: center;
    margin-bottom: 2rem;
    color: #333;
}
</style>