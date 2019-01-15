var request = require('request');

var token = require('./secrets');


console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var options = {
    url: "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors",
    headers: {
      'User-Agent': 'request',
      'Authorization': 'token ' + token.GITHUB_TOKEN
    }
  };

  request(options, function(err, res, body) {
    var data = JSON.parse(body); //parsing data

    cb(err, body,);

    data.forEach(function(data) {    //iterate over results **referred to karl's notes
      console.log(data.avatar_url);  //accessing github user content
    })
    console.log(data.length + ' repos');
  });
}

// function getRepoContributors(repoOwner, repoName, cb) {
//   var url = "https://api.github.com/repos/" + repoOwner + "/" + repoName + "/contributors";
//   request(url, function(err, res, body) {
//     cb(err, body);
//   });
// }  // ...

getRepoContributors("jquery", "jquery", function(err, result) {
  console.log("Errors:", err);
  console.log("Result:", result);
});

// getRepoContributors(err, result);




// require('dotenv').config();

// var request = require('request');

// request({
//   url: `https://api.github.com/users/jensen/repos`,
//   qs: {
//     sort: 'created',
//     access_token: process.env.GITHUB_TOKEN
//   },
//   headers: {
//     'user-agent': 'node application'
//   }
// }, function(error, response, body) {
//   var repos = JSON.parse(body);

//   repos.forEach(function(repo) {
//     console.log(repo.name);
//   });

//   console.log(repos.length + ' repos');
// });