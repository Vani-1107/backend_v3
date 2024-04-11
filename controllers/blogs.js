const { blogs } =  require('../models/blogs.js');

const addBlog = async(req,res) => {
    try{
        const {mainHeader , header , body , image , link } = req.body;

        const response =  await blogs.create({
            mainHeader,
            header,
            body,
            image,
            link,
        });

        res.status(201).json({
            success: true,
            response,
          });
    }
    catch(err){
        res.status(500).json({
            success: false,
            data: "failed to add blog",
            message: err.message,
          });
    }
}; 

const editBlog = async(req,res) => {
    try{

    }
    catch(err){

    }
};

module.exports = {addBlog,editBlog};