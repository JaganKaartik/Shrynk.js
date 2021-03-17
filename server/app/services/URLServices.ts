const { nanoid } = require('nanoid')
const isUrl = require('is-valid-http-url')

const URLS = require('../models/URL')

export const generateID = () => {
  const id = nanoid(10)
  return id
}

export const validID = async (id) => {
  const result = await URLS.findOne({ urlCode: id }).then((res) => {
    const resp = !res ? id : generateID()
    return resp
  })
  return result
}

export const urlCheck = async (url) => {
  const resp = await isUrl(url)
  return resp
}
