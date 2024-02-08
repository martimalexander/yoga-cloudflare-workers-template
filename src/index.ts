import { Hono, ResponseBuilder } from 'hono';

// Create a new Hono instance
const app = new Hono();

// Define route for root endpoint
app.get('/', (c) => {
  return c.text("Hey server is running");
})

// Export the Hono instance as the default app
export default app;
