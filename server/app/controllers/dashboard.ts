const URLS = require('../models/URL')

const getAllURLS = async (req, res) => {
  URLS.find({ userId: req.user.userId })
    .then((data: JSON) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(404).json({
        message: 'Record does not Exist'
      })
    })
}

export = getAllURLS
