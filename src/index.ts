import { Hono, ResponseBuilder } from 'hono';

// Create a new Hono instance
const hono = new Hono();

// Define route for root endpoint
hono.get('/', (_, response) => {
  return response
    .status(200)
    .contentType('text/plain')
    .send('CF Hono Working');
});

// Export the Hono instance as the default app
export default hono;
