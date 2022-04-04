const axios = require('axios')
const cryptoJS = require('crypto-js')
const queryString = require('querystring')
require('dotenv').config()

const CIHPER = process.env.AES_CIPHER
const AES_KEY = process.env.AES_KEY
const API_KEY = process.env.API_KEY

const encrypt = () => {
    const t = new Date().getTime().toString()
    const n = cryptoJS.AES.decrypt(CIHPER, AES_KEY).toString(cryptoJS.enc.Utf8)
    const s = cryptoJS.HmacSHA512(t, n).toString()
    return {
        a: API_KEY,
        s,
        t,
    }
}

const instance = axios.create({
    baseURL: 'https://beta.nhaccuatui.com/api',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
    }
})

const requestHandler = request => {
    request.url += `?${queryString.stringify(encrypt())}`
    request.data = queryString.stringify(request.data)
    return request
}

const responseHandler = response => response.data

const errorHandler = error => Promise.reject(error)

instance.interceptors.request.use(
    request => requestHandler(request),
    error => errorHandler(error)
)

instance.interceptors.response.use(
    response => responseHandler(response),
    error => errorHandler(error)
)

module.exports = instance