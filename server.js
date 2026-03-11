import express from "express";
import apiClient from "./apiClient.js";

const app = express();

const port = 3000;



app.get("/api/fun-fact", async (req, res) => {
  try {
    const { language } = req.query;

    let response;

    if (language) {
      response = await apiClient.get(`/random?language=${language}`);
    } else {
      response = await apiClient.get("/api/v2/facts/random");
    }

    const transformedData = `{ "fact" : "${response.data.text}" }`;

    res.send(transformedData);
  } catch (error) {
    res.status(500).json({ error: error.message });
    console.error(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
