import express from "express";
const router = express.Router();

// Store posts in memory for demo (replace with DB in real app)
let posts = [
  {
    _id: "post1",
    postUserId: "user1",
    name: "Test User",
    description: "This is a test post.",
    location: "Test City",
    picturePath: "",
    userPicturePath: "",
    likes: {},
    comments: []
  }
];

// GET all posts
router.get("/", (req, res) => {
  res.json(posts);
});

// POST a new post
router.post("/", (req, res) => {
  // For demo, just add a new post with dummy data
  const newPost = {
    _id: `post${posts.length + 1}`,
    postUserId: req.body.userId || "user1",
    name: "Test User",
    description: req.body.description || "New post",
    location: "Test City",
    picturePath: "",
    userPicturePath: "",
    likes: {},
    comments: []
  };
  posts.unshift(newPost);
  res.status(201).json(posts); // <--- Return the full posts array!
});

export default router;