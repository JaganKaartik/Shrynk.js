const { nanoid } = require('nanoid')
const URLS = require('../models/URL')

export const generateId = () => {
  const id = nanoid(10)
  return id
}

export const urlCheck = async (id) => {
  const result = await URLS.findOne({ urlCode: id }).then((res) => {
    const resp = !res ? id : generateId()
    return resp
  })
  return result
}
