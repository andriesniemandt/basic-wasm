const express = require("express");
const app = express();

// Serve static files from our public directory
app.use(express.static('public'));

app.listen(2222, () => console.log("Express server running on port 2222"));