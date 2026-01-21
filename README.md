# Stack Underflow – Frontend Challenge

A simple Stack Overflow–like Single Page Application (SPA) built with React, following the given frontend challenge requirements.

---

## Overview

This project demonstrates:
- A Single Page Application (SPA)
- Mocked authentication (no backend)
- In-memory state management
- Basic but clean UI
- Clear separation of concerns

All data (authentication, questions, comments) lives **only in memory** and resets on page refresh, exactly as required.

---

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- React Router
- Bun (runtime)

---

## Requirements Implemented

- Mocked login (any username & password)
- Logged-in state persists until page refresh
- Question list view
- Question detail view
- Create & edit questions (owner only)
- Add & edit comments (owner only)
- Question status management (open / answered / closed)
- In-memory data only (no persistence, no backend)

---

## Getting Started

### Prerequisites

Make sure you have:
- Node.js (>= 18)
- npm
- Bun

---

## Installation & Running the App

> ⚠️ **Important Note**  
> This project requires installing dependencies with **npm first**, followed by **bun**.
>  
> Installing dependencies using **bun only** may cause module resolution issues.


### Option 1 – Using npm (Recommended)
### Step 1 – Install dependencies using npm
npm install

### Step 2 – Run the development server
npm run dev

### The app will be available at:
http://localhost:5173



### Option 2 – Using Bun (Optional)
### Step 1 – Install dependencies using npm
npm install

### Step 2 – Install dependencies using bun
bun install

### Step 3 – Run the development server
bun run dev

### The app will be available at:
http://localhost:5173
