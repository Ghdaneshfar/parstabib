const express = require('express');
const app = express();
const port = 3000;

require('dns').lookup(require('os').hostname(), function (err, add, fam) {
    console.log('addr: '+add);
  })
  
app.get('/', (req, resp) => {
    resp.send('hello dears');
});
app.listen(port, () => {
    console.log(`server is runing on port ${port}`);
});