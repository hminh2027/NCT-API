const axios = require('./axios')

export const getSong = key => {
    return axios.post('/media/info', {
        key,
        type: 'song',
    })
}

export const getPlaylist = key => {
    return axios.post('/media/info', {
        key,
        type: 'playlist',
    })
}

export const getLyric = key => {
    return axios.post('/lyric', {
        key,
        type: 'song',
    })
}

export const getTop20 = () => {
    return axios.post('/ranking/top20', {
        category: 'nhac-viet',
        type: 'song',
        size: 20,
    })
}

export const getTop100 = key => axios.post('/top100', {key})

export const getHome = () => axios.post('/home')

export const getTopic = () => axios.post('/topic')

// Do more features, think about buildin server or package