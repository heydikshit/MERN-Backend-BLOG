const express = require('express')
const { getAllBlogControllers, createBlogController, updateBlogController, getBlogByIdController, deleteBlogController, userBlogController } = require('../controllers/blogController')
const router = express.Router() //router object

//routes 
router.get('/all-blog', getAllBlogControllers) //GET ALL BLOGS
router.post('/create-blog', createBlogController) //POST CREATE BLOG
router.put('/update-blog/:id', updateBlogController) //PUT UPDATE BLOG
router.get('/get-blog/:id', getBlogByIdController) //GET SINGLE BLOG
router.delete('/delete-blog/:id', deleteBlogController) //DELETE DELETE BLOG

//GET USER BLOGS 

router.get('/user-blog/:id', userBlogController)
module.exports = router 