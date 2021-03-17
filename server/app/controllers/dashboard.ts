import { IResult } from '../interface'

const URLS = require('../models/URL')

const getAllURLS = async (req, res) => {
  URLS.find({ userId: req.user.userId })
    .then((data: IResult) => data)
    .catch((err) => {
      res.status(404).json({
        message: 'Record does not Exist'
      })
    })
}

const deleteURL = async (req, res) => {
  URLS.findOneAndRemove({ urlCode: req.params.code })
    .then((data: JSON) => {
      if (data) {
        res.send({ success: true })
      } else {
        res.send({ success: false })
      }
    })
    .catch((err) => {
      res.status(404).json({
        message: 'Record does not Exist'
      })
    })
}

export { getAllURLS, deleteURL }
