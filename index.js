const axios = require('./axios')

class Nhaccuatui {
    getSong(key) {
        return axios.post('/media/info', {
            key,
            type: 'song',
        })
    }

    getPlaylist(key) {
        return axios.post('/media/info', {
            key,
            type: 'playlist',
        })
    }

    getLyric(key) {
        return axios.post('/lyric', {
            key,
            type: 'song',
        })
    }

    getTop20() {
        return axios.post('/ranking/top20', {
            category: 'nhac-viet',
            type: 'song',
            size: 20,
        })
    }

    getTop100(key) {
        return axios.post('/top100', {
            key,
        })
    }

    getHome() {
        return axios.post('/home')
    }

    getTopic() {
        return axios.post('/topic')
    }
}

const nct = new Nhaccuatui()
console.log(nct.getTopic().then((res) => {
    // console.log(res)
}))

module.exports = new Nhaccuatui()