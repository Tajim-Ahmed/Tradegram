// controllers/postController.js
export const getAllPosts = (req, res) => {
  res.json([
    { id: 1, title: "First Post", content: "Hello world!" },
    { id: 2, title: "Second Post", content: "Another post" },
  ]);
};
