<img width="595" alt="screen shot 2017-03-27 at 12 28 56" src="https://cloud.githubusercontent.com/assets/20629455/24354324/313f6180-12e9-11e7-94dd-5edcb7914260.png">

___
<br>


# Video Playlist

## Local Setup

## Stack

### Front-End

HTML, SCSS, skeleton, BEM class naming convention (partially), JavaScript and Angular 1, ES6 (where possible).

### Back-End

Node.js, Express, ES6 (where possible).

### Development

npm, bower, gulp, git, GitHub, insomnia.

- using [this](http://nvie.com/posts/a-successful-git-branching-model/) git branching model to a degree.

## Process

1. Fleshed out wireframe.
2. Defined MVP features.
3. Environment setup.
3. Created express web server to serve static files.
4. Built wireframe in HTML and CSS.
5. Created backend API and database.
6. Created front-end JS to make API requests and update UI.
7. Adopted a new design direction.
8. Adapted the component to these designs in HTML, SCSS and JS.
9. Build on the new radial progress bar and make it my own.

### 1. Wireframes

Although simple wireframes were provided in the brief for this project I prefer to have a more detailed idea of the final aesthetic  and design of my apps before I start development. I find having a clear target helps when constructing the app and completing the initial styling.

Given the time constraints of the project I decided to cherry pick features and styling ques from existing mobile video sites (e.g BBC iPlayer). I used pintrest to facilitate this comparison.

<img width="1362" alt="screen shot 2017-03-30 at 11 22 50" src="https://cloud.githubusercontent.com/assets/20629455/24499913/4453b1d2-153b-11e7-9f8a-291c4de31cf2.png">

From those pins I liked how iPlayer and 4od have the first video in the playlist larger than the others. I also liked the player which had a title and gradient overlay on top of the thumbnails (both below).

<img width="1362" alt="screen shot 2017-03-30 at 11 26 36" src="https://cloud.githubusercontent.com/assets/20629455/24500027/c45a2514-153b-11e7-9564-f5ece82d2012.png">

![screen shot 2017-03-30 at 11 25 53](https://cloud.githubusercontent.com/assets/20629455/24500041/da1de0a2-153b-11e7-877b-5c8e3696b6de.png)

I used balasmiq to create a single wire frame which I think should be enough, paired with the provided wireframes, to begin building the app.

![screen shot 2017-03-30 at 11 40 21](https://cloud.githubusercontent.com/assets/20629455/24500556/cb9ca70a-153d-11e7-8349-2677743806f5.png)


### 2. Features

#### 2.1 MVP

- Video index page and show pages which follow the theme of the above wireframe.
- All video controls will be provided by Youtube embedded or similar.

The above must be built with a mobile first approach, be cross browser compatible (2 versions back), make consideration for accessibility guidelines.

The app must also be deployed to heroku.

#### 2.2 Nice to Have

- Landing page / slick animation to index page.
- Search functionality.
- Pagination.

### 3. Server / Environment Setup

- will be using npm as a package manager and bower to manage my front end libraries.
- will try and write as much of my back end stuff in es6 as possible without additional tools as I'm getting a little rusty with it.
- have used a gulp setup from a previous project.
- using node js and express to server the application.
- also using the file structure taught to me on the course, helps to reason with code and make it more organised.
- using skeleton for its grid and responsiveness.

### 4. HTML and SCSS Wireframes

- starting from the mobile index page. Will be using skeletons grid system.
- starting with creating angular views for each page (home, index and show) and router.
- was going to use skeleton but cannot control number of columns exactly through breakpoints.
- then thought pure css but no responsive images or video
- will use bootstrap now.
- wireframes taking longer than expected
- accessibility and cross broswer compatability will need to be introduced asap.
- trying to figure out what I want from the show page, definitely want some sort of overlay on the video / custom controls, maybe similar to this: http://www.highsnobiety.com/2017/03/30/mac-demarco-this-old-dog-video/
- refocus on mvp

<img width="1375" alt="screen shot 2017-03-31 at 11 48 05" src="https://cloud.githubusercontent.com/assets/20629455/24547697/0ffd4514-1609-11e7-918d-1fd691b85dc4.png">

<img width="1375" alt="screen shot 2017-03-31 at 11 48 12" src="https://cloud.githubusercontent.com/assets/20629455/24547696/0ffbab78-1609-11e7-834e-51ba0a654f7b.png">


### 5. Real Data

- will first make a factory for the video playlist requests
- had to use filter to seperate first video from later videos
- pass index as parameter to allow correct video to be selected on video show page
- ran into security issues as was interpolating in a src attribute, researched and found $sce solution.

<img width="1347" alt="screen shot 2017-03-31 at 11 49 16" src="https://cloud.githubusercontent.com/assets/20629455/24547586/82df17a2-1608-11e7-9627-3df23f3cbb15.png">
<img width="1375" alt="screen shot 2017-03-31 at 11 49 26" src="https://cloud.githubusercontent.com/assets/20629455/24547585/82cba884-1608-11e7-995a-a429dede8891.png">


### 6. More Detailed Designs

- not happy with it, not sure where to take it. Feel like I need more of a header.
- will start on index page. correct thumbnails, different overlays, date and see how I feel then.

### 8. Implementing New Design

### 9. Making It My Own

## Known Issues To Be Addressed