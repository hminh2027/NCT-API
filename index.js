const axios = require('./axios')

const top100Keys = [
    {name: 'nhactre', key: 'm3liaiy6vVsF'},
    {name: 'trutinh', key: 'RKuTtHiGC8US'},
    {name: 'nhactrinh', key: 'v0AGjIhhCegh'},
    {name: 'tienchien', key: 'TDSMAL1lI8F6'},
    {name: 'rapviet', key: 'iY1AnIsXedqE'},
    {name: 'remixviet', key: 'aY3KIEnpCywU'},
]
const getHome = () => axios.post('/home')

const getTopic = () => axios.post('/topic')

const getSong = async key => {
    const rs = await axios.post('/media/info', {
        key,
        type: 'song',
    })
    return rs.song
}

const searchSong = async key => {
    const rs = await axios.post('/search/all', {
        key,
        pageSize: 12
    })
    return rs.search
}

const getPlaylist = async key => {
    const rs = await  axios.post('/media/info', {
        key,
        type: 'playlist',
    })
    return rs.playlist
}

const getLyric = async key => {
    const rs = await axios.post('/lyric', {
        key,
        type: 'song',
    })
    return rs.lyric
}

const getTop20 = async () => {
    const rs = await axios.post('/ranking/top20', {
        category: 'nhac-viet',
        type: 'song',
        size: 20,
    })
    return rs.ranking.song
}

const getTop100 = async name => {
    const key = top100Keys.find(e=>e.name === name).key
    const rs = await axios.post('/top100', {key})
    return rs.playlist
}

module.exports = {getTop100, getHome, getTop20, getTopic, getLyric, getPlaylist, getSong, searchSong}