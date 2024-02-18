import express from "express";

const app = express();

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

// get a list of 5 jokes

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is a joke",
    },
    {
      id: 2,
      title: "Another joke",
      content: "This is another joke",
    },
    {
      id: 3,
      title: "A third joke",
      content: "This is yet another joke",
    },
    {
      id: 4,
      title: "A fourth joke",
      content: "This is the fourth joke",
    },
    {
      id: 5,
      title: "A fifth joke",
      content: "This is the fifth joke",
    },
  ];
  res.send(jokes);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
