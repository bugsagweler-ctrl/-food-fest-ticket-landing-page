// src/data/tickets.js

export const eventTickets = [
  {
    id: 1,
    tierName: "General Admission",
    price: 49,
    benefits: [
      "Access to all general sessions",
      "Event swag bag",
      "Digital resource pack",
    ],
    isFeatured: false,
    isFavourited: false,
  },
  {
    id: 2,
    tierName: "VIP Pass",
    price: 199,
    benefits: [
      "Priority seating (front rows)",
      "Exclusive Q&A session with speakers",
      "Private VIP lunch buffet",
      "Premium event gift package",
    ],
    isFeatured: true, // Will have highlight styling
    isFavourited: false,
  },
  {
    id: 3,
    tierName: "Student / Educator",
    price: 29,
    benefits: [
      "Access to all general sessions",
      "Must show valid ID at check-in",
    ],
    isFeatured: false,
    isFavourited: false,
  },
];