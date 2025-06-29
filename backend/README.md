# backend-travel
# travel-web
# backend-travel

# Travel Booking Backend

This backend uses Node.js, Express, and PostgreSQL for user authentication and booking management.

## Setup

1. Install dependencies:
   ```sh
   npm install
   ```

2. Set up a PostgreSQL database and create a user with access.

3. Create a `.env` file in the backend directory with the following variables:
   ```env
   PGUSER=your_pg_user
   PGPASSWORD=your_pg_password
   PGHOST=localhost
   PGDATABASE=travel_booking
   PGPORT=5432
   JWT_SECRET=your-secret-key
   ```

4. Start the server:
   ```sh
   npm start
   ```

The server will automatically create the required tables if they do not exist.
