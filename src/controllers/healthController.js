export const checkHealth = (req, res) => {
  try {
    res.status(200).json({ success: true, message: "App is working properly" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};
