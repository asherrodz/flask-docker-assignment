
const express = require("express");

const app = express();
const PORT = 3000;

// Flask backend URL
const BACKEND_URL =
    process.env.BACKEND_URL || "http://localhost:8000/submit";

// Middleware
app.use(express.json());

// Serve HTML, CSS and JavaScript files
app.use(express.static("public"));

// Receive form data and forward it to Flask
app.post("/submit", async (req, res) => {
    try {
        const response = await fetch(BACKEND_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(req.body)
        });

        const data = await response.json();

        res.status(response.status).json(data);

    } catch (error) {
        console.error("Backend connection error:", error);

        res.status(500).json({
            error: "Unable to connect to Flask backend"
        });
    }
});

// Start Express server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Frontend running on port ${PORT}`);
});
