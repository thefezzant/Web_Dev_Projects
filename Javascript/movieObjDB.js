var movieDB = [
  {
    title: "The Big Lebowski",
    hasWatched: true,
    rating: 7
  },
  {
    title: "Balls of Fury",
    hasWatched: true,
    rating: 0.5
  },
  {
    title: "Whiplash",
    hasWatched: false,
    rating: 2.5
  },
  {
    title: "The Fountain",
    hasWatched: false,
    rating: 4
  }
];

movieDB.forEach(function(movie) {
  for (var i = 0; i < movieDB.length; i++) {
    if (movie.hasWatched === true) {
      var seen = "You have seen \"";
    }
    else {
      var seen = "You have not seen \""
    }
    console.log(seen + movie.title + "\" - " + movie.rating + " stars");
  }
});
