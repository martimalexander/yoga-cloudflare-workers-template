import { Hono, ResponseBuilder } from 'hono';
import axios, { AxiosResponse} from 'axios';
// Create a new Hono instance
const app = new Hono();

// Define route for root endpoint
app.get('/', (c) => {
  return c.text("Hey server is running");
})

app.get('ip',(c) => {
  const response = fetch("https://ipinfo.io/1.1.1.1/json");
  return response.json
})

// Export the Hono instance as the default app
export default app;
