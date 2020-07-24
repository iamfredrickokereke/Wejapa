const http = require('http')

const port = process.env.PORT || 3003


http
    .createServer( (req, res) => {
        if (req.method === 'GET' && req.url === '/') {
            res.writeHead(200, { 'Content-Type' : 'text/html'})              
            res.write('Hello World, welcome to WeJapa Internships') 
            res.end()                      
        } 

            res.writeHead(404, { 'Content-Type': 'text/html' })            
            res.end('The page route doesn\'t exist') 
    })
             

    .listen(port, (error) => {
        if (error) {
            console.log('Something don shele :' + error)                        
        } else {
            console.log(`server is listening on http://localhost:${port}`)                      
        }
    })