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

* [ExpressJs](https://expressjs.com/)
* [Javascript](https://www.javascript.com/)

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Installation

```sh
npm install the-utc-api
```

</br>

### Prerequisites

```javascript
const { getAllSchedule, getScheduleOfToday, getScheduleOfDay, getMarks, getGPA, getStudent, getTuition, getPaidTuition, getTuitionDebt } = require('utc-schedule-api')
```

or

```javascript
const api = require('the-utc-api')
```


<p align="right">(<a href="#top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

### 1. Schedule
</br>

* Get all the subjects and time periods of student

```javascript
await getAllSchedule(username, password)
```


* Get the subjects and time periods of student today

```javascript
await getScheduleOfToday(username, password)
```


* Get the subjects and time periods of student on specific day

```javascript
await getScheduleOfDay(username, password, new Date(year, month, day))
```

</br>

### 2. Mark
</br>

* Get all the marks of the student (can get at specific grade)

```javascript
await getMarks(username, password, grade)
```


* Get the GPA of the student (can get in specific year)

```javascript
await getGPA(username, password, year)
```

</br>

### 3. Student Profile
</br>

* Get all personal information of the student

```javascript
await getStudent(username, password)
```

</br>

### 4. Tuition
</br>

* Get all the tuition detail of the student

```javascript
await getTuition(username, password)
```

* Get all the paid tuition of the student

```javascript
await getPaidTuition(username, password)
```
* Get all the tuition debt of the student

```javascript
await getTuitionDebt(username, password)
```
</br>

<p align="right">(<a href="#top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Vu Hoang Minh - [Facebook](https://www.facebook.com/swag.lauch) - dackheros@gmail.com

Project Link: [UTC-API-Package](https://github.com/hminh2027/UTC-API-Package)

API Link: [The-UTC-API](http://theutcapi.herokuapp.com/)

<p align="right">(<a href="#top">back to top</a>)</p>
