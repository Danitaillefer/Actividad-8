const http = require("node:hhtp");
const app = require("./src/app");

require("dotenv").config();

const server = http.createServer(app);

const PORT = process.env.PORT || 3000;
server.listen(PORT);

//Listeners
server.on("listining", ()=> {
    console.log(`Server listening on port ${PORT}`);
});

server.on("error", (error) => {
    console.log(error);
})