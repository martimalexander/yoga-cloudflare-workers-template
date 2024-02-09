import { Hono, Response } from 'hono';

// Create a new Hono instance
const app = new Hono();

// Define route for root endpoint
app.get('/', (c) => {
  return c.text("Hey server is running");
});

// Get IP information using fetch
app.get('ip', async (c) => {
  try {
    const response = await fetch("https://ipinfo.io/1.1.1.1/json");

    if (!response.ok) {
      throw new Error(`Error fetching IP: ${response.statusText}`);
    }

    const data = await response.json();
    return c.text(JSON.stringify(data)); // Return JSON data as text

  } catch (error) {
    console.error('Error fetching IP:', error);
    return c.text('Failed to get IP information');
  }
});

// Export the Hono instance as the default app
export default app;
