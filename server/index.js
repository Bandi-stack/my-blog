require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const multer = require('multer');
const PostModel = require('./Models/posts');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Atlas connected"))
.catch(err => console.error("MongoDB Atlas connection error:", err));

const storage = multer.memoryStorage();
const upload = multer({ storage });

app.get('/get', (req, res) => {
    PostModel.find()
        .then(result => res.json(result))
        .catch(err => res.status(500).json(err));
});

app.post('/add', upload.array("image"), async (req, res) => {
    try {
        const { title, content } = req.body;
        if (!title || !content) {
            return res.status(400).json({ message: "All fields are required" });
        }

        let base64Images = [];
        if (req.files && req.files.length > 0) {
            base64Images = req.files.map(file => file.buffer.toString("base64"));
        }

        const newPost = await PostModel.create({
            image: base64Images.join(','),
            title,
            content
        });

        res.json(newPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

app.get('/get/:id', async (req, res) => {
    try {
        const post = await PostModel.findById(req.params.id);
        if (!post) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.json(post);
    } catch (err) {
        res.status(500).json({ message: "An error occurred", error: err });
    }
});

const PORT = process.env.PORT || 3006;
app.listen(PORT, () => {
    console.log(`Server is running at port ${PORT}`);
});
