import express from "express";
import morgan from "morgan";

const PORT = 4000;

const app = express();
const logger = morgan("dev");

const handleHome = (req, res) => {
    return res.send("<h1>I love You</h1>");
}

const handleProtected = (req, res) => {
    return res.send("Weclome to the private lounge.");
}

app.use(logger);

app.get("/", handleHome);
app.get("protected", handleProtected);

const handleListening = () => console.log(`✅ Server listening on port http://localhost:${PORT} 🚀`)

app.listen(PORT, handleListening);