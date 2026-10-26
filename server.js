import "dotenv/config";
import app from "./src/app.js";

const PORT = process.env.PORT || 3000;

// Start the server
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
