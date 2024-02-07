import { Hono, ResponseBuilder } from 'hono';

// Define your login credentials
const validUsername = 'admin';
const validPassword = 'password123';

// Create a new Hono instance
const hono = new Hono();

// Define route for login endpoint
hono.get('/', (_, response) => {
  const html = `
    <html>
    <head>
      <title>Login Page</title>
    </head>
    <body>
      <h1>Login</h1>
      <form action="/login" method="POST">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required><br><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required><br><br>
        <input type="submit" value="Login">
      </form>
    </body>
    </html>
  `;

  return response
    .status(200)
    .contentType('text/html')
    .send(html);
});

// Define route for login submission
hono.post('/login', async (request, response) => {
  const { username, password } = await request.formData();

  // Check if the provided username and password match the valid credentials
  if (username === validUsername && password === validPassword) {
    return response
      .status(200)
      .contentType('text/plain')
      .send('Login successful!');
  }

  return response
    .status(401)
    .contentType('text/plain')
    .send('Invalid username or password');
});

export default hono;
