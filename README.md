<img width="595" alt="screen shot 2017-03-27 at 12 28 56" src="https://cloud.githubusercontent.com/assets/20629455/24354324/313f6180-12e9-11e7-94dd-5edcb7914260.png">

___


# Video Playlist App - [visit site](https://video-playlist-app.herokuapp.com/index)

<img width="849" alt="screen shot 2017-04-03 at 20 42 57" src="https://cloud.githubusercontent.com/assets/20629455/24628148/34829e46-18ae-11e7-8613-fc2e9737b7c7.png">

## Local Setup

1. Download the directory and navigate to it's route in terminal.
2. run `npm i`, `bower i`, and `gulp` from terminal.
3. visit `http://localhost:7000/` in chrome.

## Stack

### Front-End

HTML, CSS (SCSS), Bootstrap, BEM class naming convention, JavaScript (ES6) and AngularJS(1).

- As the brief included an emphasis on responsive design techniques I wanted to use a CSS framework with a responsive grid system. I considered using Skeleton and PureCSS (lightweight) however opted for Bootstrap and it's more customisable grid system.
- In previous projects I had struggled with class naming conventions and wanted to give BEM a go.
- I felt the multi-view layout of the app warranted a front-end framework. Although I was in the process of learning react I was still more comfortable with AngularJS.

### Back-End

Node.js (ES6), Express.js.

- Simply the web server technologies I had most experience with.

### Development

npm, Bower, gulp.js, Git, GitHub.

