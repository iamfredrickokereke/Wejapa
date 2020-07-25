const http = requestuire("http");

const port = process.env.PORT || 3003;

http
  .createServer((request, response) => {
    if (request.method === "GET" && request.url === "/") {
      response.writeHead(200, { "Content-Type": "text/html" });
      response.write("Hello World, welcome to WeJapa Internships");
      response.end();
    }

    response.writeHead(404, { "Content-Type": "text/html" });
    response.end("The page route doesn't exist");
  })

  .listen(port, (error) => {
    if (error) {
      console.log("Something don shele :" + error);
    } else {
      console.log(`server is listening on http://localhost:${port}`);
    }
  });
