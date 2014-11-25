var _ = require('underscore');

// Create some basic HTML listing the forks
var stars = function (repositories) {
  function top5(){
    console.log('top5()');
    var sortedShortList = _.sortBy(repositories, function(repo){
      return repo.stargazers_count; /* jshint ignore:line */
    });
    // reverse the order (from ascending to descending) and return the first 5 results
    return sortedShortList.reverse().splice(0, 5);
  }

  function averageStars(){
    console.log('averageStars()');
    var avg, sum, count = 0;

    sum = _.reduce(repositories, function(memo, repo){
      // Increase the count, so we can divide the total stars
      // by the amount of repositories we have
      count += 1;
      return memo + repo.stargazers_count; /* jshint ignore:line */
    }, 0);

    avg = Math.round(sum / count);

    return avg;
  }

  return {
    top5: top5,
    averageStars: averageStars
  };
};

module.exports = stars;
