const favMovies = ["Gentlemen", "Lord Of War", "Legend"];
document.querySelector("#showMovieBtn").addEventListener("click", () => {
  console.log(favMovies);
  for (let i = 0; i < favMovies.length; i++) {
    alert(favMovies[i]);
  }
});
