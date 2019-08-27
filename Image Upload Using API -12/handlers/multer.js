const multer = require('multer')

module.exports = multer({
  storage: multer.diskStorage({}), // diskStorage, memoryStorage 
  fileFilter: (req, file, cb) => { // Which file format allow 
    if (!file.mimetype.match(/jpe|jpeg|png|gif$i/)) {
      cb(new Error('File is not supported'), false)
      return
    }

    cb(null, true)
  }
})
