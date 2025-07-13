import express from "express";
const router = express.Router();

// Dummy user data for demo
router.get("/:id", (req, res) => {
  res.json({
    _id: req.params.id,
    firstName: "Test",
    lastName: "User",
    location: "Test City",
    occupation: "Tester",
    viewedProfile: 0,
    impressions: 0,
    friends: [],
    picturePath: ""
  });
});

export default router;