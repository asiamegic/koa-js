const Koa = require('koa');
const serve = require('koa-static');

const app = new Koa();

// Serve static files from the public directory
app.use(serve('./public'));

// Set the port to listen on
const port = process.env.PORT || 3000;

// Start the server
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});