# TodoPixel API

TodoPixel is a simple training project built with [NestJS](https://nestjs.com/).  
It provides a basic private API for managing a user-based todo list.  
Users can register and log in using their email, and manage their own list of tasks.

⚠️ This project is for **training purposes only** and does **not** include proper authentication or security mechanisms.

---

## 🛠️ Tech Stack

- **Framework**: [NestJS](https://nestjs.com/)
- **ORM**: [TypeORM](https://typeorm.io/)
- **Database**: PostgreSQL
- **Language**: TypeScript

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/your-username/todopixel.git
cd todopixel

# Install dependencies
npm install

# Configure your database in .env or app config
# For example (PostgreSQL):
# DB_HOST=localhost
# DB_PORT=5432
# DB_USERNAME=youruser
# DB_PASSWORD=yourpassword
# DB_DATABASE=todopixel

# Run the development server
npm run start:dev
