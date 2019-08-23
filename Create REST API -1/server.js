const http = require('http');

const app = require('./app');

const port = process.env.PORT || 3000;

const server = http.createServer(app);

// Router 1
app.use("/posts", (req, res) => {
  res.send({
    ok:true
  })
});


// Router 2
app.use("/test", (req, res) => {
  res.send({
    ok:true
  })
});

server.listen(port);
