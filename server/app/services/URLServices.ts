const { nanoid } = require('nanoid')
const isUrl = require('is-valid-http-url')
const URLS = require('../models/Url')

/* Function that generates Random NanoID */
export const generateID = () => {
  const id = nanoid(10)
  return id
}

/* Validation function that returns valid id */
export const validID = async (id) => {
  const result = await URLS.findOne({ urlCode: id }).then((res) => {
    const resp = !res ? id : generateID()
    return resp
  })
  return result
}

/* Validation function that validates input url */
export const urlCheck = async (url) => {
  const resp = await isUrl(url)
  return resp
}