- I used npm and bower to handle the installation and tracking of node packages and front-end packages respectively. 
- Gulp was the only task runner I had experience with from previous projects. In this instance it helped me to combine and minify my static files.
- I used [this](http://nvie.com/posts/a-successful-git-branching-model/) git branching model to a degree.

### Deployment

Heroku.

- The only means of deployment I had meaningful experience with.

## Process

1. Fleshed out the provided wireframes.
2. Defined the MVP features.
3. Setup the development environment and created the Express.js web server to serve static files.
4. Built the wireframes in HTML, CSS (SCSS, Bootstrap) and AngularJS.
5. Populated the wireframes with real data from the provided YouTube JSON API.
6. Slightly polished the design and added some features.
7. Tidied up the code base and made an attempt at accessibility and cross browser compatability.
8. Deployed the app to Heroku.
9. Made changes to the design of the app on larger screen size.
10. Added some UI features.

### 1. Wireframes

Although simple wireframes were provided in the brief for this project I wanted a more detailed idea of the final aesthetic and design before I started development (in fact, I did not go far enough).

I began this process by creating a Pintrest board of some popular media player web apps.

<img width="1362" alt="screen shot 2017-03-30 at 11 22 50" src="https://cloud.githubusercontent.com/assets/20629455/24499913/4453b1d2-153b-11e7-9f8a-291c4de31cf2.png">

From those I liked how iPlayer had the first video in the playlist larger than the others. I also liked the player which had a title and gradient overlay on top of the thumbnails (both below).

<img width="1362" alt="screen shot 2017-03-30 at 11 26 36" src="https://cloud.githubusercontent.com/assets/20629455/24500027/c45a2514-153b-11e7-9564-f5ece82d2012.png">

![screen shot 2017-03-30 at 11 25 53](https://cloud.githubusercontent.com/assets/20629455/24500041/da1de0a2-153b-11e7-877b-5c8e3696b6de.png)

I then used balasmiq to create a simple wire frame which I thought, paired with the provided wireframes, would be enough to begin building the app.

![screen shot 2017-03-30 at 11 40 21](https://cloud.githubusercontent.com/assets/20629455/24500556/cb9ca70a-153d-11e7-8349-2677743806f5.png)


### 2. MVP Features

Before coding I wanted to restate to myself what the MVP features were.

1. Video index page and show pages which follow the theme of the above wireframe.
2. All video controls will be provided by Youtube embedded or similar.

The above must be built with a mobile first approach, be cross browser compatible (2 versions back), make consideration for accessibility guidelines.

The app must also be deployed to heroku.

### 3. Environment / Server Setup

At this stage I initiated the project as a npm and Bower project, copied over the gulp.js setup from a previous project and setup an Express.js web server to serve my index.html file and subsequent requests for static files (CSS, JS, HTML).

This stage was a little tricky but fairly straight forward.

### 4. HTML, CSS (SCSS, Bootstrap) and AngularJS Wireframes

First I created the AngularJS router (ui-router) and the HTML views for each page I intended to build (video-index and video-show).

I then started with the video-index page for a mobile screen. It was at this point I realised (as detailed in the above stack section) that skeleton (which I had already implemented via Bower) was not a good choice for this project and spent some time first implementing PureCSS and then Bootstrap.

Creating the basic wireframes took longer than I would have liked. The result can be seen below. All information was hard coded into the AngularJS controller files at this point.

<img width="1375" alt="screen shot 2017-03-31 at 11 48 05" src="https://cloud.githubusercontent.com/assets/20629455/24547697/0ffd4514-1609-11e7-918d-1fd691b85dc4.png">

<img width="1375" alt="screen shot 2017-03-31 at 11 48 12" src="https://cloud.githubusercontent.com/assets/20629455/24547696/0ffbab78-1609-11e7-834e-51ba0a654f7b.png">


### 5. Real Data

I first created an AngularJS factory to handle the requests to the YouTube JSON API. 

I then made use of JavaScript's filter function to separate the first video from the others so it could be bound (with AngularJS) to the HTML separately and styled as such. Later in the project I realised this was not the best method and instead made use of ng-repeat's `$first`, and the `ng-class` directive to achieve the same effect with less markup.

I then used the ng-repeats `$index`, passed as a parameter to the ui-sref directive, to identify which video's information should be loaded when a video show page link was clicked.

BLOCKER: At this point I ran into a security issue as I was trying to interpolate the YouTube video ID into the src attribute of the YouTube embedded player's iframe. I had not come across this issue before however after some research I found that this problem could be solved by making the interpolated string a 'trusted variable'. This is done by using angulars `$sce` service like so: `vm.trustedSrc = $sce.trustAsResourceUrl(STRING);`

The wireframes were now being populated with real data (video title, date, description, iframe, etc).

<img width="1347" alt="screen shot 2017-03-31 at 11 49 16" src="https://cloud.githubusercontent.com/assets/20629455/24547586/82df17a2-1608-11e7-9627-3df23f3cbb15.png">
<img width="1375" alt="screen shot 2017-03-31 at 11 49 26" src="https://cloud.githubusercontent.com/assets/20629455/24547585/82cba884-1608-11e7-995a-a429dede8891.png">


### 6. Design Polish

I wasn't particularly happy with the design of the app (still not sure that I am) and set about creating a nav bar, populating the video thumbnail images properly, allowing for different colour video thumbnail overlays (as per my balsamiq wireframe), converting the date into a readable format and creating a custom play button thumbnail overlay for the show page similar to [this](http://www.highsnobiety.com/2017/03/30/mac-demarco-this-old-dog-video/).

I learned some really interesting things completing the above, for example that to make a div's height responsive to its own width the padding-bottom css attribute can be used. When set to a percentage value it becomes linked to the div's width. This enabled my video thumbnails to be kept at the correct aspect ratio regardless of width.

I also managed to achieve the desired custom play button on the video show page by only appending the iframe to the page once the button had been clicked. This also helped with the performance of the site as the user did not have to wait for the iframe to load when they visit a video-show page.

Furthermore I created a nav bar which allowed the user to skip to the next/previous video from a video-show page or go to a random video from the video-index page. This was a little tricky and required a random index to be generated on reciept of response from the YouTube JSON API and a `goToRandomVideo` function to be passed into an `ng-click` directive. This is because a simple ui-sref with a random number passed as a parameter would error.

<img width="1375" alt="screen shot 2017-03-31 at 17 00 07" src="https://cloud.githubusercontent.com/assets/20629455/24558694/f4464782-1633-11e7-9596-279e73e10bcf.png">
<img width="1375" alt="screen shot 2017-03-31 at 16 59 59" src="https://cloud.githubusercontent.com/assets/20629455/24558695/f4575662-1633-11e7-800c-e74eb50d2f88.png">

After the above I was still not happy with the looks of the app and started looking for / trying to create a more coherent colour scheme. This search took a long time and was mostly fruitless. Tying myself to a multicoloured design (video thumbnail overlays) made it very difficult to get a professional look. I also realised that my design was heavily reliant on the thumbnails provide by the YouTube JSON API, which were not the best quality.

The new colour scheme, updated font sizes (now in rem units) and new nav bar icons are shown below.

![screen shot 2017-04-02 at 11 39 19](https://cloud.githubusercontent.com/assets/20629455/24586451/15618c5e-1799-11e7-9596-e25ece85cda7.png)
![screen shot 2017-04-02 at 11 39 12](https://cloud.githubusercontent.com/assets/20629455/24586452/156398fa-1799-11e7-9be4-c015f458bb3a.png)

### 7. Code Polish

At this point I decided to clean up my code a little by removing parts which were no longer used, refactoring parts which felt hacky, implementing some accessibility guidelines into my HTML, looking for optimisation opportunities and testing the app across different browsers.

My accessibility considerations consisted of using semantic HTML elements and assigning some attributes to my tags (roles, aria-labels tab index's, alts). I used Chrome Vox to test these improvements.

With regards to optimisation the images were loading quickly and the embedded videos were only loaded on user click. My gulp task also automatically combined and minified my static files.

![screen shot 2017-04-02 at 15 51 48](https://cloud.githubusercontent.com/assets/20629455/24588223/4efae910-17bc-11e7-9ca7-8786afbde08d.png)

I found that to do cross browser checks I needed to use an online service like browserstack which can only test deployed sites.

### 8. Deployment

When I first tried to deploy to Heroku the my index.html file was being inserted were I expected my view files to be (e.g video-index.html and video-show.html). I inspected the element and saw that requests for views (e.g public/js/views/video-index.html) were returning the index.html file. I understood that this meant my express server could not find the correct file and was serving the index.html file again. I then ran `heroku run bash` and found that the public folder on Heroku did not contain a view folder (screenshots below).

<img width="1025" alt="screen shot 2017-04-02 at 18 26 37" src="https://cloud.githubusercontent.com/assets/20629455/24590927/28c6be36-17ee-11e7-9f0c-de7ea287907f.png">
<img width="1025" alt="screen shot 2017-04-02 at 18 19 38" src="https://cloud.githubusercontent.com/assets/20629455/24590928/28e01372-17ee-11e7-8db9-2d9b8343391e.png">

Eventually this issue was resolved with help from my old GA instructor. I needed to add a post install script to my package.json file so that Heroku would run gulp once the app was deployed:

```
  "scripts": {
    "postinstall": "bower install && gulp deploy"
  },  
```

I also needed to set the Heroku production variable to false (command below) so that Heroku would install all the gulp dependencies in the devDepedencies of my package.json.

`heroku config:set NPM_CONFIG_PRODUCTION=false`

This solution was not found until Monday afternoon meaning the only crossbrowser testing I could do was on safari on my local machine which seemed to work fine.

### 9. Responsive Design

Thanks to bootstraps grid system it was pretty easy to get to an MVP (screenshots below) however I realised there was definitely room for improvement.

![screen shot 2017-04-02 at 21 48 10](https://cloud.githubusercontent.com/assets/20629455/24590925/22045e1e-17ee-11e7-9165-727c1bf0f516.png)
![screen shot 2017-04-02 at 21 48 03](https://cloud.githubusercontent.com/assets/20629455/24590926/221e3956-17ee-11e7-96aa-c7e0f82641e5.png)


### 10. Adding Features

Having achieved an MVP and deployed it to Heroku I decided to add some features:

1. Video descriptions to show underneath the title and date above a certain breakpoint on the video-index view.
2. Video thumbnail gradient to increase opacity on hover on both views.
3. Animate between views and have the thumbnails appear sequentially on view load.

The second feature required a complete rework of my html components as I became aware that it is not possible to apply CSS transitions to a background image (my gradients and thumbnail images were in the same background-image attribute on the same div). This meant I had to separate the image, gradient and text into layered divs with absolute positioning. Their size then had to be adjusted with a combination of CSS attributes. Once that was done AngularJS' mouseenter and mouseleave directives were used to increment the opacity of the gradient layer.

The same process was then applied to the video-show view to allow the gradient layer to increase in opacity and to allow the play button to grow in size, both on hover.

The third feature also proved to be difficult. I found [this](http://plnkr.co/edit/2vJT2PNdjEABxPupxX1K?p=preview) example online however for some reason the first two items in my ngrepeat (which was now using `$first` to differentiate classes between the larger first video and the others) would not animate as expected.

The final app can be seen below and a link is at the top of this document.

<img width="1364" alt="screen shot 2017-04-04 at 00 01 35" src="https://cloud.githubusercontent.com/assets/20629455/24635192/eb1e759c-18c9-11e7-9874-164ebedb4cbe.png">
<img width="849" alt="screen shot 2017-04-03 at 20 42 57" src="https://cloud.githubusercontent.com/assets/20629455/24628148/34829e46-18ae-11e7-8613-fc2e9737b7c7.png">
<img width="1321" alt="screen shot 2017-04-03 at 20 42 41" src="https://cloud.githubusercontent.com/assets/20629455/24628149/349ad9fc-18ae-11e7-9dd1-9bb22bac0390.png">

## Known Issues To Be Addressed

I am sure there were many more issues than listed below however the ones that immediately sprang to mind were:

1. I think the overall design could be improved.
2. The ends of long video descriptions are cut in the video-index view.
3. The first two videos don't animate in sequence in the video-index view.