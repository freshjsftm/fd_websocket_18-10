const http = require('http');
const app = require('./app');

const httpServer = http.createServer(app);

const PORT = process.env.PORT || 5000;
httpServer.listen(PORT, ()=>{
  console.log('server started at port '+PORT)
})