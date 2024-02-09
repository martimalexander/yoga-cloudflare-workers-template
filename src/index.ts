import { Hono } from 'hono';

// Create a new Hono instance
const app = new Hono();

// Define route for root endpoint
app.get('/', (c) => {
  return c.text("Hey server is running");
});

// Get IP information using fetch
app.get('/ip/:anyip', async (c, { params }) => {
  const userIp = params.anyip; // Get the user-provided IP from the URL path

  try {
    const response = await fetch(`https://ipinfo.io/${userIp}/json`);

    if (!response.ok) {
      throw new Error(`Error fetching IP: ${response.statusText}`);
    }

    const data = await response.json();
    return c.json(data); // Return JSON data as a JSON object
  } catch (error) {
    console.error('Error fetching IP:', error);
    return c.status(500).text('Internal Server Error');
  }
});

// Export the Hono instance as the default app
export default app;
