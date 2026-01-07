# Mini Backend API

A small Node.js + Express backend project to practice route params, query params, JSON responses, and basic filtering.

## Features
- `/profile/:id` – user profile with optional `lang` and `details` query
- `/product/:id` – product info with optional `currency` and `discount` query
- `/products` – list products with optional `category` and `maxPrice` filters
- 404 handler for unknown routes

## Live Examples / Screenshots
- [Profile Request Screenshot](/profile-request.png)  
- [Product Request Screenshot](/product-request.png)  
- [Products List Screenshot](/product-list.png)  

## How to Run
```bash
git clone https://github.com/QunnorQuarantine/mini-backend-api.git 
npm install
node index.js


Open in browser or HTTP client:

http://localhost:3000


