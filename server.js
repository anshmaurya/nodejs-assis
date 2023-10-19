const http = require('http');
const mendata = 
      {
         "id":1,
         "name":"Men's T-Shirt",
         "brand": "ABC",
         "price": 19.99,
         "color" : "Blue",
         "size": "XL",
         "category": "Clothing"
      };
      const womendata = 
         {
         "id":1,
         "name":"Women's T-Shirt",
         "brand": "ABC",
         "price": 20.99,
         "color" : "Pink",
         "size": "XL",
         "category": "Chothing"
      }

const server = http.createServer((req, res) => {
   if (req.url === '/') {
        res.writeHead(200,{'Content-Type': 'text/plain'});
        res.end("Welcome to Men & Women Dummy Data");

   }else if (req.url === '/men'){
     res.writeHead(200,{'Content-Type': 'application/json'});
     res.write(JSON.stringify(mendata));
     res.end();
      
   }else if (req.url === '/women'){
      res.writeHead(200,{'Content-Type': 'application/json'}); 
      res.end(JSON.stringify(womendata));
      res.end();
     
   }else if (req.url === '/other'){
      res.writeHead(400);
      res.end("page not found");
   }
});

server.listen(3000);

console.log(`Http server is running on port 3000`)