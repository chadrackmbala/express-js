const express = require('express');
const server = express();
const articles = require('./models/articles.json');
const articlesRouter = require('./routes/articles');
const PORT = 3001;

server.use(express.json())

server.use('/articles', articlesRouter)

articlesRouter.get('/', (req, res) => {
    console.log("rendu serveur");
    res.send({
        name:"kadea"
    })
})

server.listen(PORT, () => console.log(`server runing on port ${PORT}`));