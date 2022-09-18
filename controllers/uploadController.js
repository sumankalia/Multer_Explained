const Upload = require('../Models/Upload')

exports.create = async (req, res) => {
  const files = [];
  try{
    if(Array.isArray(req.files.uploads) && req.files.uploads.length >0){
      for(let file of req.files.uploads){
        files.push(file.path);
      }
    }
      Upload.create({
        name: req.body.name,
        files
      })
            res.json({
              message: 'Uploads succesful',
            })
          }catch(err){
            return res.status(400).json(err);
          }
   
};
