const express = require('express');
const tagsRouter = express.Router();

// UPDATE
tagsRouter.get('/', async (req, res) => {
  
    try {
      const tags = await getAllTags();
      res.send({
        tags
      });
  
    } catch (error) {
      
    }
  
  
  });
  
  module.exports = tagsRouter;