<div id="top"></div>
<br />

# NHACCUATUI API
A music api built base on `Nhaccuatui` api

This is a NodeJS library with Javascript support NodeJS Server


<br />

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#built-with">Built With</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#prerequisites">Prerequisites</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
### Built With

* [Javascript](https://www.javascript.com/)
* [CryptoJs](https://www.npmjs.com/package/crypto-js)
* [Axios](https://www.npmjs.com/package/axios)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Installation

```sh
npm install nctapi
```

</br>

### Prerequisites

```javascript
const {getTop100, getHome, getTop20, getTopic, getLyric, getPlaylist, getSong, searchSong} = require('nctapi')
```

or

```javascript
const api = require('nctapi')
```


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

### 1. Search Song/Playlist
</br>

* Returns songs/playlists that closely match your search input
* Especially you can use this function to get the key of any song/playlist


```javascript
searchSong(input)
```


### 2. Get Song
</br>

* Returns song's detail

```javascript
getSong(key)
```

### 3. Get Lyric
</br>

* Returns song's lyric

```javascript
getLyric(key)
```

### 4. Get Playlist
</br>

* Returns playist's detail

```javascript
getPlaylist(key)
```

### 5. Get Home
</br>

* Returns homepage's information

```javascript
getHome()
```

### 6. Get Topic
</br>

* Returns all songs' topic

```javascript
getTopic()
```


### 7. Get Top 20
</br>

* Returns top 20 songs

```javascript
getTop20()
```

### 8. Get Top 100
</br>

* Returns top 20 songs

```javascript
getTop100(name)
```
There are 6 name type: 'nhactre', 'trutinh', 'nhactrinh', 'tienchien', 'rapviet', 'remixviet'

</br>
<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Vu Hoang Minh - [Facebook](https://www.facebook.com/swag.lauch) - vhminh2027@gmail.com

Project Link: [NCT-API-Package](https://github.com/hminh2027/NCT-API)

Base API Link: [Beta-NCT](https://beta.nhaccuatui.com)

<p align="right">(<a href="#top">back to top</a>)</p>
