const { nanoid } = require('nanoid')
const URLS = require('../models/Url')

const generateNanoId = () => nanoid(10)

const urlCheck = (id) => {
  URLS.findOne({ urlCode: id }).then((res) => {
    const resp = !res ? id : generateNanoId()
    return resp
  })
}
