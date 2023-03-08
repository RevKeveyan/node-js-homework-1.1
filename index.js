const {getUsers, getUserById} = require('./controllers/UserController');
const {getPosts, getPostById, getUserPost, getUserPostById} = require('./controllers/PostsController');
const {createFile, deleteFile,updateFile} = require('./controllers/FileController');
const { PORT,
        HOSTNAME 
        } = require('./constants');

const express = require('express');
const app = express(); 



//create a file


const user = express.Router();
app.use('', user);

//----------------users-------------
user.get('/users', getUsers);
user.get('/users/:id', getUserById);
user.get('/users/:userId/posts', getUserPost);
user.get('/users/:userId/posts/:postId', getUserPostById);

//-------------posts-----------------
user.get('/posts', getPosts);
user.get('/posts/:id', getPostById);

//-------------file----------------------
user.post('/create-file',createFile);
user.post('/update-file',updateFile);
user.delete('/delete-file',deleteFile);

//--------------------------------------
app.listen(PORT,HOSTNAME, function(err){
    if (err) console.log(err);
    console.log(`Server running at http://${HOSTNAME}:${PORT}/`);
});